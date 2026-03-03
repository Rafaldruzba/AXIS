import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader2, CheckCircle2, AlertCircle, Info, X } from 'lucide-react'
import Footer from '../components/Footer'

import DatePicker, { registerLocale } from 'react-datepicker'
import pl from 'date-fns/locale/pl' // Polska lokalizacja
import 'react-datepicker/dist/react-datepicker.css'
import './datepicker-custom.css'

registerLocale('pl', pl)

// Zakładam, że cart może pochodzić z contextu lub propsów
const Contact = ({ cart = [] }) => {
	const [status, setStatus] = useState('idle')
	const [formData, setFormData] = useState({
		name: '',
		date: null,
		email: '',
		phone: '',
		message: '',
	})

	// Automatyczne wypełnianie wiadomości z koszyka
	useEffect(() => {
		if (cart && cart.length > 0) {
			const podsumowanie = cart.map(item => item.name).join(', ')
			setFormData(prev => ({
				...prev,
				message: `Interesuje mnie rezerwacja: ${podsumowanie}. Proszę o sprawdzenie terminu.`,
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

			// Obsługa statusów z n8n
			if (result.status === 'wolne' || result.status === 'individual' || response.ok) {
				setStatus(result.status || 'sent')
				if (result.status !== 'zajete') {
					setFormData({ name: '', date: '', email: '', phone: '', message: '' })
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
		const variants = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } }

		const messages = {
			wolne: { color: 'emerald', icon: <CheckCircle2 size={20} />, text: 'Termin wolny! Rezerwacja została wysłana.' },
			zajete: {
				color: 'orange',
				icon: <AlertCircle size={20} />,
				text: 'Ten termin jest już zajęty. Wybierz inną datę.',
			},
			individual: {
				color: 'blue',
				icon: <Info size={20} />,
				text: 'Wysłano! Odezwiemy się w sprawie wyceny indywidualnej.',
			},
			sent: { color: 'emerald', icon: <CheckCircle2 size={20} />, text: 'Wiadomość została wysłana pomyślnie!' },
			error: { color: 'red', icon: <X size={20} />, text: 'Błąd wysyłki. Spróbuj ponownie później.' },
		}

		const current = messages[status]
		if (!current) return null

		return (
			<motion.div
				variants={variants}
				initial='initial'
				animate='animate'
				className={`mt-4 p-4 bg-${current.color}-500/10 border border-${current.color}-500/50 rounded-xl flex items-center gap-3 text-${current.color}-400`}>
				{current.icon} <span className='font-bold'>{current.text}</span>
			</motion.div>
		)
	}

	return (
		<div className='min-h-screen bg-zinc-950 flex flex-col'>
			{/* Główna sekcja formularza */}
			<main className='flex-grow flex flex-col items-center justify-center p-6 pt-32 pb-20'>
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='w-full max-w-2xl'>
					<div className='text-center mb-12'>
						<h1 className='text-6xl md:text-8xl font-black mb-4 uppercase tracking-tighter text-white'>
							ZRÓBMY{' '}
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500'>HAŁAS!</span>
						</h1>
						<p className='text-zinc-400 text-lg'>Masz pytania? Napisz do nas!</p>
					</div>

					<form onSubmit={handleSubmit} className='space-y-4 relative'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<input
								required
								type='text'
								placeholder='Imię'
								value={formData.name}
								onChange={e => setFormData({ ...formData, name: e.target.value })}
								className='w-full p-5 bg-white/[0.03] border border-white/10 rounded-2xl outline-none text-white focus:border-blue-500/50 transition-colors'
							/>
							<div className='w-full'>
								<DatePicker
									selected={formData.date}
									onChange={date => setFormData({ ...formData, date })}
									placeholderText='Wybierz termin'
									locale='pl'
									dateFormat='dd.MM.yyyy'
									minDate={new Date()} // Nie można wybrać daty z przeszłości
									required
									className='w-full p-5 bg-white/[0.03] border border-white/10 rounded-2xl outline-none text-white focus:border-blue-500/50 transition-colors'
									wrapperClassName='w-full' // Ważne dla Tailwinda
								/>
							</div>
						</div>

						<input
							required
							type='email'
							placeholder='Twój E-mail'
							value={formData.email}
							onChange={e => setFormData({ ...formData, email: e.target.value })}
							className='w-full p-5 bg-white/[0.03] border border-white/10 rounded-2xl outline-none text-white focus:border-blue-500/50 transition-colors'
						/>
						<input
							required
							type='tel'
							placeholder='Twój numer telefonu'
							value={formData.phone}
							onChange={e => setFormData({ ...formData, phone: e.target.value })}
							className='w-full p-5 bg-white/[0.03] border border-white/10 rounded-2xl outline-none text-white focus:border-blue-500/50 transition-colors'
						/>
						<textarea
							placeholder='Gdzie impreza? Jaki sprzęt Cię interesuje?'
							value={formData.message}
							onChange={e => setFormData({ ...formData, message: e.target.value })}
							className='w-full p-5 bg-white/[0.03] border border-white/10 rounded-2xl h-40 outline-none text-white resize-none focus:border-blue-500/50 transition-colors'
						/>

						<button
							type='submit'
							disabled={status === 'loading'}
							className='group relative w-full overflow-hidden rounded-2xl p-[2px] transition-transform hover:scale-[1.01] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100'>
							<div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600' />
							<div className='relative flex items-center justify-center gap-3 bg-zinc-950 py-5 rounded-2xl group-hover:bg-transparent transition-all'>
								{status === 'loading' ? (
									<Loader2 className='animate-spin text-white' />
								) : (
									<>
										<span className='font-black text-xl tracking-widest text-white'>WYŚLIJ ZAPYTANIE</span>
										<Send size={20} className='text-white' />
									</>
								)}
							</div>
						</button>

						<AnimatePresence>
							<StatusMessage />
						</AnimatePresence>
					</form>
				</motion.div>
			</main>
		</div>
	)
}

export default Contact
