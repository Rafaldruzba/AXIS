import React from 'react'
import { Link } from 'react-router-dom'
import projects from '../data/projects.json'

export default function Realizacje() {
	return (
		<div className='bg-[#fdfbf7] min-h-screen'>
			<div className='pt-32 pb-24 px-6 max-w-7xl mx-auto'>
				{/* Header z pazurem */}
				<header className='text-center mb-24'>
					<h1 className='text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter uppercase'>
						Nasze <span className='text-amber-500'>Realizacje</span>
					</h1>
					<div className='w-20 h-2 bg-gray-900 mx-auto mb-8'></div>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
						Nie obiecujemy jakości – my ją dostarczamy. Zobacz, jak sprzęt Axis Events zmienia przestrzeń w
						profesjonalną arenę wydarzeń.
					</p>
				</header>

				{/* Portfolio Grid */}
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map(project => (
						<Link
							to={`/realizacje/${project.slug}`}
							key={project.slug}
							className='group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100'>
							<div
								key={project.slug}
								className='group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col'>
								{/* Zdjęcie z nakładką */}
								<div className='relative h-80 overflow-hidden'>
									<img
										src={project.image}
										alt={project.title}
										className='w-full h-full object-cover transition duration-700 group-hover:scale-110'
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8'>
										<span className='text-white font-bold text-lg'>Zobacz szczegóły →</span>
									</div>
									<div className='absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg'>
										<p className='text-xs font-black uppercase tracking-widest text-amber-600'>{project.type}</p>
									</div>
								</div>

								{/* Treść karty */}
								<div className='p-8 flex-grow flex flex-col'>
									<h2 className='text-2xl font-bold mb-4 text-gray-900 group-hover:text-amber-600 transition-colors tracking-tight'>
										{project.title}
									</h2>
									<p className='text-gray-600 text-sm leading-relaxed mb-6 flex-grow'>{project.description}</p>

									{/* Tagi/Wykorzystany sprzęt */}
									<div className='flex flex-wrap gap-2 mt-auto'>
										{project.tags.map(tag => (
											<span
												key={tag}
												className='text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-500 px-3 py-1 rounded-md'>
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>

				{/* Statystyki / Zaufanie */}
				<section className='mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-200 pt-20 '>
					<div>
						<p className='text-4xl font-black text-gray-900'>Ready</p>
						<p className='text-sm uppercase tracking-widest text-amber-500 font-bold'>Zestaw 2.2</p>
					</div>
					<div>
						<p className='text-4xl font-black text-gray-900'>Pro</p>
						<p className='text-sm uppercase tracking-widest text-amber-500 font-bold'>Bar Mobilny</p>
					</div>
					<div>
						<p className='text-4xl font-black text-gray-900'>Safe</p>
						<p className='text-sm uppercase tracking-widest text-amber-500 font-bold'>Własny Prąd</p>
					</div>
					<div>
						<p className='text-4xl font-black text-gray-900'>Fast</p>
						<p className='text-sm uppercase tracking-widest text-amber-500 font-bold'>Montaż & Start</p>
					</div>
				</section>

				{/* Sekcja CTA */}
				<div className='mt-32 bg-amber-500 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden'>
					<div className='relative z-10'>
						<h2 className='text-4xl md:text-5xl font-black text-white mb-6 tracking-tight'>
							Twój event może być naszą kolejną świetną realizacją
						</h2>
						<Link to='/kontakt'>
							<button className='bg-gray-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all shadow-xl'>
								Zacznijmy współpracę
							</button>
						</Link>
					</div>
					{/* Ozdobny krąg w tle */}
					<div className='absolute -top-20 -right-20 w-64 h-64 bg-amber-400 rounded-full opacity-50'></div>
				</div>
			</div>
		</div>
	)
}
