import { useState, useEffect } from 'react'
import offers from '../data/offers.json'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronDown, ShoppingBag, X } from 'lucide-react'

export default function Offer() {
	const [selected, setSelected] = useState(() => {
		const saved = localStorage.getItem('axis_cart')
		return saved ? JSON.parse(saved) : []
	})
	const [isOpen, setIsOpen] = useState(true)
	const navigate = useNavigate()

	useEffect(() => {
		localStorage.setItem('axis_cart', JSON.stringify(selected))
	}, [selected])

	// Discount logic — recalculates whenever cart changes
	const hasBar = selected.some(item => item.category === 'BAR')
	const hasAudio = selected.some(item => item.category === 'AUDIO')
	const discount = hasBar && hasAudio ? 20 : hasBar || hasAudio ? 10 : 0

	useEffect(() => {
		setSelected(prev => {
			const tentIndex = prev.findIndex(item => item.category === 'NAMIOT')
			if (tentIndex === -1) return prev

			const tent = prev[tentIndex]
			const base = tent.basePrice ?? Number(tent.price)

			if (isNaN(base)) return prev

			const newPrice = Math.round(base * (1 - discount / 100))
			const savedAmount = base - newPrice

			if (tent.price === newPrice && tent.appliedDiscount === discount) return prev

			const updated = [...prev]
			updated[tentIndex] = { ...tent, basePrice: base, price: newPrice, appliedDiscount: discount, savedAmount }
			return updated
		})
	}, [discount, selected.length])

	const totalPrice = selected.reduce((sum, item) => {
		const price = typeof item.price === 'string' ? parseInt(item.price.replace(/\s/g, '')) : item.price || 0
		return sum + price
	}, 0)

	const handleGoToContact = () => navigate('/kontakt', { state: { cart: selected } })

	const toggleItem = item => {
		const isAlreadyIn = selected.find(i => i.id === item.id)
		if (isAlreadyIn) {
			setSelected(prev => prev.filter(i => i.id !== item.id))
		} else {
			setSelected(prev => [...prev, item])
			setIsOpen(true)
		}
	}

	const removeFromQuote = id => setSelected(prev => prev.filter(item => item.id !== id))

	const renderCard = item => {
		const isInCart = selected.some(i => i.id === item.id)
		const cartVersion = selected.find(i => i.id === item.id)

		return (
			<div
				key={item.id}
				className='group bg-white rounded-[2.5rem] shadow-sm p-10 transition-all duration-500 hover:shadow-2xl border border-gray-100 flex flex-col justify-between relative overflow-hidden'>
				<div className='absolute top-0 right-0 bg-amber-500 text-gray-900 font-black px-6 py-2 rounded-bl-[1.5rem] text-sm shadow-sm'>
					{isInCart && cartVersion?.appliedDiscount > 0 ? (
						<div className='flex flex-col items-end leading-tight'>
							<span className='line-through text-gray-700 text-[10px] font-bold'>{cartVersion.basePrice} zł</span>
							<span>{cartVersion.price} zł</span>
						</div>
					) : (
						item.price || 'Wycena'
					)}
				</div>

				<div>
					<span className='text-amber-600 text-[10px] font-black uppercase tracking-[0.2em] mb-2 block'>
						Opcja Premium
					</span>
					<h3 className='text-2xl font-black text-gray-900'>{item.name}</h3>
					<p className='text-gray-400 mb-4 leading-relaxed text-sm'>{item.subtitle}</p>
					<p className='text-gray-600 mb-8 leading-relaxed text-sm'>{item.description}</p>
					<ul className='text-gray-500 mb-8 leading-relaxed text-sm list-disc list-inside space-y-1'>
						{item.includes?.map((el, index) => (
							<li key={index}>{el}</li>
						))}
					</ul>
				</div>

				<button
					onClick={() => toggleItem(item)}
					className={`w-full py-4 rounded-full font-black uppercase text-xs tracking-widest border-2 transition-all duration-300 ${
						isInCart
							? 'border-red-400 text-red-500 bg-red-50 hover:bg-red-100 cursor-pointer'
							: 'border-gray-900 group-hover:bg-gray-900 group-hover:text-white cursor-pointer'
					}`}>
					{isInCart ? 'Usuń z listy ✕' : 'Dodaj do konfiguracji'}
				</button>
			</div>
		)
	}

	return (
		<div className='pt-40 pb-40 bg-[#fdfbf7] min-h-screen relative'>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='text-left mb-32 relative'>
					<div className='absolute -left-10 top-0 w-32 h-32 bg-amber-200 blur-[80px] -z-10 opacity-50'></div>
					<h1 className='text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none'>
						Skonfiguruj <br />
						<span className='text-amber-500 text-outline'>Twój Event</span>
					</h1>
					<p className='text-gray-500 text-xl max-w-2xl font-medium leading-relaxed'>
						Wybierz komponenty, których potrzebujesz. Przygotujemy dla Ciebie spersonalizowaną ofertę techniczną w 24h.
					</p>
					<span className='text-gray-400 text-sm font-medium leading-relaxed'>
						Dodaj AUDIO lub BAR aby uzyskać od 10% do 20% zniżki na namiot!
					</span>
					<div className='flex gap-4 mt-10'>
						<Link
							to='/kontakt'
							className='bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-500 transition-all shadow-xl'>
							Potrzebuję pomocy doradcy
						</Link>
					</div>
				</div>

				<div className='space-y-32'>
					<Section
						title='Nagłośnienie i Oświetlenie'
						icon='🔊'
						items={offers.sound_light_packages}
						renderCard={renderCard}
					/>
					<Section title='Namioty Eventowe' icon='⛺' items={offers.tents} renderCard={renderCard} />
					<Section
						title='Zestawy Barowe&nbsp;&nbsp;-&nbsp;&nbsp;Weselne'
						icon='🍸'
						items={offers.bar_packages}
						renderCard={renderCard}
					/>
					<Section title='Fotograf' icon='📸' items={offers.fotography_packages} renderCard={renderCard} />
					<Section title='Dodatki' icon='✨' items={offers.addons} renderCard={renderCard} />
				</div>
			</div>

			{/* STICKY QUOTE PANEL */}
			<div
				className={`fixed bottom-4 ml-4 right-4 md:bottom-10 md:right-10 z-50 transition-all duration-500 ${selected.length === 0 ? 'translate-y-40 opacity-0' : 'translate-y-0 opacity-100'}`}>
				{isOpen ? (
					<div className='bg-white w-full md:w-[380px] rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden'>
						<div className='bg-gray-900 p-6 text-white flex justify-between items-center'>
							<div>
								<h3 className='font-black uppercase tracking-widest text-[10px] opacity-60'>Twoja Konfiguracja</h3>
								<p className='text-xl font-black text-amber-500'>{selected.length} Elementy</p>
							</div>
							<button onClick={() => setIsOpen(false)} className='p-2 hover:bg-white/10 rounded-full transition-colors'>
								<ChevronDown size={20} />
							</button>
						</div>

						<div className='p-6 max-h-[40vh] md:max-h-[250px] overflow-y-auto space-y-3'>
							{selected.map(item => (
								<div
									key={item.id}
									className='flex justify-between items-center group bg-[#fdfbf7] p-3 rounded-2xl border border-gray-50'>
									<div className='flex flex-col'>
										<span className='font-bold text-xs text-gray-800'>{item.name}</span>
										<span className='text-[10px] text-amber-600 font-bold'>
											{item.price} zł
											{item.appliedDiscount > 0 && (
												<span className='ml-1 text-emerald-600 font-black'>
													(zaoszczędzono {item.savedAmount} zł / −{item.appliedDiscount}%)
												</span>
											)}
										</span>
									</div>
									<button
										onClick={() => removeFromQuote(item.id)}
										className='w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center text-red-500 hover:bg-red-50'>
										<X size={14} />
									</button>
								</div>
							))}
						</div>

						<div className='p-6 bg-gray-50 border-t border-gray-100'>
							<div className='flex justify-between items-center mb-6 px-2'>
								<span className='text-xs font-black uppercase text-gray-400'>Suma:</span>
								<span className='text-lg font-black text-gray-900'>
									{totalPrice > 0 ? `${totalPrice} zł` : 'Wycena indywidualna'}
								</span>
							</div>
							<button
								onClick={handleGoToContact}
								className='w-full bg-amber-500 text-gray-900 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-gray-900 hover:text-white transition-all'>
								Przejdź do wyceny
							</button>
						</div>
					</div>
				) : (
					<button
						onClick={() => setIsOpen(true)}
						className='bg-gray-900 text-white w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl flex items-center justify-center relative hover:scale-110 transition-transform group'>
						<ShoppingBag size={28} className='group-hover:text-amber-500 transition-colors' />
						<span className='absolute -top-1 -right-1 bg-amber-500 text-gray-900 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black border-4 border-[#fdfbf7]'>
							{selected.length}
						</span>
					</button>
				)}
			</div>
		</div>
	)
}

function Section({ title, icon, items, renderCard }) {
	return (
		<div className='relative'>
			<div className='flex items-center gap-4 mb-12'>
				<span className='text-3xl'>{icon}</span>
				<h2 className='text-3xl md:text-4xl font-black tracking-tighter'>{title}</h2>
				<div className='flex-1 h-[1px] bg-gray-200 ml-4'></div>
			</div>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>{items && items.map(item => renderCard(item))}</div>
		</div>
	)
}
