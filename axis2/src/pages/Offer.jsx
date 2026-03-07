import { useState, useEffect } from 'react'
import offers from '../data/offers.json'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronDown, ShoppingBag, X } from 'lucide-react'

export default function Offer() {
	// Inicjalizacja z LocalStorage
	const [selected, setSelected] = useState(() => {
		const saved = localStorage.getItem('axis_cart')
		return saved ? JSON.parse(saved) : []
	})

	const [isOpen, setIsOpen] = useState(true) // Stan do minimalizacji
	const navigate = useNavigate()

	// Zapisuj do LocalStorage przy każdej zmianie
	useEffect(() => {
		localStorage.setItem('axis_cart', JSON.stringify(selected))
	}, [selected])

	const totalPrice = selected.reduce((sum, item) => {
		const price = typeof item.price === 'string' ? parseInt(item.price.replace(/\s/g, '')) : item.price || 0
		return sum + price
	}, 0)

	const handleGoToContact = () => {
		navigate('/kontakt', { state: { cart: selected } })
	}

	const addToQuote = item => {
		// Poprawiona logika: sprawdzamy czy element o tym ID już jest
		const isAlreadyIn = selected.find(i => i.id === item.id)
		if (!isAlreadyIn) {
			setSelected(prev => [...prev, item])
			setIsOpen(true) // Otwórz koszyk po dodaniu
		}
	}

	const removeFromQuote = id => {
		// Usuwamy po ID, nie po indeksie - to bezpieczniejsze
		setSelected(prev => prev.filter(item => item.id !== id))
	}

	const renderCard = item => {
		const isInCart = selected.some(i => i.id === item.id)

		return (
			<div
				key={item.id}
				className='group bg-white rounded-[2.5rem] shadow-sm p-10 transition-all duration-500 hover:shadow-2xl border border-gray-100 flex flex-col justify-between relative overflow-hidden'>
				<div className='absolute top-0 right-0 bg-amber-500 text-gray-900 font-black px-6 py-2 rounded-bl-[1.5rem] text-sm shadow-sm'>
					{item.price || 'Wycena'}
				</div>

				<div>
					<span className='text-amber-600 text-[10px] font-black uppercase tracking-[0.2em] mb-2 block'>
						Opcja Premium
					</span>
					<h3 className='text-2xl font-black mb-2 text-gray-900'>{item.name}</h3>
					<p className='text-gray-500 mb-8 leading-relaxed text-sm'>{item.description}</p>
				</div>

				<button
					onClick={() => addToQuote(item)}
					disabled={isInCart}
					className={`w-full py-4 rounded-full font-black uppercase text-xs tracking-widest border-2 transition-all duration-300 ${
						isInCart
							? 'border-emerald-500 text-emerald-500 bg-emerald-50 cursor-default'
							: 'border-gray-900 group-hover:bg-gray-900 group-hover:text-white'
					}`}>
					{isInCart ? 'Dodano do listy ✓' : 'Dodaj do konfiguracji'}
				</button>
			</div>
		)
	}

	return (
		<div className='pt-40 pb-40 bg-[#fdfbf7] min-h-screen relative'>
			<div className='max-w-7xl mx-auto px-6'>
				{/* HERO SECTION */}
				<div className='text-left mb-32 relative'>
					<div className='absolute -left-10 top-0 w-32 h-32 bg-amber-200 blur-[80px] -z-10 opacity-50'></div>
					<h1 className='text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none'>
						Skonfiguruj <br />
						<span className='text-amber-500 text-outline'>Twój Event</span>
					</h1>
					<p className='text-gray-500 text-xl max-w-2xl font-medium leading-relaxed mb-10'>
						Wybierz komponenty, których potrzebujesz. Przygotujemy dla Ciebie spersonalizowaną ofertę techniczną w 24h.
					</p>
					<div className='flex gap-4'>
						<Link
							to='/kontakt'
							className='bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-500 transition-all shadow-xl'>
							Potrzebuję pomocy doradcy
						</Link>
					</div>
				</div>

				{/* SEKCJE OFERTY */}
				<div className='space-y-32'>
					<Section
						title='Nagłośnienie i Oświetlenie'
						icon='🔊'
						items={offers.sound_light_packages}
						renderCard={renderCard}
					/>
					<Section title='Namioty Eventowe' icon='⛺' items={offers.tents} renderCard={renderCard} />
					<Section title='Zestawy Barowe' icon='🍸' items={offers.bar_packages} renderCard={renderCard} />
					<Section title='Dodatki' icon='✨' items={offers.addons} renderCard={renderCard} />
				</div>
			</div>

			{/* STICKY QUOTE PANEL - Zmieniony na pływający widget */}
			<div
				className={`fixed bottom-10 right-10 z-50 transition-all duration-500 ${selected.length === 0 ? 'translate-y-40 opacity-0' : 'translate-y-0 opacity-100'}`}>
				{isOpen ? (
					/* WIDOK OTWARTY */
					<div className='bg-white w-[380px] rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden'>
						<div className='bg-gray-900 p-6 text-white flex justify-between items-center'>
							<div>
								<h3 className='font-black uppercase tracking-widest text-[10px] opacity-60'>Twoja Konfiguracja</h3>
								<p className='text-xl font-black text-amber-500'>{selected.length} Elementy</p>
							</div>
							<button onClick={() => setIsOpen(false)} className='p-2 hover:bg-white/10 rounded-full transition-colors'>
								<ChevronDown size={20} />
							</button>
						</div>

						<div className='p-6 max-h-[250px] overflow-y-auto space-y-3'>
							{selected.map(item => (
								<div
									key={item.id}
									className='flex justify-between items-center group bg-[#fdfbf7] p-3 rounded-2xl border border-gray-50'>
									<div className='flex flex-col'>
										<span className='font-bold text-xs text-gray-800'>{item.name}</span>
										<span className='text-[10px] text-amber-600 font-bold'>{item.price || 'Wycena ind.'}</span>
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
									{totalPrice > 0 ? `${totalPrice} zł` : 'Wycena'}
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
					/* WIDOK ZMINIMALIZOWANY (PŁYWAJĄCY PRZYCISK) */
					<button
						onClick={() => setIsOpen(true)}
						className='bg-gray-900 text-white w-20 h-20 rounded-full shadow-2xl flex items-center justify-center relative hover:scale-110 transition-transform group'>
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

/* SECTION COMPONENT */
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
