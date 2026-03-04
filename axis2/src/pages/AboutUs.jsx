import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Award, Clock } from 'lucide-react'

export default function AboutUs() {
	return (
		<div className='bg-[#fdfbf7] min-h-screen font-sans'>
			<article className='pt-40 pb-24 px-6 max-w-6xl mx-auto text-gray-800'>
				{/* HEADER - Pełny tekst H1 */}
				<header className='text-center mb-24'>
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className='text-amber-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block'>
						Poznaj naszą historię
					</motion.span>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-5xl md:text-7xl font-black mb-8 tracking-tighter text-black leading-none'>
						Axis Events: Tworzymy <br />
						<span className='text-amber-500'>infrastrukturę Twoich wspomnień.</span>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className='text-xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed'>
						Profesjonalna wypożyczalnia sprzętu eventowego. Od mobilnych barów, przez namioty sferyczne, aż po
						profesjonalne nagłośnienie i oświetlenie. Razem lub osobno – Ty decydujesz.
					</motion.p>
				</header>

				{/* Sekcja 1: O nas / Filozofia - Pełny tekst */}
				<section className='mb-32'>
					<div className='grid lg:grid-cols-2 gap-20 items-center'>
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className='space-y-6'>
							<h2 className='text-4xl font-black tracking-tighter'>Więcej niż wypożyczalnia sprzętu</h2>
							<p className='text-gray-600 leading-relaxed text-lg'>
								W <strong>Axis Events</strong> wierzymy, że udany event to suma detali, które działają niezawodnie.
								Nasza historia zaczęła się od pasji do technologii estradowej i chęci dostarczenia na rynek rozwiązań,
								które łączą estetykę z bezkompromisową jakością. Nie jesteśmy tylko dostawcą – jesteśmy Twoim partnerem
								technicznym.
							</p>
							<p className='text-gray-600 leading-relaxed text-lg'>
								Specjalizujemy się w obsłudze wydarzeń o różnym charakterze: od kameralnych wesel w ogrodzie, przez
								eventy firmowe, aż po huczne imprezy plenerowe. Naszą siłą jest <strong>elastyczność</strong>.
								Potrzebujesz tylko profesjonalnego baru z obsługą? A może szukasz kompletnego namiotu z nagłośnieniem i
								oświetleniem, który stanie się centrum Twojego eventu? Jesteśmy gotowi na każde wyzwanie.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							className='relative'>
							<div className='bg-amber-500 rounded-[4rem] absolute inset-0 rotate-3'></div>
							<div className='bg-white rounded-[4rem] relative overflow-hidden shadow-2xl h-[450px] border-4 border-white'>
								<img
									src='https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80'
									alt='Elegancki mobilny bar Axis Events podczas przyjęcia weselnego w plenerze'
									className='object-cover w-full h-full'
								/>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Sekcja 2: Modułowość - Pełny tekst z kartami */}
				<section className='mb-32 bg-gray-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden'>
					<h2 className='text-4xl font-black mb-16 text-center tracking-tight relative z-10'>
						Sprzęt dopasowany do Twoich potrzeb
					</h2>
					<div className='grid md:grid-cols-3 gap-12 relative z-10'>
						<motion.div
							whileHover={{ y: -10 }}
							className='space-y-4 p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md'>
							<h3 className='text-xl font-black text-amber-500 uppercase tracking-wider'>01. Mobilne Bary</h3>
							<p className='text-gray-400 text-sm leading-relaxed'>
								Nasze jednostki barowe to połączenie designu i ergonomii. Możesz wypożyczyć je jako samodzielny element
								na wesele lub targi. Wykonane z wysokiej jakości materiałów, z możliwością personalizacji podświetlenia
								LED.
							</p>
						</motion.div>

						<motion.div
							whileHover={{ y: -10 }}
							className='space-y-4 p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md'>
							<h3 className='text-xl font-black text-amber-500 uppercase tracking-wider'>02. Namioty i Zadaszenia</h3>
							<p className='text-gray-400 text-sm leading-relaxed'>
								Niezależnie od pogody, Twoi goście będą czuć się komfortowo. Oferujemy namioty ekspresowe i sferyczne,
								które chronią przed słońcem i deszczem, tworząc unikalną strefę chillout na Twoim wydarzeniu.
							</p>
						</motion.div>

						<motion.div
							whileHover={{ y: -10 }}
							className='space-y-4 p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md'>
							<h3 className='text-xl font-black text-amber-500 uppercase tracking-wider'>
								03. Technika: Audio & Light
							</h3>
							<p className='text-gray-400 text-sm leading-relaxed'>
								Profesjonalne nagłośnienie oraz oświetlenie sceniczne i dekoracyjne. Wynajmij sam system audio na
								konferencję lub pełen zestaw oświetleniowy na parkiet, który stworzy niesamowity klimat.
							</p>
						</motion.div>
					</div>
					<div className='absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]'></div>
				</section>

				{/* Sekcja 3: Proces - Pełny tekst krok po kroku */}
				<section className='mb-32'>
					<h2 className='text-4xl font-black mb-16 tracking-tighter text-center'>
						Jak wygląda współpraca z Axis Events?
					</h2>
					<div className='space-y-16'>
						{[
							{
								step: '01',
								title: 'Darmowa Konsultacja i Audyt Potrzeb',
								desc: 'Analizujemy lokalizację (czy to ogród, sala bankietowa czy teren festiwalowy), liczbę gości oraz charakter wydarzenia. Dobieramy optymalną konfigurację sprzętu, abyś nie płacił za to, czego nie potrzebujesz.',
							},
							{
								step: '02',
								title: 'Projekt Techniczny i Logistyka',
								desc: 'Przygotowujemy plan rozmieszczenia: gdzie staną kolumny, jak poprowadzimy okablowanie, aby było bezpieczne i niewidoczne, oraz jak ustawić bar, by zapewnić płynną obsługę gości. Posiadamy własny transport, więc logistyka jest po naszej stronie.',
							},
							{
								step: '03',
								title: 'Montaż, Realizacja i Demontaż',
								desc: 'Nasz zespół pojawia się na miejscu z odpowiednim wyprzedzeniem. Wykonujemy testy dźwięku, ustawiamy sceny świetlne i upewniamy się, że wszystko jest dopięte na ostatni guzik. Po evencie sprawnie demontujemy sprzęt.',
							},
						].map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.2 }}
								className='flex gap-8 items-start'>
								<span className='text-5xl font-black text-amber-500/20'>{item.step}</span>
								<div>
									<h4 className='text-2xl font-black mb-3'>{item.title}</h4>
									<p className='text-gray-500 leading-relaxed max-w-3xl'>{item.desc}</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Sekcja 4: Dlaczego my - Pełny tekst z ikonami */}
				<section className='mb-32 py-20 border-y border-gray-100'>
					<h2 className='text-3xl font-black mb-16 tracking-tighter text-center uppercase'>
						Dlaczego branża eventowa wybiera Axis?
					</h2>
					<div className='grid md:grid-cols-2 gap-x-16 gap-y-12'>
						<Feature
							icon={<Award />}
							title='Sprzęt klasy Premium'
							desc='Nie uznajemy półśrodków. Nasze nagłośnienie i oświetlenie to standardy światowych riderów technicznych.'
						/>
						<Feature
							icon={<Zap />}
							title='Pełna Skalowalność'
							desc="Obsługujemy zarówno prywatne 'garden party', jak i eventy korporacyjne na kilkuset gości."
						/>
						<Feature
							icon={<ShieldCheck />}
							title='Bezpieczeństwo (PPOŻ/BHP)'
							desc='Wszystkie nasze konstrukcje i instalacje elektryczne posiadają niezbędne atesty i certyfikaty bezpieczeństwa.'
						/>
						<Feature
							icon={<Clock />}
							title='Wsparcie 24/7'
							desc='Podczas trwania eventu nasz technik jest zawsze w zasięgu ręki, dbając o niezakłócony przebieg imprezy.'
						/>
					</div>
				</section>

				{/* Sekcja 5: Zdjęcia (Grid) */}
				<section className='mb-32'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
						<div className='h-48 bg-gray-200 rounded-3xl overflow-hidden'>
							<img
								src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80'
								alt='Montaż oświetlenia'
								className='object-cover w-full h-full hover:scale-110 transition-transform duration-500'
							/>
						</div>
						<div className='h-48 bg-gray-200 rounded-3xl overflow-hidden'>
							<img
								src='https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80'
								alt='Namiot eventowy'
								className='object-cover w-full h-full hover:scale-110 transition-transform duration-500'
							/>
						</div>
						<div className='h-48 bg-gray-200 rounded-3xl overflow-hidden'>
							<img
								src='https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80'
								alt='Bar mobilny detal'
								className='object-cover w-full h-full hover:scale-110 transition-transform duration-500'
							/>
						</div>
						<div className='h-48 bg-gray-200 rounded-3xl overflow-hidden'>
							<img
								src='https://images.unsplash.com/photo-1514525253361-b83f85f553c0?auto=format&fit=crop&q=80'
								alt='Nagłośnienie event'
								className='object-cover w-full h-full hover:scale-110 transition-transform duration-500'
							/>
						</div>
					</div>
				</section>

				{/* CTA - Final Section */}
				<section className='text-center bg-black text-white p-16 rounded-[4rem] shadow-2xl relative overflow-hidden'>
					<h2 className='text-4xl md:text-5xl font-black mb-6 tracking-tighter'>Gotowy na niezapomniany event?</h2>
					<p className='text-xl mb-10 opacity-80 max-w-2xl mx-auto'>
						Skontaktuj się z nami, a przygotujemy darmową wycenę dopasowaną do Twoich potrzeb.
					</p>
					<Link
						to='/kontakt'
						className='bg-amber-500 text-black px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white transition-all inline-flex items-center gap-3'>
						Zarezerwuj termin <ArrowRight size={16} />
					</Link>
				</section>
			</article>
		</div>
	)
}

function Feature({ icon, title, desc }) {
	return (
		<div className='flex items-start gap-6'>
			<div className='text-amber-500 bg-amber-500/10 p-4 rounded-2xl'>{icon}</div>
			<div>
				<h5 className='font-black text-gray-900 mb-2 uppercase text-xs tracking-widest'>{title}</h5>
				<p className='text-gray-500 text-sm leading-relaxed'>{desc}</p>
			</div>
		</div>
	)
}
