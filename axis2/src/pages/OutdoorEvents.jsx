import { Link } from 'react-router-dom'
import { Zap, Mountain, Wind, ShieldCheck, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function OutdoorEvents() {
	return (
		<div className='bg-[#fdfbf7] min-h-screen'>
			{/* HERO SECTION */}
			<section className='pt-40 pb-20 px-6 overflow-hidden'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div className='relative z-10'>
							<span className='text-amber-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block'>
								No Power? No Problem.
							</span>
							<h1 className='text-6xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-8'>
								Eventy <br />
								<span className='text-amber-500'>Bez Granic.</span>
							</h1>
							<p className='text-gray-500 text-xl leading-relaxed mb-10 font-medium'>
								Środek pustego pola czy dzika plaża? Dla nas to idealna lokalizacja. Dostarczamy pełną infrastrukturę i
								własne zasilanie tam, gdzie inni wymiękają.
							</p>
							<Link
								to='/kontakt'
								className='bg-gray-900 text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-amber-500 hover:text-gray-900 transition-all shadow-xl'>
								Zróbmy hałas w plenerze
							</Link>
						</div>

						<div className='relative'>
							<div className='aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white relative'>
								<img
									src='https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80'
									alt='Event w plenerze Axis'
									className='w-full h-full object-cover'
								/>
								{/* Overlay z napisem */}
								<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12'>
									<p className='text-white font-black text-2xl tracking-tighter'>Obsłużymy każdą lokalizację.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* POWER SECTION - Agregat i Niezależność */}
			<section className='py-32 bg-gray-900 rounded-[4rem] mx-4 my-10 relative overflow-hidden'>
				<div className='max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center'>
					<div className='order-2 lg:order-1'>
						<div className='w-20 h-20 bg-amber-500 rounded-3xl flex items-center justify-center mb-10 rotate-3 shadow-[0_0_50px_rgba(245,158,11,0.3)]'>
							<Zap size={40} className='text-gray-900' />
						</div>
						<h2 className='text-4xl md:text-6xl font-black text-white tracking-tighter mb-8'>
							Własne zasilanie. <br /> Totalna wolność.
						</h2>
						<p className='text-gray-400 text-lg leading-relaxed mb-8 font-light'>
							Nie szukaj gniazdka w trawie. Dysponujemy <strong>profesjonalnymi agregatami prądotwórczymi</strong>,
							które udźwigną potężne nagłośnienie, oświetlenie i pełną strefę barową jednocześnie. Cicho, stabilnie i
							bez niespodzianek.
						</p>
						<div className='flex gap-4 text-amber-500 font-black uppercase text-[10px] tracking-widest'>
							<span className='px-4 py-2 border border-amber-500/30 rounded-full'>Stabilizacja napięcia</span>
							<span className='px-4 py-2 border border-amber-500/30 rounded-full'>Cicha praca</span>
						</div>
					</div>
					<div className='order-1 lg:order-2 bg-white/5 p-8 rounded-[3rem] border border-white/10 backdrop-blur-sm'>
						<h3 className='text-white font-bold mb-4 text-xl'>Gdzie gramy?</h3>
						<ul className='space-y-4'>
							<li className='flex items-center gap-4 text-gray-300'>
								<Mountain className='text-amber-500' /> Polany i tereny leśne
							</li>
							<li className='flex items-center gap-4 text-gray-300'>
								<Wind className='text-amber-500' /> Brzegi jezior i plaże
							</li>
							<li className='flex items-center gap-4 text-gray-300'>
								<Sun className='text-amber-500' /> Otwarte przestrzenie miejskie
							</li>
							<li className='flex items-center gap-4 text-gray-300'>
								<ShieldCheck className='text-amber-500' /> Trudne warunki techniczne
							</li>
						</ul>
					</div>
				</div>
				{/* Background Decor */}
				<div className='absolute right-0 bottom-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]'></div>
			</section>

			{/* SEO & DESCRIPTION - ROZSZERZONA WERSJA */}
			<section className='py-32 bg-[#fdfbf7]'>
				<div className='max-w-6xl mx-auto px-6'>
					<div className='grid lg:grid-cols-2 gap-16 items-start'>
						<div>
							<h4 className='text-3xl font-black text-gray-900 mb-8 tracking-tighter leading-none'>
								Technika, która nie boi się <br /> żadnych wyzwań.
							</h4>
							<div className='space-y-6 text-gray-500 text-lg leading-relaxed'>
								<p>
									Realizacja <strong>eventów plenerowych</strong> to nasza pasja, ale przede wszystkim odpowiedzialność.
									Wiemy, że <strong>nagłośnienie pleneru</strong> i stabilne <strong>zasilanie z agregatu</strong> to
									fundament każdej udanej imprezy pod gołym niebem.
								</p>
								<p>
									Niezależnie czy planujesz kameralną <strong>integrację firmową w lesie</strong>, eleganckie wesele w
									ogrodzie czy festyn na największym polu – Axis Events dostarcza sprzęt i doświadczenie, które
									gwarantują sukces bez względu na brak infrastruktury terenu. Nasze{' '}
									<strong>agregaty prądotwórcze</strong> są wyposażone w systemy stabilizacji napięcia (AVR), co czyni
									je bezpiecznymi nawet dla najbardziej czułej elektroniki i nagłośnienia.
								</p>
							</div>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							{[
								{
									title: 'Niezależność',
									desc: 'Działamy w miejscach, gdzie nie dociera sieć energetyczna. Własne paliwo, własne rozdzielnie i pełne okablowanie zewnętrzne.',
								},
								{
									title: 'Odporność',
									desc: 'Nasz sprzęt nagłośnieniowy i oświetleniowy jest przygotowany na zmienne warunki atmosferyczne, od upałów po wilgoć.',
								},
								{
									title: 'Skalowalność',
									desc: 'Dopasowujemy moc systemu do wielkości terenu. Od punktowego nagłośnienia strefy barowej po pokrycie dźwiękiem dużej polany.',
								},
								{
									title: 'Bezpieczeństwo',
									desc: 'Każda instalacja plenerowa przechodzi testy bezpieczeństwa. Dbamy o zabezpieczenie przewodów i stabilność konstrukcji.',
								},
							].map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -20 }} // Start: niewidoczne i przesunięte w lewo
									whileInView={{ opacity: 1, x: 0 }} // Koniec: widoczne i na swoim miejscu
									viewport={{ once: true }} // Animacja odpali się tylko raz
									transition={{
										duration: 0.5,
										delay: index * 0.2, // Efekt "kaskady" - każda kolejna karta wchodzi ciut później
									}}
									className='border-l-2 border-amber-500/30 pl-6'>
									<h5 className='font-black text-gray-900 uppercase text-xs tracking-widest mb-3'>{item.title}</h5>
									<p className='text-sm text-gray-500'>{item.desc}</p>
								</motion.div>
							))}
						</div>
					</div>

					<div className='mt-20 h-[1px] w-full bg-gray-200 relative'>
						<div className='absolute inset-0 flex justify-center'>
							<div className='h-[1px] w-20 bg-amber-500'></div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
