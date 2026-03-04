import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader2, CheckCircle2, AlertCircle, Info, X, MapPin, Phone, Mail } from 'lucide-react'

import DatePicker, { registerLocale } from 'react-datepicker'
import pl from 'date-fns/locale/pl'
import 'react-datepicker/dist/react-datepicker.css'
import './datepicker-custom.css'

registerLocale('pl', pl)

const Contact = ({ cart = [] }) => {
	const [status, setStatus] = useState('idle')
	const [formData, setFormData] = useState({
		name: '',
		date: null,
		email: '',
		phone: '',
		message: '',
	})

	useEffect(() => {
		if (cart && cart.length > 0) {
			const podsumowanie = cart.map(item => item.name).join(', ')
			setFormData(prev => ({
				...prev,
				message: `Interesuje mnie realizacja z wykorzystaniem: ${podsumowanie}. Proszę o sprawdzenie terminu.`,
			}))
		}
	}, [cart])

	const handleSubmit = async e => {
		e.preventDefault()
		setStatus('loading')

		const webhookUrl = 'https://n8n-production-8616.up.railway.app/webhook/58b7327f-b8ec-4bc9-9686-e4bbe003bfbe'
		const payload = {
			source: cart.length > 0 ? 'konfigurator' : 'kontakt_ogolny',
			data: formData,
			cart: cart,
			total: cart.reduce((sum, item) => sum + (item.price || 0), 0),
		}

		try {
			const response = await fetch(webhookUrl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			})
			const result = await response.json()

			if (result.status === 'wolne' || result.status === 'individual' || response.ok) {
				setStatus(result.status || 'sent')
				if (result.status !== 'zajete') {
					setFormData({ name: '', date: null, email: '', phone: '', message: '' })
				}
			} else if (result.status === 'zajete') {
				setStatus('zajete')
			} else {
				setStatus('sent')
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
				title: 'Termin wolny!',
				desc: 'Twoja rezerwacja została wysłana.',
			},
			zajete: {
				bg: 'bg-amber-50',
				border: 'border-amber-200',
				text: 'text-amber-800',
				icon: <AlertCircle className='text-amber-500' />,
				title: 'Termin zajęty',
				desc: 'Ten dzień jest już zarezerwowany. Wybierz inną datę.',
			},
			individual: {
				bg: 'bg-blue-50',
				border: 'border-blue-200',
				text: 'text-blue-800',
				icon: <Info className='text-blue-500' />,
				title: 'Wycena indywidualna',
				desc: 'Wiadomość wysłana! Odezwiemy się niebawem.',
			},
			sent: {
				bg: 'bg-emerald-50',
				border: 'border-emerald-200',
				text: 'text-emerald-800',
				icon: <CheckCircle2 className='text-emerald-500' />,
				title: 'Sukces!',
				desc: 'Wiadomość dotarła do naszych realizatorów.',
			},
			error: {
				bg: 'bg-red-50',
				border: 'border-red-200',
				text: 'text-red-800',
				icon: <X className='text-red-500' />,
				title: 'Błąd wysyłki',
				desc: 'Coś poszło nie tak. Spróbuj wysłać ponownie.',
			},
		}

		const current = messages[status]
		if (!current) return null

		return (
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				className={`mt-6 p-6 ${current.bg} ${current.border} border-2 rounded-[2rem] flex items-start gap-4`}>
				<div className='mt-1'>{current.icon}</div>
				<div>
					<h4 className={`font-black uppercase tracking-tight ${current.text}`}>{current.title}</h4>
					<p className={`text-sm ${current.text} opacity-80`}>{current.desc}</p>
				</div>
			</motion.div>
		)
	}

	return (
		<div className='min-h-screen bg-[#fdfbf7]'>
			<main className='max-w-7xl mx-auto px-6 pt-40 pb-20'>
				<div className='grid lg:grid-cols-12 gap-20 items-start'>
					{/* LEWA STRONA - INFO */}
					<div className='lg:col-span-5 space-y-12'>
						<div>
							<span className='text-amber-600 font-black uppercase tracking-[0.4em] text-xs mb-6 block'>Kontakt</span>
							<h1 className='text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none mb-8'>
								Zaplanujmy Twój <br />
								<span className='text-amber-500'>Następny Event.</span>
							</h1>
							<p className='text-gray-500 text-lg leading-relaxed max-w-md'>
								Nasz zespół techniczny przygotuje dla Ciebie kompletną wycenę wraz z wizualizacją oświetlenia i planem
								nagłośnienia.
							</p>
						</div>

						<div className='space-y-6'>
							<div className='flex items-center gap-6 group'>
								<div className='w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all'>
									<Phone size={24} />
								</div>
								<div>
									<p className='text-xs font-black text-gray-400 uppercase tracking-widest'>Zadzwoń do nas</p>
									<p className='text-xl font-bold text-gray-900'>+48 791 445 104</p>
									<p className='text-xl font-bold text-gray-900'>+48 502 190 862</p>
								</div>
							</div>
							<div className='flex items-center gap-6 group'>
								<div className='w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all'>
									<Mail size={24} />
								</div>
								<div>
									<p className='text-xs font-black text-gray-400 uppercase tracking-widest'>Napisz e-mail</p>
									<p className='text-xl font-bold text-gray-900'>hello.axis.events@gmail.com</p>
								</div>
							</div>
						</div>
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
								className='w-full bg-gray-900 text-white py-6 rounded-3xl font-black uppercase text-sm tracking-[0.2em] hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 shadow-xl flex items-center justify-center gap-4'>
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
					className='mt-20 w-full h-[350px] rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-200/50 border border-white'>
					<iframe
						title='Lokalizacja Axis Events'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35438507568!2d20.921112397265625!3d52.23266499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc6690623ab7%3A0xfb1f15243e0e01!2sŁochów!5e0!3m2!1spl!2spl!4v1710000000000!5m2!1spl!2spl'
						width='100%'
						height='100%'
						style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'></iframe>
				</motion.div>
			</main>
		</div>
	)
}

export default Contact
