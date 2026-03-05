import { useState } from 'react'

export default function InfoSection() {
	const [open, setOpen] = useState(null)

	const toggle = index => {
		setOpen(open === index ? null : index)
	}

	return (
		<section className='pt-32 bg-[#fdfbf7] text-gray-900 overflow-hidden'>
			<div className='max-w-7xl mx-auto px-6 space-y-32'>
				{/* ===== INTRO - POWERFUL HEADER ===== */}
				<div className='relative'>
					<div className='absolute -left-20 -top-20 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl -z-10'></div>
					<div className='text-center max-w-4xl mx-auto'>
						<h2 className='text-sm uppercase tracking-[0.4em] text-amber-600 font-black mb-6'>O Naszym Sprzęcie</h2>
						<h3 className='text-5xl md:text-7xl font-black mb-8 tracking-tighter'>
							Technologia, która <span className='text-amber-500'>definiuje eventy</span>.
						</h3>
						<p className='text-gray-600 text-xl leading-relaxed'>
							W Axis Events nie wynajmujesz tylko namiotu, dostajesz ekipę, która dopilnuje wszystkiego. Od kameralnych
							urodzin po duże eventy firmowe – dbamy o każdy detal oprawy, by Twój event po prostu zachwycał.
						</p>
					</div>
				</div>

				{/* ===== SEKCJA 1 - AUDIO (L-Shape Design) ===== */}
				<div className='grid lg:grid-cols-12 gap-12 items-center'>
					<div className='lg:col-span-7 relative'>
						<div className='aspect-video overflow-hidden rounded-[3rem] shadow-2xl'>
							<img
								src='https://images.unsplash.com/photo-1506157786151-b8491531f063'
								alt='Nagłośnienie koncertowe'
								className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
							/>
						</div>
						{/* Pływający element dekoracyjny */}
						<div className='absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block max-w-[200px]'>
							<p className='text-4xl font-black text-amber-500'>115dB</p>
							<p className='text-xs font-bold text-gray-400 uppercase tracking-widest'>Czystego brzmienia</p>
						</div>
					</div>

					<div className='lg:col-span-5 space-y-6'>
						<h3 className='text-4xl font-black leading-tight'>
							Precyzyjne <br /> systemy audio
						</h3>
						<p className='text-gray-600 text-lg'>
							Nagłośnienie, które robi klimat, a nie tylko gra w tle. Nasz zestaw 2.2 wypełnia namiot mocnym basem i
							czystym, wyraźnym dźwiękiem – idealnym pod DJ-a lub energetyczną playlistę. My zajmujemy się rozstawieniem
							i strojeniem sprzętu, a Ty podłączasz muzykę i zaczynasz imprezę.
						</p>
						<div className='pt-4 grid grid-cols-2 gap-4'>
							<div className='p-4 bg-white rounded-2xl border border-gray-100'>
								<p className='font-bold'>System 2.2</p>
								<p className='text-sm text-gray-500'>Moc konfiguracji 3000W</p>
							</div>
							<div className='p-4 bg-white rounded-2xl border border-gray-100'>
								<p className='font-bold'>Mikrofony</p>
								<p className='text-sm text-gray-500'>Zasięg bez zakłóceń</p>
							</div>
						</div>
					</div>
				</div>

				{/* ===== SEKCJA 2 - LIGHTING (Inverted) ===== */}
				<div className='grid lg:grid-cols-12 gap-12 items-center'>
					<div className='lg:col-span-5 lg:order-1 order-2 space-y-6'>
						<h3 className='text-4xl font-black leading-tight'>
							Światło, które <br /> opowiada historię
						</h3>
						<p className='text-gray-600 text-lg'>
							Projektujemy atmosferę, która żyje razem z Twoją imprezą. Nasze oświetlenie LED automatycznie
							synchronizuje się z rytmem muzyki, zmieniając namiot w tętniący życiem parkiet. My wszystko rozstawiamy i
							konfigurujemy, by oprawa wizualna idealnie pasowała do każdego momentu Twojego wydarzenia.
						</p>
						<div className='pt-4 grid grid-cols-2 gap-4'>
							<div className='p-4 bg-white rounded-2xl border border-gray-100'>
								<p className='font-bold'>Projektor laserowy</p>
								<p className='text-sm text-gray-500'>Reakcja na dźwięk</p>
							</div>
							<div className='p-4 bg-white rounded-2xl border border-gray-100'>
								<p className='font-bold'>Strobo & kolor</p>
								<p className='text-sm text-gray-500'>Dynamiczna zmiana tempa twojej imprezy</p>
							</div>
						</div>
					</div>

					<div className='lg:col-span-7 lg:order-2 order-1'>
						<div className='aspect-video overflow-hidden rounded-[3rem] shadow-2xl rotate-1'>
							<img
								src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745'
								alt='Oświetlenie eventowe'
								className='w-full h-full object-cover'
							/>
						</div>
					</div>
				</div>

				{/* ===== FAQ SECTION - MODERN ACCORDION ===== */}
				<div className='max-w-4xl mx-auto py-20'>
					<div className='text-center mb-16'>
						<h3 className='text-4xl font-black mb-4'>Masz pytania?</h3>
						<p className='text-gray-500 uppercase tracking-widest text-sm font-bold'>
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
								className={`rounded-3xl transition-all duration-300 ${open === index ? 'bg-white shadow-xl p-8' : 'bg-transparent border border-gray-200 p-6'}`}
								onClick={() => toggle(index)}>
								<div className='flex justify-between items-center cursor-pointer'>
									<h4 className='text-xl font-bold tracking-tight'>{item.question}</h4>
									<div
										className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${open === index ? 'bg-amber-500 text-white rotate-45' : 'bg-gray-100 text-gray-900'}`}>
										<span className='text-2xl'>+</span>
									</div>
								</div>

								<div
									className={`overflow-hidden transition-all duration-300 ${open === index ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
									<p className='text-gray-600 leading-relaxed text-lg'>{item.answer}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
