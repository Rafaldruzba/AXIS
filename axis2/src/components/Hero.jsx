import { Link } from 'react-router-dom'

export default function Hero() {
	return (
		<section className='relative h-[90vh] md:h-screen w-full overflow-hidden bg-gray-900'>
			{/* Tło z lepszym efektem – lekki zoom i przyciemnienie gradientem zamiast płaskiej czerni */}
			<div
				className='absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-slow-zoom'
				style={{
					backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')",
				}}>
				{/* Gradient zamiast zwykłego overlay - dół jest ciemniejszy, co lepiej eksponuje białe napisy */}
				<div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-gray-900/90'></div>
			</div>

			<div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start'>
				{/* Górny badge - od razu mówi, że to klasa premium */}
				<div className='mb-6 flex items-center gap-3 animate-fade-in-down'>
					<span className='w-12 h-[1px] bg-amber-500'></span>
					{/* Zmieniamy span na h2, ale zostawiamy te same klasy wielkości tekstu */}
					<h2 className='text-amber-500 uppercase tracking-[0.4em] text-xs font-black'>
						Technika • Atmosfera • Profesjonalizm
					</h2>
				</div>

				<div className='max-w-4xl'>
					<h1 className='text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] animate-fade-in-up'>
						Tworzymy <br />
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600'>
							Wydarzenia
						</span>{' '}
						<br />
						które zostają w pamięci.
					</h1>

					<p className='text-gray-300 text-lg md:text-xl max-w-xl mb-12 leading-relaxed animate-fade-in-up delay-100'>
						Axis Events to nie tylko sprzęt – to Twoja pewność udanego wydarzenia. Łączymy sprzęt premium z
						profesjonalnym wsparciem. Przeprowadzimy Cię przez każdy etap organizacji, dbając o nagłośnienie,
						oświetlenie i bar, byś Ty mógł cieszyć się imprezą.
					</p>

					<div className='flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-200'>
						<Link
							to='/oferta'
							className='flex items-center justify-center bg-amber-500 text-gray-900 px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl shadow-amber-500/20 min-w-[220px] mx-auto sm:mx-0'>
							Zobacz ofertę
						</Link>

						<Link
							to='/kontakt'
							className='group flex items-center justify-center gap-4 text-white px-8 py-5 rounded-full font-black uppercase text-sm tracking-widest border border-white/20 hover:bg-white/10 transition-all text-center min-w-[220px]'>
							<span>Skontaktuj się</span>
							<span className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-gray-900 transition-colors'>
								→
							</span>
						</Link>
					</div>
				</div>

				{/* Dekoracyjny detal "techniczny" w rogu */}
				<div className='absolute bottom-12 right-6 hidden lg:block text-right'>
					<p className='text-white/20 text-xs font-mono tracking-widest rotate-90 origin-right'>
						// AXIS_SYSTEMS_2026_V1
					</p>
				</div>
			</div>

			{/* Subtelny dół Hero - przejście do następnej sekcji */}
			<div className='absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#fdfbf7] to-transparent'></div>
		</section>
	)
}
