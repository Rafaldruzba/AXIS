import { Link } from 'react-router-dom'
import { GlassWater, Sparkles, UserCheck, ShieldCheck } from 'lucide-react'

export default function Bar() {
	return (
		<div className='bg-[#fdfbf7] min-h-screen'>
			{/* HERO BAR SECTION */}
			<section className='pt-40 pb-20 px-6'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div>
							<span className='text-amber-600 font-black uppercase tracking-[0.4em] text-xs mb-6 block'>
								Usługi Premium
							</span>
							<h1 className='text-6xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-8'>
								Mobilna <br />
								<span className='text-amber-500'>Strefa Baru.</span>
							</h1>
							<p className='text-gray-500 text-xl leading-relaxed mb-10 font-medium'>
								Elegancja, która smakuje najlepiej. Oferujemy wynajem eksluzywnego baru mobilnego, który staje się
								centralnym punktem twojego wydarzenia.
							</p>
							<div className='flex flex-wrap gap-4'>
								<Link
									to='/kontakt'
									className='bg-gray-900 text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-amber-500 hover:text-gray-900 transition-all shadow-xl'>
									Zarezerwuj termin
								</Link>
								<a
									href='#detale'
									className='border-2 border-gray-200 text-gray-900 px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white transition-all'>
									Poznaj szczegóły
								</a>
							</div>
						</div>

						{/* Dekoracyjne zdjęcie / Grafika */}
						<div className='relative'>
							<div className='aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white'>
								<img
									src='https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80'
									alt='Luksusowy Bar Mobilny'
									className='w-full h-full object-cover'
								/>
							</div>
							{/* Pływający badge */}
							<div className='absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-xl max-w-[240px] hidden md:block'>
								<p className='text-amber-500 font-black text-3xl mb-1'>100%</p>
								<p className='text-gray-900 font-bold text-sm tracking-tight'>Zadowolenia gości na Twoim evencie.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CECHY WYNAJMU */}
			<section id='detale' className='py-32 bg-white'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='text-center mb-20'>
						<h2 className='text-4xl md:text-5xl font-black tracking-tighter text-gray-900'>Dlaczego Axis Bar?</h2>
						<div className='w-24 h-1 bg-amber-500 mx-auto mt-6'></div>
					</div>

					<div className='grid md:grid-cols-3 gap-12'>
						<FeatureCard
							icon={<GlassWater className='w-8 h-8' />}
							title='Samodzielny Wynajem'
							desc='Idealne rozwiązanie na wesela. Wynajmujesz profesjonalną infrastrukturę barową, a my zajmujemy się montażem i obsługą gości.'
						/>
						<FeatureCard
							icon={<Sparkles className='w-8 h-8' />}
							title='Design Premium'
							desc='Nasz bar posiada zintegrowane podświetlenie LED, które dopasujemy do kolorystyki Twojego przyjęcia.'
						/>
						<FeatureCard
							icon={<ShieldCheck className='w-8 h-8' />}
							title='Pełne Wyposażenie'
							desc='Bary są wyposażone w profesjonalne stacje barmańskie, speed-racki i niezbędne przyłącza techniczne.'
						/>
					</div>
				</div>
			</section>

			{/* NOWA SEKCJA: SZCZEGÓŁOWY OPIS */}
			<section className='pb-32 bg-white'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='grid lg:grid-cols-2 gap-20 items-center'>
						{/* Tekst opisowy */}
						<div className='order-2 lg:order-1'>
							<h3 className='text-[10px] font-black uppercase tracking-[0.5em] text-amber-600 mb-6 block'>
								Standard Axis Events
							</h3>
							<h2 className='text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-10 leading-none'>
								Kompleksowa obsługa <br /> techniczna baru.
							</h2>

							<div className='space-y-8'>
								<div className='flex gap-6'>
									<span className='text-amber-500 font-black text-2xl opacity-30'>01</span>
									<div>
										<h4 className='font-bold text-gray-900 text-lg mb-2'>Logistyka i Montaż</h4>
										<p className='text-gray-500 text-sm leading-relaxed font-medium'>
											Nie musisz martwić się o transport. Dostarczamy bar w wyznaczone miejsce, dbając o bezpieczeństwo
											parkietu i infrastruktury sali. Nasz zespół rozkłada stanowisko w mniej niż 40 minut.
										</p>
									</div>
								</div>

								<div className='flex gap-6'>
									<span className='text-amber-500 font-black text-2xl opacity-30'>02</span>
									<div>
										<h4 className='font-bold text-gray-900 text-lg mb-2'>Personalizacja Oświetlenia</h4>
										<p className='text-gray-500 text-sm leading-relaxed font-medium'>
											Nasz mobilny bar posiada system oświetlenia RGBW. Możemy ustawić ciepłe, eleganckie światło
											dopasowane do klimatu lub dynamiczne kolory na Twoją imprezę.
										</p>
									</div>
								</div>

								<div className='flex gap-6'>
									<span className='text-amber-500 font-black text-2xl opacity-30'>03</span>
									<div>
										<h4 className='font-bold text-gray-900 text-lg mb-2'>Menu Skrojone na Miarę</h4>
										<p className='text-gray-500 text-sm leading-relaxed font-medium'>
											Od klasycznego Gin & Tonic po autorskie koktajle na wieczory panieńskie. Dopasowujemy kartę
											drinków do charakteru Twojej imprezy, zapewniając profesjonalne szkło i dodatki, które zachwycą
											Twoich gości.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Drugie zdjęcie uzupełniające */}
						<div className='order-1 lg:order-2 relative'>
							<div className='aspect-square rounded-[3rem] overflow-hidden shadow-inner bg-gray-100'>
								<img
									src='https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80'
									alt='Szczegóły baru'
									className='w-full h-full object-cover mix-blend-multiply opacity-90'
								/>
							</div>
							{/* Element dekoracyjny: Kółko z tekstem */}
							<div className='absolute -top-6 -right-6 w-32 h-32 bg-amber-500 rounded-full flex items-center justify-center p-4 text-center rotate-12 shadow-xl'>
								<p className='text-gray-900 font-black text-[10px] uppercase tracking-tighter leading-tight'>
									Gotowy do pracy w 40 min
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SEKCJA KONTEKSTOWA */}
			<section className='py-24 bg-[#fdfbf7]'>
				<div className='max-w-5xl mx-auto px-6'>
					<div className='bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl'>
						<div className='relative z-10'>
							<h2 className='text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter'>
								Planujesz wesele lub event?
							</h2>
							<p className='text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed'>
								Nasze mobilne bary to coś więcej niż sprzęt. To Twoja gwarancja porządku, błyskawicznej obsługi i efektu "wow", który Twoi goście zapamiętają na długo. Jesteśmy z Tobą od projektu menu po ostatni wydany drink, dbając o każdy wizualny detal na Twoich zdjęciach.
							</p>
							<Link
								to='/oferta'
								className='inline-block bg-amber-500 text-gray-900 px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-white transition-colors'>
								Skonfiguruj ofertę
							</Link>
						</div>
						{/* Dekoracyjne koło w tle */}
						<div className='absolute -right-20 -top-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl'></div>
					</div>
				</div>
			</section>
		</div>
	)
}

function FeatureCard({ icon, title, desc }) {
	return (
		<div className='group p-10 rounded-[2.5rem] border border-gray-100 bg-[#fdfbf7] hover:bg-white hover:shadow-2xl transition-all duration-500'>
			<div className='w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform'>
				{icon}
			</div>
			<h3 className='text-2xl font-black mb-4 text-gray-900 tracking-tight'>{title}</h3>
			<p className='text-gray-500 leading-relaxed text-sm font-medium'>{desc}</p>
		</div>
	)
}
