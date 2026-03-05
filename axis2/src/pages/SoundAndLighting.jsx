import { Link } from 'react-router-dom'
import { Music, Zap, Radio, Truck, Settings, Mic2 } from 'lucide-react'

export default function SoundAndLighting() {
	return (
		<div className='bg-[#fdfbf7] min-h-screen'>
			{/* HERO SECTION */}
			<section className='pt-40 pb-20 px-6'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div>
							<span className='text-amber-600 font-black uppercase tracking-[0.4em] text-xs mb-6 block'>
								Technika Sceniczna
							</span>
							<h1 className='text-6xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-8'>
								Audio <br />
								<span className='text-amber-500'>& Visual.</span>
							</h1>
							<p className='text-gray-500 text-xl leading-relaxed mb-10 font-medium'>
								Tworzymy fundamenty niezapomnianych emocji. Od potężnego uderzenia basu po precyzyjnie zaprojektowane
								show świetlne – Axis Events to gwarancja technicznego perfekcjonizmu.
							</p>
							<div className='flex flex-wrap gap-4'>
								<Link
									to='/kontakt'
									className='bg-gray-900 text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-amber-500 hover:text-gray-900 transition-all shadow-xl'>
									Zapytaj o termin
								</Link>
							</div>
						</div>

						<div className='relative'>
							<div className='aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white rotate-2'>
								<img
									src='https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80'
									alt='Realizacja koncertowa Axis'
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='absolute -top-10 -right-5 bg-amber-500 p-6 rounded-3xl shadow-xl rotate-12'>
								<Zap className='text-gray-900 w-10 h-10' />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* NASZA FILOZOFIA ROBOTY */}
			<section className='py-32 bg-white'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='flex flex-col md:flex-row justify-between items-center mb-20 gap-8 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-black tracking-tighter text-gray-900 max-w-xl'>
							Perfekcja nie bierze sie <br /> z przypadku.
						</h2>
						<div className='h-[2px] flex-1 bg-gray-100 hidden md:block mx-10'></div>
						<p className='text-gray-500 font-medium max-w-xs'>
							Zapomnij o przypadkowym sprzęcie. Wykorzystujemy pełen potencjał systemu 2.2, by zapewnić brzmienie, które
							napędza impreze, nie męcząc gości.
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						<ServiceCard
							icon={<Music />}
							title='Nagłośnienie 2.2'
							desc='Mocny zestaw z głębokim basem, idealnie wypełniający namiot. Zapewniamy czysty dźwięk, który rozkręci każdy parkiet – od panieńskich po eventy firmowe.'
						/>
						<ServiceCard
							icon={<Zap />}
							title='Dynamiczne Światło'
							desc='Oświetlenie LED synchronizowane z rytmem muzyki. Tworzymy klubowy klimat wewnątrz namiotu, który zachwyca gości i świetnie wygląda na zdjęciach.'
						/>
						<ServiceCard
							icon={<Radio />}
							title='Pełne Zasilanie'
							desc='Posiadamy własny agregat prądotwórczy. Twoja impreza może odbyć się w dowolnym miejscu, bez obaw o brak prądu czy przeciążenie sieci.'
						/>
					</div>
				</div>
			</section>

			{/* SEKCJA: WYNAJEM SAMEGO SPRZĘTU */}
			<section className='py-32 bg-[#fdfbf7] overflow-hidden'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='bg-amber-500 rounded-[4rem] p-10 md:p-20 grid lg:grid-cols-2 gap-12 items-center relative'>
						<div>
							<h2 className='text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-8'>
								Potrzebujesz <br /> samego sprzętu?
							</h2>
							<p className='text-gray-900/70 text-lg mb-10 font-bold leading-relaxed'>
								Jesteś DJ-em, masz zespół, a może organizujesz własny event i brakuje Ci mocy? Dostarczamy wysokiej
								klasy sprzęt w formule "Dry Hire".
							</p>
							<ul className='space-y-4 mb-10 text-gray-900 font-black uppercase text-xs tracking-widest'>
								<li className='flex items-center gap-3'>
									<Truck size={18} /> Dowóz pod wskazany adres
								</li>
								<li className='flex items-center gap-3'>
									<Settings size={18} /> Opcjonalne wsparcie technika
								</li>
								<li className='flex items-center gap-3'>
									<Mic2 size={18} /> Tylko renomowane marki (Behringer, Light4Me)
								</li>
							</ul>
							<Link
								to='/kontakt'
								className='bg-gray-900 text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-all inline-block shadow-2xl'>
								Pobierz cennik sprzętu
							</Link>
						</div>
						<div className='relative flex justify-center'>
							<div className='w-full h-[400px] bg-gray-900/10 rounded-[3rem] border-2 border-dashed border-gray-900/20 flex items-center justify-center'>
								<p className='text-gray-900 font-black uppercase tracking-widest opacity-20 rotate-12 text-4xl'>
									RENTAL GEAR
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

function ServiceCard({ icon, title, desc }) {
	return (
		<div className='p-12 rounded-[3rem] bg-[#fdfbf7] border border-gray-100 hover:shadow-2xl transition-all duration-500 group'>
			<div className='text-amber-500 mb-6 group-hover:scale-110 transition-transform'>{icon}</div>
			<h3 className='text-2xl font-black text-gray-900 mb-4 tracking-tight'>{title}</h3>
			<p className='text-gray-500 text-sm leading-relaxed font-medium'>{desc}</p>
		</div>
	)
}
