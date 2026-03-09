import { useState } from 'react'

export default function InfoSection() {
	const [open, setOpen] = useState(null)

	const toggle = index => {
		setOpen(open === index ? null : index)
	}

	return (
		// Główne tło sekcji zmieniamy na czarne, żeby pasowało do reszty strony
		<section className='pt-32 bg-[#050505] text-white overflow-hidden'>
			<div className='max-w-7xl mx-auto px-6 space-y-32 mb-32'>
				{/* ===== INTRO - POWERFUL HEADER ===== */}
				<div className='relative'>
					<div className='absolute -left-20 -top-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10'></div>
					<div className='text-center max-w-4xl mx-auto'>
						<h2 className='text-sm uppercase tracking-[0.4em] text-amber-500 font-black mb-6'>O Naszym Sprzęcie</h2>
						<h3 className='text-5xl md:text-7xl font-black mb-8 tracking-tighter'>
							Technologia, która <span className='text-amber-500'>definiuje eventy</span>.
						</h3>
						<p className='text-gray-400 text-xl leading-relaxed font-light'>
							W Axis Events nie wynajmujesz tylko namiotu, dostajesz ekipę, która dopilnuje wszystkiego. Od kameralnych
							urodzin po duże eventy firmowe – dbamy o każdy detal oprawy.
						</p>
					</div>
				</div>

				{/* ===== SEKCJA 1 - AUDIO ===== */}
				<div className='grid lg:grid-cols-12 gap-12 items-center'>
					<div className='lg:col-span-7 relative group'>
						<div className='aspect-video overflow-hidden rounded-[3rem] shadow-2xl border border-white/5'>
							<img
								src='https://images.unsplash.com/photo-1506157786151-b8491531f063'
								alt='Nagłośnienie'
								className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100'
							/>
						</div>
						<div className='absolute -bottom-10 -right-10 bg-neutral-900 border border-white/10 p-8 rounded-3xl shadow-2xl hidden md:block max-w-[200px]'>
							<p className='text-4xl font-black text-amber-500'>115dB</p>
							<p className='text-[10px] font-bold text-gray-500 uppercase tracking-widest'>Czystego brzmienia</p>
						</div>
					</div>

					<div className='lg:col-span-5 space-y-6'>
						<h3 className='text-4xl font-black leading-tight uppercase tracking-tighter'>
							Precyzyjne <br /> <span className='text-amber-500'>systemy audio</span>
						</h3>
						<p className='text-gray-400 text-lg font-light'>
							Nagłośnienie, które robi klimat, a nie tylko gra w tle. Nasz zestaw 2.2 wypełnia namiot mocnym basem i
							czystym dźwiękiem – idealnym pod DJ-a lub energetyczną playlistę.
						</p>
						<div className='pt-4 grid grid-cols-2 gap-4 text-left'>
							<div className='p-6 bg-white/5 rounded-3xl border border-white/10'>
								<p className='font-black text-xs uppercase tracking-widest mb-1'>System 2.2</p>
								<p className='text-sm text-gray-500 font-bold italic'>3000W Mocy</p>
							</div>
							<div className='p-6 bg-white/5 rounded-3xl border border-white/10'>
								<p className='font-black text-xs uppercase tracking-widest mb-1'>Mikrofony</p>
								<p className='text-sm text-gray-500 font-bold italic'>Zasięg UHF</p>
							</div>
						</div>
					</div>
				</div>

				{/* ===== SEKCJA 2 - LIGHTING ===== */}
				<div className='grid lg:grid-cols-12 gap-12 items-center pb-20'>
					<div className='lg:col-span-5 lg:order-1 order-2 space-y-6'>
						<h3 className='text-4xl font-black leading-tight uppercase tracking-tighter text-right md:text-left'>
							Światło, które <br /> <span className='text-amber-500'>tworzy historię</span>
						</h3>
						<p className='text-gray-400 text-lg font-light text-right md:text-left'>
							Projektujemy atmosferę. Nasze oświetlenie LED synchronizuje się z rytmem muzyki, zmieniając namiot w
							tętniący życiem parkiet.
						</p>
						<div className='pt-4 grid grid-cols-2 gap-4'>
							<div className='p-6 bg-white/5 rounded-3xl border border-white/10 text-center'>
								<p className='font-black text-white uppercase text-xs tracking-widest mb-1'>Laser Show</p>
								<p className='text-sm text-gray-500 font-bold italic'>RGB Power</p>
							</div>
							<div className='p-6 bg-white/5 rounded-3xl border border-white/10 text-center'>
								<p className='font-black text-white uppercase text-xs tracking-widest mb-1'>Dynamic</p>
								<p className='text-sm text-gray-500 font-bold italic'>Strobo & Wash</p>
							</div>
						</div>
					</div>

					<div className='lg:col-span-7 lg:order-2 order-1 relative group'>
						<div className='aspect-video overflow-hidden rounded-[3rem] shadow-2xl border border-white/5 rotate-1 group-hover:rotate-0 transition-all duration-500'>
							<img
								src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745'
								alt='Oświetlenie'
								className='w-full h-full object-cover opacity-80 group-hover:opacity-100'
							/>
						</div>
					</div>
				</div>
			</div>

			{/* ===== PRZEJŚCIE I FAQ - JASNA SEKCJA ===== */}
			<div className='bg-white rounded-t-[4rem] text-gray-900 pt-32 pb-32'>
				<div className='max-w-4xl mx-auto px-6'>
					<div className='text-center mb-20'>
						<span className='text-amber-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block'>
							Centrum Pomocy
						</span>
						<h3 className='text-5xl md:text-7xl font-black mb-4 tracking-tighter uppercase'>FAQ.</h3>
						<p className='text-gray-400 uppercase tracking-widest text-[10px] font-bold'>
							Wszystko, co musisz wiedzieć o współpracy
						</p>
					</div>

					<div className='space-y-4'>
						{[
							{
								question: 'Czy potrzebujecie dostępu do prądu?',

								answer:
									'Tak. Nasz namiot wymaga stałego zasilania, ponieważ działa dzięki dmuchawie, która utrzymuje jego kształt. Do działania potrzebne jest standardowe gniazdko 230V.Jeśli w miejscu wydarzenia nie ma dostępu do prądu, możemy zapewnić agregat prądotwórczy, który zasili namiot oraz dodatkowe oświetlenie lub nagłośnienie.',
							},

							{
								question: 'Czy zapewniacie montaż i demontaż sprzętu?',

								answer:
									'Zawsze. Nasza ekipa techniczna pojawia się na miejscu odpowiednio wcześniej, aby przeprowadzić testy i próby dźwięku przed przybyciem gości.',
							},

							{
								question: 'Jak wyceniany jest event?',

								answer:
									'Każda wycena jest szyta na miarę. Bierzemy pod uwagę czas trwania, lokalizację i ilość potrzebnego personelu technicznego.',
							},

							{
								question: 'Ile kosztuje transport namiotu na imprezę?',

								answer:
									'Koszt transportu namiotu zależy od lokalizacji wydarzenia oraz terminu. Na terenie Mazowsza transport jest zawarty w cenie. Poza obszarem Mazowsza, koszt transportu ustalamy indywidualnie.',
							},

							{
								question: 'Ile miejsca potrzeba na namiot imprezowy 9×6 m?',

								answer:
									'Namiot o wymiarach 9×6 m zajmuje powierzchnię około 54 m². Zalecamy jednak zapewnienie dodatkowej przestrzeni wokół namiotu, aby umożliwić swobodne poruszanie się gości i personelu oraz ewentualne ustawienie dodatkowych elementów, takich jak strefa barowa czy miejsce do tańca. W praktyce, dla komfortu i funkcjonalności, warto zarezerwować obszar o wymiarach około 12×9 m (108 m²) lub więcej, w zależności od planowanej liczby gości i układu imprezy.',
							},

							{
								question: 'Co w przypadku złej pogody w dniu imprezy – czy rezerwację namiotu można odwołać?',

								answer:
									'Nasz namiot jest przystosowany do użytkowania w różnych warunkach pogodowych – chroni przed deszczem i wiatrem, dlatego w większości przypadków wydarzenie może odbyć się zgodnie z planem. Jeśli jednak prognozy przewidują ekstremalne warunki, takie jak burze z gradem, silne wiatry lub inne zagrożenia, które mogą wpłynąć na bezpieczeństwo gości i sprzętu, oferujemy możliwość bezpłatnej zmiany terminu rezerwacji w bieżącym sezonie. Zapoznaj sie z regulaminem',
							},

							{
								question: 'Ile kosztuje wynajem namiotu imprezowego?',

								answer:
									'Cena wynajmu namiotu zależy od kilku czynników, takich jak lokalizacja wydarzenia, czas wynajmu oraz dodatkowe wyposażenie (np. oświetlenie, nagłośnienie czy agregat prądotwórczy). Oferujemy namiot imprezowy o wymiarach 6×9 m, który świetnie sprawdza się na imprezach prywatnych, urodzinach czy wydarzeniach w ogrodzie. Aby otrzymać dokładną wycenę, skontaktuj się z nami i podaj datę wydarzenia oraz lokalizację.',
							},
						].map((item, index) => (
							<div
								key={index}
								className={`rounded-[2.5rem] transition-all duration-500 cursor-pointer ${open === index ? 'bg-gray-50 shadow-2xl p-10' : 'bg-white border border-gray-100 p-8 hover:border-amber-200'}`}
								onClick={() => toggle(index)}>
								<div className='flex justify-between items-center'>
									<h4 className='text-xl font-black tracking-tight uppercase leading-tight pr-8'>{item.question}</h4>
									<div
										className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${open === index ? 'bg-amber-500 text-white rotate-[135deg]' : 'bg-black text-white'}`}>
										<span className='text-2xl font-light'>+</span>
									</div>
								</div>

								<div
									className={`overflow-hidden transition-all duration-500 ${open === index ? 'max-h-[300px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
									<p className='text-gray-500 leading-relaxed text-lg font-light border-l-2 border-amber-500 pl-6 italic'>
										{item.answer}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
