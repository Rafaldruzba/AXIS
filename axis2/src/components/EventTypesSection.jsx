import { Link } from 'react-router-dom'
import EventsType from '../data/eventsType.json'

export default function EventTypesSection() {
	return (
		<section className='py-32 bg-[#fdfbf7]'>
			<div className='max-w-7xl mx-auto px-6'>
				{/* Header z unikalnym układem */}
				<div className='flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8'>
					<div className='max-w-2xl'>
						<h2 className='text-sm uppercase tracking-[0.4em] text-amber-600 font-black mb-4'>Zakres Działań</h2>
						<h3 className='text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-none'>
							Wydarzenia, które <br /> <span className='text-amber-500'>obsługujemy.</span>
						</h3>
					</div>
					<p className='text-gray-500 max-w-sm text-lg font-medium leading-relaxed'>
						Od kameralnych spotkań biznesowych po masowe eventy plenerowe. Dopasowujemy technologię do Twojej wizji.
					</p>
				</div>

				{/* Nowoczesny Grid - asymetryczny hover */}
				<div className='grid md:grid-cols-3 gap-8'>
					{EventsType.map((event, index) => (
						<Link
							key={event.title}
							to={event.link}
							className='group relative h-[300px] rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-gray-200'>
							{/* Zdjęcie z delikatnym zoomem */}
							<img
								src={event.image}
								alt={event.title}
								className='absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition duration-1000 ease-in-out'
							/>

							{/* Nowoczesny Overlay - gradient od dołu, nie zasłania całego zdjęcia */}
							<div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500'></div>

							{/* Treść umieszczona na dole */}
							<div className='absolute inset-0 p-10 flex flex-col justify-end'>
								<div className='translate-y-8 group-hover:translate-y-0 transition-transform duration-500'>
									<span className='text-amber-500 text-xs font-black uppercase tracking-[0.2em] mb-2 block opacity-0 group-hover:opacity-100 transition-opacity'>
										Realizacje Axis
									</span>
									<h4 className='text-3xl font-black text-white mb-4 tracking-tight'>{event.title}</h4>
									<p className='text-gray-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100'>
										{event.description}
									</p>

									{/* Przycisk w formie linku z ikoną */}
									<div className='flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest'>
										<span className='w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center group-hover:w-full transition-all duration-500 overflow-hidden'>
											<span className='group-hover:inline hidden ml-2 whitespace-nowrap text-gray-900'>
												Sprawdź ofertę
											</span>
											<span className='group-hover:ml-3 text-gray-900'>→</span>
										</span>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}
