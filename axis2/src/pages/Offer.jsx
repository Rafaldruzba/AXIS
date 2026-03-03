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
			className='group bg-white rounded-2xl shadow-md p-8 transition duration-500 hover:shadow-2xl hover:-translate-y-2'>
			<h3 className='text-2xl font-bold mb-2'>{item.name}</h3>
			{item.subtitle && <p className='text-gray-500 mb-4'>{item.subtitle}</p>}

			<p className='text-gray-600 mb-4'>{item.description}</p>

			{item.includes && (
				<ul className='space-y-2 mb-6 text-gray-700 text-sm'>
					{item.includes.map((inc, i) => (
						<li key={i}>✔ {inc}</li>
					))}
				</ul>
			)}

			<div className='flex justify-between items-center mt-6'>
				<span className='text-lg font-semibold'>Cena: {item.price || '—'}</span>

				<button
					onClick={() => addToQuote(item)}
					className='bg-orange-500 px-4 py-2 rounded-lg text-white 
                     opacity-0 group-hover:opacity-100 
                     transition'>
					Dodaj
				</button>
			</div>
		</div>
	)

	return (
		<div className='pt-32 pb-20 bg-gray-50 min-h-screen'>
			<div className='max-w-7xl mx-auto px-6'>
				{/* HERO */}
				<div className='text-center mb-20'>
					<h1 className='text-5xl font-bold mb-6'>Skonfiguruj swój event</h1>
					<p className='text-gray-600 text-lg max-w-2xl mx-auto'>
						Wybierz elementy, które Cię interesują i stwórz idealny zestaw dopasowany do Twojego wydarzenia.
					</p>
					<div className='space-x-4'>
						<Link
							to='/'
							className='inline-block mt-6 bg-orange-500 px-6 py-3 rounded text-lg hover:bg-orange-600 transition'>
							Strona główna
						</Link>
						<Link
							to='/kontakt'
							className='inline-block mt-6 bg-gray-500 px-6 py-3 rounded text-lg hover:bg-orange-600 transition'>
							Skontaktuj się z nami!
						</Link>
					</div>
				</div>

				{/* SOUND & LIGHT */}
				<Section title='Nagłośnienie i Oświetlenie' items={offers.sound_light_packages} renderCard={renderCard} />

				{/* TENTS */}
				<Section title='Namioty Eventowe' items={offers.tents} renderCard={renderCard} />

				{/* BAR */}
				<Section title='Zestawy Barowe' items={offers.bar_packages} renderCard={renderCard} />

				{/* ADDONS */}
				<Section title='Dodatki Eventowe' items={offers.addons} renderCard={renderCard} />
			</div>

			{/* STICKY QUOTE PANEL */}
			<div className='fixed bottom-0 right-0 w-full md:w-96 bg-white shadow-2xl border-t md:border-l md:border-t-0 p-6 max-h-[60vh] overflow-y-auto'>
				<h3 className='text-xl font-bold mb-4'>Twoja wycena ({selected.length})</h3>

				{selected.length === 0 && <p className='text-gray-500 text-sm'>Nie wybrano jeszcze żadnych elementów.</p>}

				{selected.map((item, index) => (
					<div key={index} className='flex justify-between items-center mb-3 text-sm'>
						<span>{item.name}</span>
						<button onClick={() => removeFromQuote(index)} className='text-red-500'>
							✕
						</button>
					</div>
				))}

				{selected.length > 0 && (
					<button className='w-full mt-4 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition'>
						Zapytaj o wycenę
					</button>
				)}
			</div>
		</div>
	)
}

/* SECTION COMPONENT */
function Section({ title, items, renderCard }) {
	return (
		<div className='mb-24'>
			<h2 className='text-3xl font-bold mb-10'>{title}</h2>
			<div className='grid md:grid-cols-3 gap-10'>{items.map(item => renderCard(item))}</div>
		</div>
	)
}
