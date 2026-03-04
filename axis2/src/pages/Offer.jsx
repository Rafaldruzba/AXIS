import { useState } from 'react'
import offers from '../data/offers.json'
import { Link } from 'react-router-dom'

export default function Offer() {
	const [selected, setSelected] = useState([])

	const addToQuote = item => {
		setSelected(prev => [...prev, item])
	}

	const removeFromQuote = index => {
		setSelected(prev => prev.filter((_, i) => i !== index))
	}

	const renderCard = item => (
		<div
			key={item.id}
			className='group bg-white rounded-[2.5rem] shadow-sm p-10 transition-all duration-500 hover:shadow-2xl border border-gray-100 flex flex-col justify-between relative overflow-hidden'>
			{/* Dekoracyjny badge dla ceny */}
			<div className='absolute top-0 right-0 bg-amber-500 text-gray-900 font-black px-6 py-2 rounded-bl-[1.5rem] text-sm shadow-sm'>
				{item.price || 'Wycena'}
			</div>

			<div>
				<span className='text-amber-600 text-[10px] font-black uppercase tracking-[0.2em] mb-2 block'>
					Opcja Premium
				</span>
				<h3 className='text-2xl font-black mb-2 text-gray-900'>{item.name}</h3>
				{item.subtitle && (
					<p className='text-amber-600 font-bold text-xs mb-4 uppercase tracking-tighter'>{item.subtitle}</p>
				)}

				<p className='text-gray-500 mb-8 leading-relaxed text-sm'>{item.description}</p>

				{item.includes && (
					<ul className='space-y-3 mb-8'>
						{item.includes.map((inc, i) => (
							<li key={i} className='flex items-center gap-3 text-sm font-medium text-gray-700'>
								<span className='w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-[10px]'>
									✔
								</span>
								{inc}
							</li>
						))}
					</ul>
				)}
			</div>

			<button
				onClick={() => addToQuote(item)}
				className='w-full py-4 rounded-full font-black uppercase text-xs tracking-widest border-2 border-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300'>
				Dodaj do konfiguracji
			</button>
		</div>
	)

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
				className={`fixed bottom-10 right-10 z-50 transition-all duration-500 transform ${selected.length > 0 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
				<div className='bg-white w-[350px] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden'>
					<div className='bg-gray-900 p-6 text-white'>
						<div className='flex justify-between items-center'>
							<h3 className='font-black uppercase tracking-widest text-xs'>Twoja Lista ({selected.length})</h3>
							<button onClick={() => setSelected([])} className='text-[10px] text-gray-400 hover:text-white'>
								WYCZYŚĆ
							</button>
						</div>
					</div>

					<div className='p-6 max-h-[300px] overflow-y-auto bg-white'>
						{selected.map((item, index) => (
							<div key={index} className='flex justify-between items-center mb-4 group'>
								<span className='font-bold text-sm text-gray-800 line-clamp-1'>{item.name}</span>
								<button
									onClick={() => removeFromQuote(index)}
									className='w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] hover:bg-red-500 hover:text-white transition-colors'>
									✕
								</button>
							</div>
						))}
					</div>

					<div className='p-6 pt-0'>
						<button className='w-full bg-amber-500 text-gray-900 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20'>
							Wyślij do darmowej wyceny
						</button>
					</div>
				</div>
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
