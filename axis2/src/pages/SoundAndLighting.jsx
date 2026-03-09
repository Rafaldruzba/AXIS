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
								Oferujemy nagłośnienie i oświetlenie eventowe oparte na sprawdzonym zestawie 2.2 z aktywnymi
								subwooferami, kolumnami i mikserem. To rozwiązanie stworzone pod namioty eventowe, imprezy prywatne,
								osiemnastki, poprawiny i mniejsze eventy firmowe.
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
							Zapomnij o przypadkowym sprzęcie. Pracujemy na zestawie 2.2 opartym o dwie aktywne kolumny i dwa aktywne
							subwoofery, dzięki czemu system dobrze wypełnia namiot, daje czytelny wokal i bas, który naprawdę czuć.
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

			{/* SEKCJA: CO ZAWIERA NASZ ZESTAW */}
			<section className=' bg-white'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='grid lg:grid-cols-2 gap-16 items-start'>
						<div>
							<span className='text-amber-600 font-black uppercase tracking-[0.4em] text-xs mb-6 block'>
								Nasz Setup
							</span>
							<h2 className='text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-[0.95] mb-8'>
								Co dokładnie <br />
								<span className='text-amber-500'>wchodzi w skład zestawu?</span>
							</h2>
							<p className='text-gray-500 text-lg leading-relaxed font-medium mb-10 max-w-xl'>
								Pracujemy na sprawdzonym zestawie nagłośnieniowym 2.2, który dobrze odnajduje się w namiocie eventowym,
								przy imprezach prywatnych, urodzinach, osiemnastkach, poprawinach i mniejszych eventach firmowych. To
								setup nastawiony na wyraźny wokal, mocny dół i szybki montaż.
							</p>

							<div className='space-y-5'>
								<SpecRow label='Układ systemu' value='Zestaw 2.2' />
								<SpecRow label='Subwoofery' value='2 subwoofery po 500 W' />
								<SpecRow label='Nadstawki' value='2 aktywne kolumny po 1000 W' />
								<SpecRow label='Sterowanie' value='Mikser + pełne okablowanie' />
								<SpecRow label='Zastosowanie' value='Imprezy prywatne, eventy firmowe, namioty, plener' />
								<SpecRow label='Obsługa' value='Transport, rozstawienie i podstawowe strojenie systemu' />
							</div>
						</div>

						<div className='grid gap-6'>
							<div className='bg-[#fdfbf7] rounded-[2.5rem] p-8 border border-gray-100 shadow-sm'>
								<h3 className='text-2xl font-black text-gray-900 mb-4 tracking-tight'>Dla jakich wydarzeń?</h3>
								<p className='text-gray-500 leading-relaxed font-medium'>
									Ten zestaw najlepiej sprawdza się tam, gdzie potrzebujesz mocnego, czystego dźwięku bez przerostu
									formy nad treścią. To bardzo dobry wybór do namiotu eventowego, osiemnastki, urodzin, poprawin,
									imprezy integracyjnej, small wedding afterparty albo firmowego garden party.
								</p>
							</div>

							<div className='bg-[#fdfbf7] rounded-[2.5rem] p-8 border border-gray-100 shadow-sm'>
								<h3 className='text-2xl font-black text-gray-900 mb-4 tracking-tight'>Jak to brzmi w praktyce?</h3>
								<p className='text-gray-500 leading-relaxed font-medium'>
									Dzięki dwóm subwooferom system daje wyraźnie odczuwalny bas, a aktywne nadstawki dbają o czytelny
									wokal i dobrą selektywność muzyki. W praktyce oznacza to setup, który nie tylko „gra”, ale realnie
									buduje klimat imprezy i daje energię na parkiecie.
								</p>
							</div>

							<div className='bg-amber-50 rounded-[2.5rem] p-8 border border-amber-200 shadow-sm'>
								<h3 className='text-2xl font-black text-gray-900 mb-4 tracking-tight'>Co zapewniamy w cenie?</h3>
								<ul className='space-y-3 text-gray-700 font-medium leading-relaxed'>
									<li>• dowóz sprzętu na miejsce wydarzenia</li>
									<li>• rozstawienie i podłączenie zestawu</li>
									<li>• konfigurację miksera i podstawowe strojenie</li>
									<li>• sprawdzenie zasilania i bezpieczne uruchomienie</li>
									<li>• odbiór sprzętu po wydarzeniu lub według ustaleń</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SEKCJA: OŚWIETLENIE */}
			<section className='py-32 bg-[#fdfbf7]'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='grid lg:grid-cols-2 gap-16 items-start'>
						<div>
							<span className='text-amber-600 font-black uppercase tracking-[0.4em] text-xs mb-6 block'>
								Oświetlenie Eventowe
							</span>
							<h2 className='text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-[0.95] mb-8'>
								Światło, które <br />
								<span className='text-amber-500'>robi klimat od pierwszego utworu.</span>
							</h2>

							<p className='text-gray-500 text-lg leading-relaxed font-medium mb-10 max-w-xl'>
								Nasz setup oświetleniowy jest zbudowany pod imprezy taneczne, namioty eventowe, osiemnastki, urodziny,
								poprawiny i mniejsze eventy firmowe. Łączymy dynamiczne efekty, ruchome światło, laser i dym, żeby
								parkiet nie tylko grał, ale też wyglądał jak pełnoprawna realizacja.
							</p>

							<div className='space-y-5'>
								<SpecRow label='Stroboskop' value='RGB – dynamiczne błyski i podbicie energii na dropach' />
								<SpecRow label='Efekty LED' value='2 × Airship – szerokie wiązki i ruch na parkiecie' />
								<SpecRow label='Laser' value='Projektor laserowy budujący mocniejszy klimat imprezy' />
								<SpecRow label='Dym' value='Wytwornica dymu 1200 W dla lepszej widoczności efektów' />
								<SpecRow label='Ruchome światło' value='1 głowica do dynamicznego akcentowania przestrzeni' />
								<SpecRow label='Montaż' value='Całość osadzona na 2 T-barach' />
							</div>
						</div>

						<div className='grid gap-6'>
							<div className='bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm'>
								<h3 className='text-2xl font-black text-gray-900 mb-4 tracking-tight'>Jak to działa w praktyce?</h3>
								<p className='text-gray-500 leading-relaxed font-medium'>
									Airshipy budują szeroki efekt parkietowy, stroboskop dokłada energii w mocniejszych momentach, głowica
									daje ruch i punkt skupienia, a dym sprawia, że wiązki światła i laser stają się realnie widoczne.
									Dzięki temu przestrzeń wygląda znacznie mocniej niż przy samym statycznym oświetleniu LED.
								</p>
							</div>

							<div className='bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm'>
								<h3 className='text-2xl font-black text-gray-900 mb-4 tracking-tight'>Do jakich eventów?</h3>
								<p className='text-gray-500 leading-relaxed font-medium'>
									Ten zestaw najlepiej sprawdza się tam, gdzie liczy się klimat i efekt „wow” bez budowania dużej sceny.
									To bardzo dobry wybór do namiotu eventowego, afterparty, osiemnastki, urodzin, imprezy firmowej,
									poprawin i mniejszych realizacji plenerowych.
								</p>
							</div>

							<div className='bg-amber-50 rounded-[2.5rem] p-8 border border-amber-200 shadow-sm'>
								<h3 className='text-2xl font-black text-gray-900 mb-4 tracking-tight'>Co daje taki setup?</h3>
								<ul className='space-y-3 text-gray-700 font-medium leading-relaxed'>
									<li>• dynamiczny ruch światła nad parkietem</li>
									<li>• mocniejszy efekt wizualny w namiocie i ciemniejszej przestrzeni</li>
									<li>• lepszą widoczność wiązek dzięki dymowi</li>
									<li>• bardziej klubowy i nowoczesny klimat wydarzenia</li>
									<li>• spójną, kompaktową realizację opartą na 2 T-barach</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SEKCJA: DLA KOGO TEN ZESTAW */}
			<section className=' bg-[#fdfbf7]'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='text-center max-w-3xl mx-auto mb-16'>
						<span className='text-amber-600 font-black uppercase tracking-[0.4em] text-xs mb-6 block'>
							Zastosowanie
						</span>
						<h2 className='text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-6'>
							Kiedy ten zestaw <span className='text-amber-500'>sprawdza się najlepiej?</span>
						</h2>
						<p className='text-gray-500 text-lg leading-relaxed font-medium'>
							Nie wciskamy klientowi „sprzętu na wszystko”. Ten setup ma swoje idealne zastosowania i właśnie wtedy
							pokazuje pełnię możliwości.
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						<ServiceCard
							icon={<Music />}
							title='Imprezy prywatne'
							desc='Osiemnastki, urodziny, domówki premium i imprezy w namiocie. Zestaw daje energię na parkiecie i porządny bas bez przypadkowego chaosu.'
						/>
						<ServiceCard
							icon={<Mic2 />}
							title='DJ / playlista / afterparty'
							desc='System dobrze współpracuje zarówno z DJ-em, jak i z odtwarzaniem muzyki z gotowej playlisty. To bezpieczny i uniwersalny setup na różne scenariusze.'
						/>
						<ServiceCard
							icon={<Truck />}
							title='Eventy wyjazdowe'
							desc='Dzięki własnemu transportowi i możliwości pracy z agregatem możemy rozstawić zestaw także tam, gdzie dostęp do infrastruktury jest ograniczony.'
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

			{/* FAQ TECHNICZNE */}
			<section className='pb-20 bg-white'>
				<div className='max-w-5xl mx-auto px-6'>
					<div className='text-center mb-16'>
						<span className='text-amber-600 font-black uppercase tracking-[0.4em] text-xs mb-6 block'>FAQ</span>
						<h2 className='text-4xl md:text-5xl font-black text-gray-900 tracking-tighter'>
							Najczęstsze pytania techniczne
						</h2>
					</div>

					<div className='space-y-6'>
						<FaqItem
							question='Czy ten zestaw nadaje się do namiotu eventowego?'
							answer='Tak. To właśnie jedno z jego naturalnych zastosowań. System dobrze pracuje w przestrzeni namiotu i zapewnia wyraźny wokal oraz mocny dół na parkiecie.'
						/>
						<FaqItem
							question='Czy zapewniacie montaż i podłączenie sprzętu?'
							answer='Tak. Dowozimy zestaw, rozstawiamy go na miejscu, podłączamy i konfigurujemy podstawowe ustawienia tak, aby system był gotowy do pracy.'
						/>
						<FaqItem
							question='Czy dym jest potrzebny do efektów świetlnych?'
							answer='Tak, szczególnie jeśli chcesz, żeby wiązki lasera, głowicy i efektów parkietowych były wyraźnie widoczne w przestrzeni. Bez dymu światło dalej działa, ale efekt jest słabszy.'
						/>
						<FaqItem
							question='Czy oświetlenie nadaje się do namiotu eventowego?'
							answer='Tak. Właśnie w namiocie taki setup daje bardzo dobry efekt, bo światło pracuje w zamkniętej przestrzeni i mocniej buduje klimat parkietu.'
						/>
						<FaqItem
							question='Czy można wynająć samo oświetlenie bez pełnej obsługi eventu?'
							answer='Tak, w zależności od terminu i zakresu realizacji możemy przygotować również sam pakiet oświetleniowy z transportem i montażem.'
						/>
						<FaqItem
							question='Czy można wynająć sam sprzęt bez pełnej obsługi eventu?'
							answer='Tak. W zależności od terminu i zakresu realizacji oferujemy także wynajem samego sprzętu z opcją transportu oraz dodatkowego wsparcia technicznego.'
						/>
						<FaqItem
							question='Czy zestaw może działać z agregatu?'
							answer='Tak. Posiadamy własne zaplecze zasilania, dzięki czemu możemy realizować wydarzenia także w miejscach z ograniczonym dostępem do prądu.'
						/>
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
		<div className='rounded-[2rem] border border-gray-200 p-8 bg-[#fdfbf7]'>
			<h3 className='text-xl font-black text-gray-900 mb-3 tracking-tight'>{question}</h3>
			<p className='text-gray-500 leading-relaxed font-medium'>{answer}</p>
		</div>
	)
}
