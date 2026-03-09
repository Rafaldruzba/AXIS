import { Link } from 'react-router-dom'
import { Users, Briefcase, GlassWater, Layout } from 'lucide-react'

export default function CompanyEvents() {
	return (
		<div className='bg-[#fdfbf7] min-h-screen'>
			{/* HERO SECTION */}
			<section className='pt-40 pb-20 px-6'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div>
							<span className='text-amber-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block'>
								Business & Integration
							</span>
							<h1 className='text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none mb-8'>
								Kameralne <br />
								<span className='text-amber-500'>Eventy Firmowe.</span>
							</h1>
							<p className='text-gray-500 text-xl leading-relaxed mb-10 font-medium'>
								Skupiamy się na kameralnych i średnich eventach firmowych do około 50 osób, gdzie liczy się estetyka,
								wygodna przestrzeń i dopracowana oprawa techniczna.
							</p>
							<Link
								to='/kontakt'
								className='inline-block bg-gray-900 text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-amber-500 hover:text-gray-900 transition-all shadow-xl'>
								Zapytaj o ofertę dla firm
							</Link>
						</div>
						<div className='relative'>
							<div className='aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white bg-gray-100'>
								<img
									src='https://images.unsplash.com/photo-1528605248644-14dd0d812396?auto=format&fit=crop&q=80'
									alt='Event firmowy Axis'
									className='w-full h-full object-cover'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* DLA JAKICH EVENTÓW */}
			<section className='py-10 bg-[#fdfbf7]'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='text-center max-w-3xl mx-auto mb-16'>
						<span className='text-amber-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block'>
							Zastosowanie
						</span>
						<h2 className='text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-6'>
							Jakie wydarzenia <span className='text-amber-500'>obsługujemy?</span>
						</h2>
						<p className='text-gray-500 text-lg font-medium leading-relaxed'>
							Nasza oferta jest skrojona pod mniejsze i średnie realizacje firmowe, gdzie liczy się klimat, sprawna
							logistyka i estetyczna oprawa bez budowania dużej sceny.
						</p>
					</div>

					<div className='grid md:grid-cols-2 xl:grid-cols-4 gap-8'>
						<BusinessCard
							icon={<Users size={26} />}
							title='Integracje zespołowe'
							desc='Luźne spotkania dla pracowników, które łączą strefę chill, bar i przestrzeń do rozmów.'
						/>
						<BusinessCard
							icon={<Briefcase size={26} />}
							title='Spotkania biznesowe'
							desc='Kameralne wydarzenia z estetycznym zapleczem, które robi dobre wrażenie na klientach i partnerach.'
						/>
						<BusinessCard
							icon={<Layout size={26} />}
							title='Eventy plenerowe'
							desc='Namiot, nagłośnienie i oświetlenie w miejscach, gdzie klasyczna infrastruktura jest ograniczona.'
						/>
						<BusinessCard
							icon={<GlassWater size={26} />}
							title='Jubileusze i podziękowania'
							desc='Wydarzenia dla zespołu, klientów lub kontrahentów w bardziej swobodnym, ale nadal dopracowanym formacie.'
						/>
					</div>
				</div>
			</section>

			{/* KONKRETNE ROZWIĄZANIA */}
			<section className='py-32 bg-white rounded-[4rem] shadow-sm'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='text-center mb-20'>
						<h2 className='text-4xl font-black tracking-tighter text-gray-900'>Rozwiązania dla Twojego zespołu</h2>
						<p className='text-gray-500 mt-4'>
							Zamieniamy nudne spotkania firmowe w widowiskowe wydarzenia z pełnym zapleczem technicznym.
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-12'>
						{/* Bar Firmowy */}
						<div className='p-12 rounded-[3rem] bg-[#fdfbf7] border border-gray-100 hover:shadow-xl transition-all'>
							<div className='w-14 h-14 rounded-2xl bg-amber-500 text-gray-900 flex items-center justify-center mb-8'>
								<GlassWater size={28} />
							</div>
							<h3 className='text-2xl font-black mb-4'>Mobilny Bar Premium</h3>
							<p className='text-gray-500 leading-relaxed font-medium mb-6'>
								Zapomnij o nudnych integracjach. Nasz bar to centrum dowodzenia każdą imprezą – od
								<strong> firmowych grilli po jubileusze</strong>. Serwujemy profesjonalne koktajle w oprawie, która
								buduje prestiż Twojego wydarzenia i rozkręca każdą rozmowę.
							</p>
							<p className='text-sm text-amber-600 font-black uppercase tracking-widest'>Pełny Serwis Barmański</p>
						</div>

						{/* Namiot Integracyjny */}
						<div className='p-12 rounded-[3rem] bg-[#fdfbf7] border border-gray-100 hover:shadow-xl transition-all'>
							<div className='w-14 h-14 rounded-2xl bg-gray-900 text-amber-500 flex items-center justify-center mb-8'>
								<Layout size={28} />
							</div>
							<h3 className='text-2xl font-black mb-4'>Twoja Baza w Plenerze</h3>
							<p className='text-gray-500 leading-relaxed font-medium mb-6'>
								Namiot o wymiarach <strong>9x6m</strong> to idealne miejsce dla ekipy
								<strong> do 50 osób</strong>. W dzień komfortowa strefa chillout, w nocy – dzięki naszemu audio 2.2 –
								prywatny klub, gdziekolwiek go postawimy. Czysto, stylowo i bez kompromisów.
							</p>
							<p className='text-sm text-amber-600 font-black uppercase tracking-widest'>Namiot + Audio + Światło</p>
						</div>
					</div>
				</div>
			</section>

			{/* ZAKRES REALIZACJI */}
			<section className='pt-10 pb-20 bg-white'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='grid lg:grid-cols-2 gap-16 items-start'>
						<div>
							<span className='text-amber-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block'>
								Zakres Realizacji
							</span>
							<h2 className='text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-[0.95] mb-8'>
								Co dokładnie <br />
								<span className='text-amber-500'>możemy zapewnić?</span>
							</h2>

							<p className='text-gray-500 text-lg leading-relaxed font-medium mb-10 max-w-xl'>
								Realizujemy wydarzenia w formule elastycznej: od pojedynczych elementów po spójną oprawę
								techniczno-eventową dopasowaną do miejsca, liczby uczestników i charakteru spotkania.
							</p>

							<div className='space-y-5'>
								<SpecRow label='Namiot eventowy' value='Przestrzeń 9x6 m jako strefa spotkania, baru lub chilloutu' />
								<SpecRow label='Nagłośnienie' value='Zestaw 2.2 z aktywnymi kolumnami, subwooferami i mikserem' />
								<SpecRow label='Oświetlenie' value='Dynamiczne światło, efekty parkietowe, laser, głowica i dym' />
								<SpecRow label='Bar mobilny' value='Obsługa w formule premium lub bezalkoholowej, zależnie od eventu' />
								<SpecRow label='Zasilanie' value='Możliwość pracy z własnym agregatem w trudniejszych lokalizacjach' />
								<SpecRow label='Logistyka' value='Transport, montaż, uruchomienie i odbiór po wydarzeniu' />
							</div>
						</div>

						<div className='grid gap-6'>
							<div className='bg-[#fdfbf7] rounded-[2.5rem] p-8 border border-gray-100 shadow-sm'>
								<h3 className='text-2xl font-black text-gray-900 mb-4 tracking-tight'>Dlaczego to działa w firmach?</h3>
								<p className='text-gray-500 leading-relaxed font-medium'>
									Bo nie budujemy przesadnie dużej produkcji, tylko estetyczną i funkcjonalną przestrzeń, w której
									ludzie chcą zostać dłużej. To dobre rozwiązanie dla firm, które chcą zrobić coś jakościowego bez
									ciężkiej, scenicznej formy.
								</p>
							</div>

							<div className='bg-[#fdfbf7] rounded-[2.5rem] p-8 border border-gray-100 shadow-sm'>
								<h3 className='text-2xl font-black text-gray-900 mb-4 tracking-tight'>Dla jakiej skali wydarzeń?</h3>
								<p className='text-gray-500 leading-relaxed font-medium'>
									Najlepiej odnajdujemy się w realizacjach kameralnych i średnich — tam, gdzie ważna jest jakość
									kontaktu, estetyka przestrzeni i dopracowany klimat. To naturalny wybór dla spotkań do około 50 osób.
								</p>
							</div>

							<div className='bg-amber-50 rounded-[2.5rem] p-8 border border-amber-200 shadow-sm'>
								<h3 className='text-2xl font-black text-gray-900 mb-4 tracking-tight'>Korzyści dla organizatora</h3>
								<ul className='space-y-3 text-gray-700 font-medium leading-relaxed'>
									<li>• jedna spójna realizacja zamiast kilku podwykonawców</li>
									<li>• estetyczna przestrzeń gotowa na integrację i networking</li>
									<li>• techniczne zaplecze bez improwizacji na miejscu</li>
									<li>• łatwiejsza organizacja i mniej rzeczy do koordynowania</li>
									<li>• nowoczesna forma zamiast „kolejnego spotkania przy stołach”</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SEO & CONTENT SECTION */}
			<section className='pb-32 pt-10 bg-[#fdfbf7]'>
				<div className='max-w-4xl mx-auto px-6'>
					<div className='space-y-12 text-center md:text-left'>
						<div>
							<h4 className='text-2xl font-black mb-4 tracking-tight'>Impreza, która nie jest tylko kolejnym mailem</h4>
							<p className='text-gray-500 leading-relaxed'>
								Najlepsze pomysły rodzą się w swobodnej atmosferze. Zamiast siedzenia przy stołach, oferujemy dynamiczną
								przestrzeń z profesjonalnym barem, która naturalnie zachęca do rozmów. Nasze rozwiązania techniczne to
								nie tylko sprzęt – to narzędzie do budowania zgranego zespołu w nowoczesnym, luźnym stylu.
							</p>
						</div>
						<div>
							<h4 className='text-2xl font-black mb-4 tracking-tight'>Integracja zespołowa do 50 osób</h4>
							<p className='text-gray-500 leading-relaxed'>
								Specjalizujemy się w obsłudze <strong>kameralnych spotkań biznesowych</strong>. Jeśli planujesz{' '}
								<strong>wyjazd integracyjny</strong>, szkolenie w plenerze lub po prostu chcesz podziękować pracownikom
								za udany kwartał, nasze rozwiązania techniczne zapewnią odpowiedni klimat. Namiot o powierzchni 54m²
								zapewnia idealny balans między przestrzenią a przytulną atmosferą.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className='pb-32 bg-[#fdfbf7]'>
				<div className='max-w-5xl mx-auto px-6'>
					<div className='text-center mb-16'>
						<span className='text-amber-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block'>FAQ</span>
						<h2 className='text-4xl md:text-5xl font-black text-gray-900 tracking-tighter'>Najczęstsze pytania firm</h2>
					</div>

					<div className='space-y-6'>
						<FaqItem
							question='Czy obsługujecie wydarzenia firmowe poza miastem?'
							answer='Tak. Realizujemy eventy także w plenerze i lokalizacjach oddalonych od większej infrastruktury, o ile warunki do montażu są odpowiednie.'
						/>
						<FaqItem
							question='Czy można zamówić tylko namiot albo tylko bar?'
							answer='Tak. Zakres realizacji może obejmować pojedynczy element albo pełny pakiet — wszystko zależy od potrzeb wydarzenia.'
						/>
						<FaqItem
							question='Czy zapewniacie zasilanie?'
							answer='Tak. W razie potrzeby możemy pracować również z własnym zapleczem zasilania, co ułatwia realizacje w mniej oczywistych lokalizacjach.'
						/>
						<FaqItem
							question='Czy to oferta dla dużych eventów korporacyjnych?'
							answer='Nie celujemy w wielkie produkcje sceniczne. Najmocniej działamy przy kameralnych i średnich wydarzeniach firmowych, gdzie liczy się atmosfera, estetyka i sprawna organizacja.'
						/>
					</div>
				</div>
			</section>
		</div>
	)
}

function BusinessCard({ icon, title, desc }) {
	return (
		<div className='bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all'>
			<div className='w-12 h-12 rounded-2xl bg-amber-500 text-gray-900 flex items-center justify-center mb-6'>
				{icon}
			</div>
			<h3 className='text-2xl font-black text-gray-900 mb-4 tracking-tight'>{title}</h3>
			<p className='text-gray-500 text-sm leading-relaxed font-medium'>{desc}</p>
		</div>
	)
}

function SpecRow({ label, value }) {
	return (
		<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-4 border-b border-gray-200'>
			<span className='text-[11px] font-black uppercase tracking-widest text-gray-400'>{label}</span>
			<span className='text-gray-900 font-bold text-base md:text-right'>{value}</span>
		</div>
	)
}

function FaqItem({ question, answer }) {
	return (
		<div className='rounded-[2rem] border border-gray-200 p-8 bg-white'>
			<h3 className='text-xl font-black text-gray-900 mb-3 tracking-tight'>{question}</h3>
			<p className='text-gray-500 leading-relaxed font-medium'>{answer}</p>
		</div>
	)
}
