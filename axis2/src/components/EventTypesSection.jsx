import { Link } from 'react-router-dom'
import EventsType from '../data/eventsType.json'
import { getOptimizedImage } from '../assets/img'
import { AdvancedImage } from '@cloudinary/react'
import { fill } from '@cloudinary/url-gen/actions/resize'

export default function EventTypesSection() {
	return (
		<section className='py-32 bg-black'>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8'>
					<div className='max-w-2xl'>
						<h2 className='text-sm uppercase tracking-[0.4em] text-amber-600 font-black mb-4'>Zakres Działań</h2>

						<h3 className='text-4xl md:text-6xl font-black text-white tracking-tighter leading-none'>
							Wydarzenia, które <br /> <span className='text-amber-500'>obsługujemy.</span>
						</h3>
					</div>

					<p className='text-gray-400 max-w-sm text-lg font-medium leading-relaxed'>
						Od prestiżowych spotkań biznesowych, przez szalone wieczory panieńskie i kawalerskie, aż po eventy
						plenerowe. Dopasowujemy technologię i klimat namiotu do Twojej wizji, przeprowadzając Cię przez całą
						organizację.
					</p>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
					{' '}
					{EventsType.map((event, index) => (
						<Link
							key={event.title}
							to={event.link}
							className='group relative h-87.5 md:h-75 rounded-[3rem] overflow-hidden bg-black transition-all duration-700 shadow-sm md:hover:shadow-2xl'>
							{/* 1. Obrazek tła */}
							<AdvancedImage
								cldImg={getOptimizedImage(event.image).resize(fill().width(800).height(600))}
								alt={event.title}
								className='absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition duration-1000 ease-in-out'
							/>
							<div className='absolute inset-0 bg-black opacity-0 md:group-hover:opacity-50 transition-opacity duration-500'></div>
							<div className='absolute inset-0 bg-linear-to-t from-gray-950 via-black/40 to-transparent opacity-90'></div>
							<div className='absolute inset-0 p-8 md:p-10 flex flex-col justify-end'>
								<div className='translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500'>
									<span className='text-amber-500 text-xs font-black uppercase tracking-[0.2em] mb-2 block opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity'>
										Realizacje Axis
									</span>

									<h4 className='text-2xl md:text-3xl font-black text-white mb-3 md:mb-4 tracking-tight'>
										{event.title}
									</h4>
									<div className='h-35 flex flex-col justify-start'>
										<p className='text-gray-300 text-sm leading-relaxed mb-5 md:mb-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100'>
											{event.description}
										</p>

										<div className='flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest mt-auto'>
											<span className='w-full md:w-0 h-10 rounded-full bg-amber-500 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:w-full md:group-hover:opacity-100 transition-all duration-500 overflow-hidden'>
												<span className='ml-2 whitespace-nowrap text-gray-900 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-200'>
													Sprawdź ofertę
												</span>
												<span className='ml-3 text-gray-900'>→</span>
											</span>
										</div>
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
