import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PartyPopper, Cake, GlassWater, Disc } from 'lucide-react'

export default function BdayEvents() {
	return (
		<div className='bg-[#fdfbf7] min-h-screen'>
			{/* HERO SECTION */}
			<section className='pt-40 pb-20 px-6'>
				<div className='max-w-7xl mx-auto text-center'>
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className='text-amber-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block'>
						Celebration Expert
					</motion.span>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-6xl md:text-8xl font-black text-gray-900 tracking-tighter leading-none mb-8'>
						Twoje Urodziny, <br />
						<span className='text-amber-500'>Nasza Technika.</span>
					</motion.h1>
					<p className='max-w-2xl mx-auto text-gray-500 text-xl font-medium'>
						Od osiemnastek i domówek premium, przez 30/40/50 urodziny, aż po rodzinne imprezy z bezalkoholowym barem dla
						młodszych gości. Tworzymy oprawę techniczną, która porządkuje przestrzeń i realnie buduje klimat wydarzenia.
					</p>
				</div>
			</section>

			{/* TRZY FILARY IMPREZY */}
			<section className='py-24 px-6'>
				<div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8'>
					{/* 18-nastki */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all'>
						<Disc className='text-amber-500 mb-6' size={40} />
						<h2 className='text-3xl font-black mb-4 tracking-tighter'>Wymarzona 18-stka</h2>
						<p className='text-gray-500 leading-relaxed text-sm font-medium'>
							Robimy robotę, której nie musisz pilnować. Tworzymy oprawę, która żyje rytmem Twojej imprezy, zapewniając
							klubową energię i wizualny efekt "wow" na każdym zdjęciu gości.
						</p>
					</motion.div>

					{/* 30-stki / 40-stki */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className='bg-gray-900 p-10 rounded-[3rem] shadow-xl text-white'>
						<PartyPopper className='text-amber-500 mb-6' size={40} />
						<h2 className='text-3xl font-black mb-4 tracking-tighter'>Eleganckie 30/40/50</h2>
						<p className='text-gray-400 leading-relaxed text-sm font-light'>
							Klasa i styl. Podświetlany bar, nastrojowe oświetlenie architektury i strefa chillout pod namiotem.
							Idealne rozwiązanie dla osób, które cenią dobrą zabawę w prestiżowym wydaniu.
						</p>
					</motion.div>

					{/* Junior Party / Mocktails */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4 }}
						className='bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all'>
						<GlassWater className='text-amber-500 mb-6' size={40} />
						<h2 className='text-3xl font-black mb-4 tracking-tighter'>Junior Mocktail Bar</h2>
						<p className='text-gray-500 leading-relaxed text-sm font-medium'>
							Organizujesz 15-te urodziny? Nasz bar serwuje profesjonalne <strong>moktajle</strong> (drinki
							bezalkoholowe). Kolorowe, owocowe i widowiskowe – bezpieczna frajda dla najmłodszych.
						</p>
					</motion.div>
				</div>
			</section>

			{/* CO MOŻEMY ZAPEWNIĆ */}
			<section className='py-10 bg-[#fdfbf7] px-6'>
				<div className='max-w-7xl mx-auto'>
					<div className='text-center max-w-3xl mx-auto mb-16'>
						<span className='text-amber-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block'>
							Zakres Realizacji
						</span>
						<h2 className='text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-6'>
							Co możemy przygotować <span className='text-amber-500'>na Twoje urodziny?</span>
						</h2>
						<p className='text-gray-500 text-lg font-medium leading-relaxed'>
							Od pojedynczych elementów po kompletną oprawę imprezy. Dopasowujemy zakres realizacji do miejsca, liczby
							gości i charakteru wydarzenia.
						</p>
					</div>

					<div className='grid md:grid-cols-2 xl:grid-cols-4 gap-8'>
						<OfferCard
							title='Namiot eventowy'
							desc='Strefa imprezy w ogrodzie lub plenerze. Daje osłonę, porządkuje przestrzeń i buduje klimat całego wydarzenia.'
						/>
						<OfferCard
							title='Nagłośnienie 2.2'
							desc='Dwie aktywne kolumny, dwa subwoofery i mikser. Setup pod imprezy prywatne, namioty, osiemnastki i garden party.'
						/>
						<OfferCard
							title='Oświetlenie i efekty'
							desc='Stroboskop RGB, Airshipy, laser, głowica i dym. Dynamiczne światło, które realnie ożywia parkiet.'
						/>
						<OfferCard
							title='Mobilny bar'
							desc='Bar dopasowany do rodzaju imprezy – od klasycznych drinków po bezalkoholowe mocktaile dla młodszych gości.'
						/>
					</div>
				</div>
			</section>

			{/* JAK TO DZIAŁA */}
			<section className='py-10 bg-white px-6'>
				<div className='max-w-6xl mx-auto'>
					<div className='text-center max-w-3xl mx-auto mb-16'>
						<span className='text-amber-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block'>
							Jak działamy
						</span>
						<h2 className='text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-6'>
							Od zapytania do <span className='text-amber-500'>gotowej imprezy</span>
						</h2>
					</div>

					<div className='grid md:grid-cols-4 gap-8'>
						<StepCard
							number='01'
							title='Wysyłasz zapytanie'
							desc='Podajesz datę, lokalizację i zakres imprezy. Sprawdzamy dostępność terminu i możliwości realizacji.'
						/>
						<StepCard
							number='02'
							title='Dobieramy setup'
							desc='Dopasowujemy namiot, nagłośnienie, oświetlenie i bar do liczby gości oraz charakteru wydarzenia.'
						/>
						<StepCard
							number='03'
							title='Rozstawiamy wszystko'
							desc='Dowozimy sprzęt, montujemy go na miejscu, uruchamiamy i konfigurujemy podstawowe ustawienia.'
						/>
						<StepCard
							number='04'
							title='Ty robisz imprezę'
							desc='Goście wchodzą w gotową przestrzeń, a Ty nie tracisz czasu na techniczne kombinowanie.'
						/>
					</div>
				</div>
			</section>

			{/* SZCZEGÓŁOWY OPIS SEO Z ANIMACJĄ KASKADOWĄ */}
			<section className='py-32 bg-white'>
				<div className='max-w-5xl mx-auto px-6'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div>
							<h3 className='text-4xl font-black tracking-tighter mb-8'>Dlaczego urodziny z Axis Events?</h3>

							<div className='space-y-8'>
								{[
									{
										t: 'Bar dopasowany do wieku',
										d: 'Od szotów na 18-stkę po wyszukane koktajle i bezalkoholowe moktajle dla juniorów. Nasza infrastruktura barowa dostosuje się do klimatu imprezy.',
									},
									{
										t: 'Namiot 9x6 - idealna baza',
										d: 'Nasza przestrzeń to idealny rozmiar na domowe podwórko. Pomieści strefę barową i miejsce do tańca dla najbliższej ekipy. To 54 m² czystej energii, które zamienią Twój ogród w profesjonalną strefę eventową bez zagracania całej działki.',
									},
									{
										t: 'Oświetlenie, które robi klimat',
										d: 'Używamy mocnego oświetlenia LED i efektów Airship, które reagują na rytm muzyki. Nie bawimy się w półśrodki – tworzymy konkretną, imprezową atmosferę, która ożywia namiot i genialnie wygląda na zdjęciach.',
									},
								].map((item, i) => (
									<motion.div
										key={i}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ delay: i * 0.2 }}
										viewport={{ once: true }}
										className='border-l-4 border-amber-500 pl-6'>
										<h4 className='font-bold text-gray-900 mb-2'>{item.t}</h4>
										<p className='text-gray-500 text-sm leading-relaxed'>{item.d}</p>
									</motion.div>
								))}
							</div>
						</div>
						<div className='relative'>
							<div className='rounded-[4rem] overflow-hidden rotate-3 shadow-2xl'>
								<img
									src='https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80'
									alt='Impreza urodzinowa'
									className='w-full h-full object-cover'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* KONTAKT CTA */}
			<section className='pb-24 px-6'>
				<div className='max-w-5xl mx-auto bg-amber-500 rounded-[3rem] p-12 text-center'>
					<h2 className='text-3xl md:text-5xl font-black mb-6 tracking-tighter'>Rezerwuj termin na swoją imprezę</h2>
					<p className='text-gray-900/70 font-bold mb-10'>Liczba wolnych weekendów w sezonie jest ograniczona!</p>
					<Link
						to='/kontakt'
						className='bg-gray-900 text-white px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-all inline-block'>
						Sprawdź dostępność
					</Link>
				</div>
			</section>
		</div>
	)
}

function OfferCard({ title, desc }) {
	return (
		<div className='bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all'>
			<h3 className='text-2xl font-black text-gray-900 mb-4 tracking-tight'>{title}</h3>
			<p className='text-gray-500 text-sm leading-relaxed font-medium'>{desc}</p>
		</div>
	)
}

function StepCard({ number, title, desc }) {
	return (
		<div className='rounded-[2.5rem] p-8 bg-[#fdfbf7] border border-gray-100'>
			<div className='text-amber-500 font-black text-3xl tracking-tighter mb-4'>{number}</div>
			<h3 className='text-2xl font-black text-gray-900 mb-4 tracking-tight'>{title}</h3>
			<p className='text-gray-500 text-sm leading-relaxed font-medium'>{desc}</p>
		</div>
	)
}
