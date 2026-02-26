import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Loader2, CheckCircle2, AlertCircle, Info } from 'lucide-react'
import Footer from './Footer'

const Contact = ({ setScene, cart }) => {
	const [status, setStatus] = useState('idle') // idle, loading, wolne, zajete, individual, error, sent
	const [formData, setFormData] = useState({
		name: '',
		date: '',
		email: '',
		phone: '',
		message: '',
	})

	useEffect(() => {
		if (cart && cart.length > 0) {
			const podsumowanie = cart.map(item => `${item.name}`).join(', ')
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
			total: cart.reduce((sum, item) => sum + item.price, 0),
		}

		try {
			const response = await fetch(webhookUrl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			})

			const result = await response.json()

			if (payload.source === 'konfigurator') {
				// Mapowanie statusów z n8n na stany UI
				console.log('Odpowiedź z n8n:', result.status) // Logowanie odpowiedzi dla debugowania
				if (result.status === 'wolne') {
					setStatus('wolne')
					setFormData({ name: '', date: '', email: '', phone: '', message: '' }) // Czyszczenie
				} else if (result.status === 'zajete') {
					setStatus('zajete')
				} else if (result.status === 'individual') {
					setStatus('individual')
					setFormData({ name: '', date: '', email: '', phone: '', message: '' })
				} else {
					setStatus('sent')
				}
			} else {
				setStatus('sent')
				setFormData({ name: '', date: '', email: '', phone: '', message: '' })
			}
		} catch (err) {
			setStatus('error')
		}
	}

	// Komponenty powiadomień pod przyciskiem
	const StatusMessage = () => {
		const variants = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } }

		if (status === 'wolne')
			return (
				<motion.div
					{...variants}
					className='mt-4 p-4 bg-emerald-500/10 border border-emerald-500/50 rounded-xl flex items-center gap-3 text-emerald-400'>
					<CheckCircle2 size={20} /> <span className='font-bold'>Termin wolny! Rezerwacja została wysłana.</span>
				</motion.div>
			)
		if (status === 'zajete')
			return (
				<motion.div
					{...variants}
					className='mt-4 p-4 bg-orange-500/10 border border-orange-500/50 rounded-xl flex items-center gap-3 text-orange-400'>
					<AlertCircle size={20} /> <span className='font-bold'>Ten termin jest już zajęty. Wybierz inną datę.</span>
				</motion.div>
			)
		if (status === 'individual')
			return (
				<motion.div
					{...variants}
					className='mt-4 p-4 bg-blue-500/10 border border-blue-500/50 rounded-xl flex items-center gap-3 text-blue-400'>
					<Info size={20} /> <span className='font-bold'>Wysłano! Odezwiemy się w sprawie wyceny indywidualnej.</span>
				</motion.div>
			)
		if (status === 'error')
			return (
				<motion.div
					{...variants}
					className='mt-4 p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-center gap-3 text-red-400'>
					<X size={20} /> <span className='font-bold'>Błąd wysyłki. Spróbuj ponownie później.</span>
				</motion.div>
			)
		return null
	}

	return (
		<motion.section
			initial={{ y: '100%' }}
			animate={{ y: 0 }}
			exit={{ y: '100%' }}
			transition={{ type: 'spring', damping: 25, stiffness: 100 }}
			className='absolute inset-0 bg-zinc-950 z-[150] flex flex-col overflow-y-auto custom-scrollbar'>
			{/* ... reszta Twojego kodu tła i przycisku zamknięcia ... */}
			<button
				onClick={() => setScene('inside')}
				className='fixed top-8 right-8 z-[160] hover:rotate-90 transition-all p-3 rounded-full border border-white/10 backdrop-blur-md'>
				<X size={28} className='text-white' />
			</button>

			<div className='relative z-10 flex-grow flex flex-col items-center justify-center p-6 pt-32 pb-20'>
				<div className='w-full max-w-2xl'>
					<div className='text-center mb-12'>
						<h2 className='text-6xl md:text-8xl font-black mb-4 uppercase tracking-tighter text-white'>
							ZRÓBMY{' '}
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500'>HAŁAS!</span>
						</h2>
					</div>

					<form onSubmit={handleSubmit} className='space-y-4 relative'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<input
								required
								type='text'
								placeholder='Imię'
								value={formData.name}
								onChange={e => setFormData({ ...formData, name: e.target.value })}
								className='w-full p-5 bg-white/[0.03] border border-white/10 rounded-2xl outline-none text-white focus:border-blue-500/50'
							/>
							<input
								required
								type='text'
								placeholder='Data (np. 12.05.2026)'
								value={formData.date}
								onChange={e => setFormData({ ...formData, date: e.target.value })}
								className='w-full p-5 bg-white/[0.03] border border-white/10 rounded-2xl outline-none text-white focus:border-blue-500/50'
							/>
						</div>

						<input
							required
							type='email'
							placeholder='Twój E-mail'
							value={formData.email}
							onChange={e => setFormData({ ...formData, email: e.target.value })}
							className='w-full p-5 bg-white/[0.03] border border-white/10 rounded-2xl outline-none text-white focus:border-blue-500/50'
						/>
						<input
							required
							type='tel'
							placeholder='Twój numer telefonu'
							value={formData.phone}
							onChange={e => setFormData({ ...formData, phone: e.target.value })}
							className='w-full p-5 bg-white/[0.03] border border-white/10 rounded-2xl outline-none text-white focus:border-blue-500/50'
						/>
						<textarea
							placeholder='Gdzie impreza? Jaki sprzęt Cię interesuje?'
							value={formData.message}
							onChange={e => setFormData({ ...formData, message: e.target.value })}
							className='w-full p-5 bg-white/[0.03] border border-white/10 rounded-2xl h-40 outline-none text-white resize-none focus:border-blue-500/50'
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
				</div>
			</div>
			<Footer />
		</motion.section>
	)
}

export default Contact
