import { Link } from 'react-router-dom'
import EventsType from '../data/eventsType.json'
export default function EventTypesSection() {
	return (
		<section className='py-24 bg-gray-100'>
			<div className='max-w-7xl mx-auto px-6 text-center'>
				<h2 className='text-4xl font-bold mb-6'>Obsługujemy różne typy wydarzeń</h2>

				<p className='text-gray-600 max-w-2xl mx-auto mb-16'>
					Niezależnie od skali wydarzenia zapewniamy profesjonalne nagłośnienie, oświetlenie i zaplecze techniczne.
				</p>

				<div className='grid md:grid-cols-3 gap-10'>
					{EventsType.map(event => (
						<Link
							key={event.title}
							to={event.link}
							className='group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500'>
							<img
								src={event.image}
								alt={event.title}
								className='h-50 w-full object-cover group-hover:scale-110 transition duration-700'
							/>

							<div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white p-6'>
								<h3 className='text-2xl font-bold mb-3'>{event.title}</h3>
								<p className='text-sm mb-4'>{event.description}</p>
								<span className='bg-orange-500 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition'>
									Dowiedz się więcej
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}
