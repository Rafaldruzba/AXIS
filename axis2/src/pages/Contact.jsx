import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader2, CheckCircle2, AlertCircle, Info, X, Mail, Phone, Calendar } from 'lucide-react'

import DatePicker, { registerLocale } from 'react-datepicker'
import { format } from 'date-fns'
import pl from 'date-fns/locale/pl'
import 'react-datepicker/dist/react-datepicker.css'
import './datepicker-custom.css'
import { useLocation } from 'react-router-dom'

registerLocale('pl', pl)

const Contact = () => {
	const location = useLocation()
	// Pobieramy z lokalizacji lub z localStorage, jeśli użytkownik odświeżył stronę
	const cart = location.state?.cart || JSON.parse(localStorage.getItem('axis_cart') || '[]')

	const [status, setStatus] = useState('idle')
	const [formData, setFormData] = useState({
		name: '',
		date: null,
		email: '',
		phone: '',
		message: '',
	})

	useEffect(() => {
		if (cart.length > 0) {
			const listaProduktow = cart.map(item => `- ${item.name} (${item.price || 'wycena ind.'})`).join('\n')
			const total = cart.reduce((sum, item) => {
				const p = typeof item.price === 'string' ? parseInt(item.price.replace(/\s/g, '')) : item.price || 0
				return sum + p
			}, 0)

			setFormData(prev => ({
				...prev,
				message: `Dzień dobry, proszę o ofertę na poniższe zestawienie:\n\n${listaProduktow}\n\nSuma szacunkowa: ${total > 0 ? total + ' zł' : 'do ustalenia'}.\n\nLokalizacja i dodatkowe info: `,
			}))
		}
	}, [location.state])

	const handleSubmit = async e => {
		e.preventDefault()
		setStatus('loading')

		const webhookUrl = 'https://n8n-production-8616.up.railway.app/webhook/58b7327f-b8ec-4bc9-9686-e4bbe003bfbe'

		const payload = {
			source: cart.length > 0 ? 'konfigurator' : 'kontakt_ogolny',
			data: {
				...formData,
				// Formatujemy datę do ISO, żeby n8n łatwiej ją czytało w Google Calendar
				date: formData.date ? format(formData.date, 'yyyy-MM-dd') : null,
			},
			cart: cart,
			total: cart.reduce((sum, item) => {
				const p = typeof item.price === 'string' ? parseInt(item.price.replace(/\s/g, '')) : item.price || 0
				return sum + p
			}, 0),
		}

		try {
			const response = await fetch(webhookUrl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			})

			const result = await response.json()

			// LOGIKA N8N: 'wolne' | 'zajete' | 'individual'
			if (result.status === 'wolne' || result.status === 'individual') {
				setStatus(result.status)
				// Czyścimy koszyk tylko gdy termin jest wolny/przyjęty
				localStorage.removeItem('axis_cart')
				setFormData({ name: '', date: null, email: '', phone: '', message: '' })
			} else if (result.status === 'zajete') {
				setStatus('zajete')
			} else if (response.ok) {
				setStatus('sent')
				localStorage.removeItem('axis_cart')
			} else {
				setStatus('error')
			}
		} catch (err) {
			setStatus('error')
		}
	}

	const StatusMessage = () => {
		const messages = {
			wolne: {
				bg: 'bg-emerald-50',
				border: 'border-emerald-200',
				text: 'text-emerald-800',
				icon: <CheckCircle2 className='text-emerald-500' />,
				title: 'Termin wolny i zarezerwowany!',
				desc: 'Twoja wstępna rezerwacja trafiła do kalendarza. Szczegóły wysłaliśmy na e-mail.',
			},
			zajete: {
				bg: 'bg-amber-50',
				border: 'border-amber-200',
				text: 'text-amber-900', // Poprawiony kontrast
				icon: <AlertCircle className='text-amber-600' />,
				title: 'Ten termin jest już zajęty',
				desc: 'Przykro nam, ale ten dzień jest zarezerwowany. Wybierz inną datę lub poczekaj na naszą odpowiedź z propozycją bliskiej daty – sprawdzimy, co da się zrobić!',
			},
			individual: {
				bg: 'bg-blue-50',
				border: 'border-blue-200',
				text: 'text-blue-800',
				icon: <Info className='text-blue-500' />,
				title: 'Wycena indywidualna',
				desc: 'Twoje zapytanie zostało przekazane do managera. Odezwiemy się niebawem!',
			},
			sent: {
				bg: 'bg-emerald-50',
				border: 'border-emerald-200',
				text: 'text-emerald-800',
				icon: <CheckCircle2 className='text-emerald-500' />,
				title: 'Wiadomość wysłana',
				desc: 'Dziękujemy za kontakt. Potwierdzenie znajdziesz na swojej skrzynce.',
			},
			error: {
				bg: 'bg-red-50',
				border: 'border-red-200',
				text: 'text-red-800',
				icon: <X className='text-red-500' />,
				title: 'Błąd połączenia',
				desc: 'Nie udało się wysłać formularza. Spróbuj ponownie za chwilę.',
			},
		}

		const current = messages[status]
		if (!current) return null

		return (
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0 }}
				className={`mt-6 p-6 ${current.bg} ${current.border} border-2 rounded-[2rem] flex items-start gap-4 shadow-sm`}>
				<div className='mt-1'>{current.icon}</div>
				<div>
					<h4 className={`font-black uppercase tracking-tight ${current.text}`}>{current.title}</h4>
					<p className={`text-sm ${current.text} opacity-90`}>{current.desc}</p>
				</div>
			</motion.div>
		)
	}

	return (
		<div className='min-h-screen bg-[#fdfbf7]'>
			{/* Badge Koszyka */}
			{cart.length > 0 && (
				<div className='fixed top-32 right-10 z-50 animate-bounce hidden md:block'>
					<div className='bg-amber-500 text-gray-900 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-[0_10px_30px_rgba(245,158,11,0.4)]'>
						🛒 {cart.length} pozycje wczytane
					</div>
				</div>
			)}

			<main className='max-w-7xl mx-auto px-6 pt-40 pb-20'>
				<div className='grid lg:grid-cols-12 gap-20 items-start'>
					{/* LEWA STRONA */}
					<div className='lg:col-span-5 space-y-12'>
						<header>
							<span className='text-amber-600 font-black uppercase tracking-[0.4em] text-xs mb-6 block'>Kontakt</span>
							<h1 className='text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none mb-8'>
								Zaplanujmy Twój <br />
								<span className='text-amber-500'>Następny Event.</span>
							</h1>
							<p className='text-gray-500 text-lg leading-relaxed max-w-md'>
								Nasz zespół techniczny przygotuje dla Ciebie kompletną wycenę wraz z wizualizacją oświetlenia i planem
								nagłośnienia.
							</p>
						</header>

						<section className='space-y-6' aria-label='Dane kontaktowe'>
							<div className='flex items-center gap-6 group'>
								<div className='w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all'>
									<Phone size={24} />
								</div>
								<div>
									<p className='text-xs font-black text-gray-400 uppercase tracking-widest'>Zadzwoń do nas</p>
									<p className='text-xl font-bold text-gray-900'>+48 791 445 104</p>
								</div>
							</div>
							<div className='flex items-center gap-6 group'>
								<div className='w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all'>
									<Mail size={24} />
								</div>
								<div>
									<p className='text-xs font-black text-gray-400 uppercase tracking-widest'>Napisz e-mail</p>
									<p className='text-xl font-bold text-gray-900'>hello.axis.events@gmail.com</p>
								</div>
							</div>
						</section>
					</div>

					{/* PRAWA STRONA - FORMULARZ */}
					<div className='lg:col-span-7 bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-100'>
						<form onSubmit={handleSubmit} className='space-y-6'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div className='space-y-2'>
									<label className='text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4'>
										Imię i Nazwisko
									</label>
									<input
										required
										type='text'
										placeholder='Jan Kowalski'
										value={formData.name}
										onChange={e => setFormData({ ...formData, name: e.target.value })}
										className='w-full p-5 bg-[#fdfbf7] border-none rounded-3xl outline-none text-gray-900 focus:ring-2 focus:ring-amber-500/20 transition-all font-medium'
									/>
								</div>
								<div className='space-y-2'>
									<label className='text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4'>
										Data Wydarzenia
									</label>
									<div className='relative'>
										<DatePicker
											selected={formData.date}
											onChange={date => setFormData({ ...formData, date })}
											placeholderText='Wybierz dzień'
											locale='pl'
											dateFormat='dd.MM.yyyy'
											minDate={new Date()}
											required
											className='w-full p-5 bg-[#fdfbf7] border-none rounded-3xl outline-none text-gray-900 focus:ring-2 focus:ring-amber-500/20 transition-all font-medium'
											wrapperClassName='w-full'
										/>
									</div>
								</div>
							</div>

							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div className='space-y-2'>
									<label className='text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4'>E-mail</label>
									<input
										required
										type='email'
										placeholder='kontakt@twojafirma.pl'
										value={formData.email}
										onChange={e => setFormData({ ...formData, email: e.target.value })}
										className='w-full p-5 bg-[#fdfbf7] border-none rounded-3xl outline-none text-gray-900 focus:ring-2 focus:ring-amber-500/20 transition-all font-medium'
									/>
								</div>
								<div className='space-y-2'>
									<label className='text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4'>Telefon</label>
									<input
										required
										type='tel'
										placeholder='+48 000 000 000'
										value={formData.phone}
										onChange={e => setFormData({ ...formData, phone: e.target.value })}
										className='w-full p-5 bg-[#fdfbf7] border-none rounded-3xl outline-none text-gray-900 focus:ring-2 focus:ring-amber-500/20 transition-all font-medium'
									/>
								</div>
							</div>

							<div className='space-y-2'>
								<label className='text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4'>
									Szczegóły realizacji
								</label>
								<textarea
									placeholder='Opisz swoją wizję lub podaj lokalizację...'
									value={formData.message}
									onChange={e => setFormData({ ...formData, message: e.target.value })}
									className='w-full p-6 bg-[#fdfbf7] border-none rounded-3xl h-40 outline-none text-gray-900 resize-none focus:ring-2 focus:ring-amber-500/20 transition-all font-medium'
								/>
							</div>

							<button
								type='submit'
								disabled={status === 'loading'}
								className='w-full bg-gray-900 text-white py-6 rounded-3xl font-black uppercase text-sm tracking-[0.2em] hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 shadow-xl flex items-center justify-center gap-4 disabled:opacity-70'>
								{status === 'loading' ? (
									<Loader2 className='animate-spin' />
								) : (
									<>
										WYŚLIJ ZAPYTANIE <Send size={18} />
									</>
								)}
							</button>

							<AnimatePresence>
								<StatusMessage />
							</AnimatePresence>
						</form>
					</div>
				</div>

				{/* MAPA GOOGLE */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='mt-20 w-full h-[350px] overflow-hidden shadow-2xl shadow-gray-200/50 border border-white'>
					<iframe
						title='Lokalizacja Axis Events'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.494823764561!2d21.685773477025474!3d52.52448083589734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f1dcf99d1d1a3%3A0xd7cc2511ab71b8b7!2zU2Fkb3dhIDksIDA3LTEzMCDFgW9jaMOzdw!5e0!3m2!1sen!2spl!4v1773068329520!5m2!1sen!2spl'
						width='100%'
						height='100%'
						style={{ border: '2px solid gray', filter: 'grayscale(0.2) contrast(1.1)' }}
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'></iframe>
				</motion.div>

				{/* Przycisk powrotu z poprawionym kontrastem hover */}
				<div className='flex justify-center w-full px-6'>
					<button
						onClick={() => (window.location.href = '/')}
						className='w-full max-w-[400px] mt-14 py-6 rounded-3xl bg-gray-900 text-white font-black uppercase text-sm tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-4 shadow-[0_0_40px_rgba(245,158,11,0.2)] border border-amber-500/20 hover:bg-amber-500 hover:text-gray-900 hover:shadow-[0_0_60px_rgba(245,158,11,0.5)] active:scale-95'>
						Wróć na stronę główną
					</button>
				</div>
			</main>
		</div>
	)
}

export default Contact
