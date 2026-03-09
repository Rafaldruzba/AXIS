import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
	Tent as TentIcon,
	Wind,
	Zap,
	Clock,
	Star,
	ArrowRight,
	Maximize,
	ShieldCheck,
	Thermometer,
	Droplets,
	Info,
	ArrowDown,
	Maximize2,
	Users,
	Music,
	GlassWater,
	Briefcase,
	PartyPopper,
	Volume2,
	Lightbulb,
	Radio,
	Sparkles,
	Minus,
	Plus,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import VisualVibe from '../components/VisualVibe'

export default function Tent() {
	const [activeIndex, setActiveIndex] = useState(null)
	const addToCart = () => {
		const item = {
			id: 'dmuchany-namiot-premium',
			name: 'Dmuchany Namiot Eventowy Premium',
			price: 'Wycena ind.',
			image: '/tent.jpg',
		}
		const currentCart = JSON.parse(localStorage.getItem('axis_cart') || '[]')
		localStorage.setItem('axis_cart', JSON.stringify([...currentCart, item]))
		window.location.href = '/kontakt'
	}

	const specs = [
		{ label: 'Przestrzeń', value: '54m²', sub: '9m x 6m podstawy', icon: <Maximize2 size={24} /> },
		{ label: 'Wysokość', value: '4m', sub: 'Imponująca kubatura', icon: <Zap size={24} /> },
		{ label: 'Pojemność', value: '50 osób', sub: 'Strefa party / chillout', icon: <Users size={24} /> },
		{ label: 'Montaż', value: '45 min', sub: 'Ekspresowy setup', icon: <Clock size={24} /> },
	]

	const types = [
		{
			title: 'Mobilny Klub',
			tag: 'Przenośna Dyskoteka',
			desc: 'Własny klub tam, gdzie chcesz. System nagłośnienia i oświetlenie klubowe zamieniają namiot w epicką arenę imprezową.',
			icon: <Music className='text-amber-500' size={32} />,
			seo: 'Dmuchany klub na wynajem',
		},
		{
			title: 'Kawalerskie Premium',
			tag: 'VIP Party Zone',
			desc: 'Namiot jako prywatny, odizolowany lounge. Idealny na wieczory kawalerskie, które wymagają unikalnej oprawy i prywatności.',
			icon: <GlassWater className='text-amber-500' size={32} />,
			seo: 'Atrakcja na wieczór kawalerski',
		},
		{
			title: 'Eventy Firmowe',
			tag: 'Corporate Chillout',
			desc: 'Strefa integracyjna, barowa lub DJ Booth. Wyróżnij swoją firmę na tle nudnych białych hal namiotowych.',
			icon: <Briefcase className='text-amber-500' size={32} />,
			seo: 'Nowoczesne namioty eventowe',
		},
		{
			title: 'Prywatne Urodziny',
			tag: 'Garden Party 2.0',
			desc: 'Domówka, o której będzie mówić całe miasto. Przenośny klub na ogrodzie to gwarancja efektu WOW u gości.',
			icon: <PartyPopper className='text-amber-500' size={32} />,
			seo: 'Dmuchany namiot imprezowy cena',
		},
	]

	const faqs = [
		{
			q: 'Jakie są wymagania techniczne do rozstawienia mobilnego klubu?',
			a: 'Potrzebujemy jedynie płaskiego terenu o wymiarach min. 11x11m oraz dostępu do standardowego gniazdka 230V. Namiot możemy rozstawić na trawie (kotwienie śledziami) lub betonie/kostce (obciążniki wodne/betonowe).',
		},
		{
			q: 'Czy dmuchany namiot jest bezpieczny przy silnym wietrze?',
			a: 'Absolutnie. Konstrukcja wykonana jest z wzmocnionego PVC Premium i posiada system wielopunktowych odciągów. Gwarantujemy pełną stabilność przy wietrze do 15 m/s (ok. 55 km/h). Przy ekstremalnych warunkach pogodowych monitorujemy sytuację na bieżąco.',
		},
		{
			q: 'Co z hałasem dmuchawy? Czy będzie słychać muzykę?',
			a: "Używamy nowoczesnych dmuchaw typu 'Silent-Mode'. Po zamknięciu namiotu i włączeniu nagłośnienia, praca silników jest praktycznie niesłyszalna dla gości wewnątrz, co pozwala na komfortową zabawę i rozmowy.",
		},
		{
			q: 'Ile czasu trwa montaż i kiedy przyjeżdżacie?',
			a: 'Sam montaż konstrukcji trwa ok. 45 minut. Z pełnym uzbrojeniem w światło i dźwięk potrzebujemy ok. 2 godzin. Zazwyczaj pojawiamy się na miejscu 3-4 godziny przed startem Twojego eventu.',
		},
		{
			q: 'Czy w namiocie można palić lub używać wytwornic dymu?',
			a: 'Wewnątrz obowiązuje całkowity zakaz palenia tytoniu ze względu na bezpieczeństwo poszycia. Natomiast profesjonalne wytwornice dymu (haze/fog) są jak najbardziej wskazane – genialnie podkreślają nasze oświetlenie laserowe i LED.',
		},
		{
			q: 'Czy namiot chroni przed zimnem w nocy?',
			a: 'Grube poszycie PVC świetnie izoluje termicznie. W chłodniejsze dni oferujemy wynajem profesjonalnych nagrzewnic olejowych lub elektrycznych, które w kilka minut nagrzewają wnętrze do temperatury pokojowej.',
		},
	]

	const features = [
		{ title: 'Audio System', desc: 'Nagłośnienie dopasowane do akustyki kopuły.', icon: <Volume2 /> },
		{ title: 'Smart Light', desc: 'Inteligentne oświetlenie LED RGB.', icon: <Lightbulb /> },
		{ title: 'Full Setup', desc: 'Dostawa, montaż i demontaż w cenie wynajmu.', icon: <Radio /> },
		{ title: 'Vibe Control', desc: 'Możliwość wynajęcia z osobnym DJ-em lub naszym barmanem.', icon: <Sparkles /> },
	]

	return (
		<div className='bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-amber-500 selection:text-black'>
			{/* HERO SECTION - Zoptymalizowany pod SEO (H1) */}
			<section className='relative h-[90vh] flex items-center justify-center overflow-hidden'>
				{/* Background Image z lepszym przyciemnieniem i głębią */}
				<motion.div
					initial={{ scale: 1.15 }}
					animate={{ scale: 1 }}
					transition={{ duration: 2, ease: 'easeOut' }}
					className="absolute inset-0 bg-[url('https://cdn.discordapp.com/attachments/783276489834496051/1480618010019627078/image.png?ex=69b0547a&is=69af02fa&hm=1dd34a293c92d94393394f93cd3d2358de492d90034b3002442bc8944e6317c3&')] bg-cover bg-center brightness-[0.4] contrast-[1.1]"
				/>

				{/* Overlay gradientowy dla lepszej czytelności tekstu */}
				<div className='absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50'></div>

				<div className='relative z-10 max-w-6xl px-6 text-center'>
					{/* SEO-friendly Badge */}
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						className='inline-block mb-6 px-4 py-1 border border-amber-500/30 bg-amber-500/10 rounded-full'>
						<span className='text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs'>
							Mobilny Klub & Eventy Premium 2026
						</span>
					</motion.div>

					{/* Main H1 - Agregator SEO */}
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className='text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] uppercase mb-8'>
						Dmuchany <br />
						<span className='text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-orange-700'>
							Klub Imprezowy
						</span>
					</motion.h1>

					{/* Opis nasycony słowami kluczowymi pod wyszukiwarki */}
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
						className='text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed'>
						Najnowocześniejszy <strong>dmuchany namiot imprezowy</strong> w Polsce. Twój własny{' '}
						<strong>przenośny klub</strong> na <strong>wieczory kawalerskie</strong>, urodziny i eventy firmowe.
						Rozstawiamy imprezę tam, gdzie inni nie mogą.
					</motion.p>

					{/* Sub-text dla SEO (Lokalizacje i zastosowania) */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6 }}
						className='mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500'>
						<span>#DmuchanyNamiot</span>
						<span>#Kawalerski</span>
						<span>#PANIEŃSKI</span>
						<span>#MobilnaDyskoteka</span>
						<span>#EventSpace</span>
					</motion.div>
				</div>

				{/* Scroll Indicator */}
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ repeat: Infinity, duration: 2 }}
					className='absolute bottom-10 left-1/2 -translate-x-1/2 text-amber-500/50'>
					<ArrowDown size={30} />
				</motion.div>
			</section>

			{/* PARAMETRY TECHNICZNE (Specyfikacja) */}
			<section className='max-w-7xl mx-auto px-6 py-32'>
				<div className='grid lg:grid-cols-12 gap-12'>
					{/* Lewa kolumna: Nagłówek i certyfikaty */}
					<div className='lg:col-span-4 flex flex-col justify-center'>
						<motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
							<h2 className='text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-8'>
								Potęga <br />
								<span className='text-amber-500'>Inżynierii</span>
							</h2>
							<p className='text-xl text-gray-400 font-light leading-relaxed mb-10 border-l-2 border-amber-500 pl-6'>
								Nasze konstrukcje to nie tylko design. To atestowane bezpieczeństwo i technologie, które wytrzymają
								każdą imprezę.
							</p>

							<div className='flex flex-wrap gap-3'>
								<div className='flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10'>
									<ShieldCheck className='text-amber-500' size={20} />
									<span className='text-[10px] font-black uppercase tracking-widest'>Atest ITB & Trudnopalność</span>
								</div>
								<div className='flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10'>
									<Droplets className='text-amber-500' size={20} />
									<span className='text-[10px] font-black uppercase tracking-widest'>100% Waterproof</span>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Prawa kolumna: Bento Grid z parametrami */}
					<div className='lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
						{specs.map((spec, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.1 }}
								viewport={{ once: true }}
								className='group bg-neutral-900/40 border border-white/5 p-8 rounded-[2.5rem] hover:border-amber-500/50 transition-all duration-500'>
								<div className='flex justify-between items-start mb-12'>
									<div className='p-4 bg-amber-500/10 rounded-2xl text-amber-500 group-hover:scale-110 transition-transform'>
										{spec.icon}
									</div>
									<span className='text-[10px] font-black text-gray-600 uppercase tracking-[0.3em]'>Spec-0{i + 1}</span>
								</div>
								<div>
									<h3 className='text-gray-500 uppercase text-xs font-black tracking-widest mb-2'>{spec.label}</h3>
									<div className='flex items-baseline gap-2'>
										<span className='text-4xl md:text-5xl font-black text-white'>{spec.value}</span>
									</div>
									<p className='text-gray-600 text-sm mt-2 font-medium'>{spec.sub}</p>
								</div>
							</motion.div>
						))}

						{/* Długi boks na dole dla dodatkowych info (Zasilanie/Materiał) */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							className='md:col-span-2 bg-gradient-to-r from-amber-500 to-orange-700 p-[1px] rounded-[2.5rem]'>
							<div className='bg-[#0a0a0a] rounded-[2.4rem] p-8 flex flex-col md:flex-row justify-between items-center gap-6'>
								<div className='text-center md:text-left'>
									<p className='text-[10px] font-black uppercase tracking-[0.4em] text-amber-500 mb-2'>
										Systemy i Zasilanie
									</p>
									<p className='text-white font-bold'>Stałe 230V + Poszycie PVC Premium UV-Resistant</p>
								</div>
								<div className='h-px md:h-12 w-full md:w-px bg-white/10'></div>
								<div className='text-center md:text-right text-gray-400 text-sm max-w-xs'>
									Dmuchawa silent-mode pozwala na swobodną komunikację wewnątrz klubu.
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* SEO TEXT SECTION - Gęsta treść pod Google */}
			<section className='bg-[#050505] py-32 px-6'>
				<div className='max-w-7xl mx-auto'>
					<div className='mb-20'>
						<motion.span
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							className='text-amber-500 font-black uppercase tracking-[0.4em] text-xs block mb-4'>
							#ImprezaBezGranic
						</motion.span>
						<h2 className='text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none'>
							JEDNA PRZESTRZEŃ. <br />
							<span className='text-gray-700 italic'>TYSIĄC SCENARIUSZY.</span>
						</h2>
					</div>

					<div className='grid md:grid-cols-2 gap-6'>
						{types.map((item, i) => (
							<motion.div
								key={i}
								whileHover={{ y: -10 }}
								className='group relative bg-neutral-900/20 border border-white/5 p-10 rounded-[3rem] overflow-hidden'>
								{/* SEO Hidden Helper - dla robotów Google */}
								<span className='sr-only'>{item.seo}</span>

								<div className='flex justify-between items-start mb-8'>
									<div className='p-5 bg-black rounded-3xl border border-white/5'>{item.icon}</div>
									<span className='text-[10px] font-black uppercase tracking-widest text-gray-600 bg-white/5 px-4 py-2 rounded-full'>
										{item.tag}
									</span>
								</div>

								<h3 className='text-3xl font-black uppercase mb-4 text-white group-hover:text-amber-500 transition-colors'>
									{item.title}
								</h3>
								<p className='text-gray-500 text-lg font-light leading-relaxed max-w-md italic'>"{item.desc}"</p>

								{/* Efekt poświaty w rogu */}
								<div className='absolute -bottom-10 -right-10 w-32 h-32 bg-amber-500/5 blur-[50px] group-hover:bg-amber-500/20 transition-all duration-500'></div>
							</motion.div>
						))}
					</div>
					<div className='mt-24 pt-12 border-t border-white/5 opacity-40 text-[11px] uppercase tracking-widest leading-loose text-center max-w-4xl mx-auto'>
						Dominujemy rynek eventowy, dostarczając <strong>mobilny klub</strong> i{' '}
						<strong>dmuchany namiot imprezowy</strong> do miast takich jak{' '}
						<strong>Warszawa, Poznań, Wrocław, Gdańsk, Kraków czy Łódź</strong>. Nasz <strong>klubowy namiot</strong> to
						bezkonkurencyjna opcja na <strong>wieczory kawalerskie</strong> i eventy firmowe, gdzie liczy się design i
						brak kompromisów. Zapomnij o starych halach namiotowych – postaw na <strong>przenośny klub</strong> od Axis
						Events.
					</div>
				</div>
			</section>

			<VisualVibe />

			<section className='max-w-7xl mx-auto px-6 py-32 border-t border-white/5'>
				<div className='flex flex-col md:flex-row justify-between items-center gap-12'>
					<div className='max-w-md text-center md:text-left'>
						<h2 className='text-4xl font-black uppercase tracking-tighter mb-6'>
							Nie wynajmujesz namiotu. <br />
							<span className='text-amber-500 font-black'>WYNAJMUJESZ EVENT.</span>
						</h2>
						<p className='text-gray-500 font-light italic leading-relaxed'>
							Zapewniamy pełne wsparcie techniczne. Ty dajesz lokalizację i gości – my zajmujemy się resztą.
						</p>
					</div>

					<div className='grid grid-cols-2 gap-4 w-full md:w-auto'>
						{features.map((f, i) => (
							<motion.div
								key={i}
								whileHover={{ scale: 1.05 }}
								className='bg-neutral-900/50 p-6 rounded-[2rem] border border-white/5 flex flex-col items-center md:items-start text-center md:text-left'>
								<div className='text-amber-500 mb-4 p-3 bg-black rounded-2xl'>{f.icon}</div>
								<h3 className='text-xs font-black uppercase tracking-widest text-white mb-2'>{f.title}</h3>
								<p className='text-[10px] text-gray-500 uppercase leading-relaxed'>{f.desc}</p>
							</motion.div>
						))}
					</div>
				</div>

				{/* Wizualny smaczek: Cyfry / Statystyki */}
				<div className='mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-white/5'>
					{[
						{ val: '100%', label: 'Wodoodporność' },
						{ val: '45min', label: 'Czas rozstawienia' },
						{ val: '24/7', label: 'Wsparcie techniczne' },
						{ val: 'VIP', label: 'Standard obsługi' },
					].map((stat, i) => (
						<div key={i} className='text-center'>
							<div className='text-3xl md:text-5xl font-black text-white mb-2'>{stat.val}</div>
							<div className='text-[10px] font-bold uppercase tracking-[0.3em] text-amber-500'>{stat.label}</div>
						</div>
					))}
				</div>
			</section>

			{/* FAQ SECTION - Bardzo ważne dla SEO */}
			<section className='max-w-4xl mx-auto px-6 py-32'>
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className='text-center mb-20'>
					<h2 className='text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4'>
						Masz <span className='text-amber-500 font-black italic'>Pytania?</span>
					</h2>
					<p className='text-gray-500 uppercase tracking-[0.3em] text-[10px] font-bold'>
						Sprawdź szczegóły techniczne i organizacyjne
					</p>
				</motion.div>

				<div className='space-y-4'>
					{faqs.map((faq, i) => (
						<motion.div key={i} className='border-b border-white/5 overflow-hidden'>
							<button
								onClick={() => setActiveIndex(activeIndex === i ? null : i)}
								className='w-full py-8 flex justify-between items-center text-left hover:text-amber-500 transition-colors group'>
								<span className='text-lg md:text-xl font-bold uppercase tracking-tight pr-8 flex items-center gap-4'>
									<span className='text-amber-500/30 text-xs font-black'>0{i + 1}</span>
									{faq.q}
								</span>
								<div className='shrink-0 p-2 rounded-full bg-white/5 group-hover:bg-amber-500 transition-all'>
									{activeIndex === i ? (
										<Minus size={20} className='text-black' />
									) : (
										<Plus size={20} className='text-white' />
									)}
								</div>
							</button>

							<AnimatePresence>
								{activeIndex === i && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3, ease: 'easeInOut' }}>
										<p className='pb-8 text-gray-400 leading-relaxed font-light text-lg border-l-2 border-amber-500 pl-6 ml-1'>
											{faq.a}
										</p>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>

				{/* SEO Note pod FAQ */}
				<div className='mt-16 text-center text-[10px] text-gray-700 uppercase tracking-widest'>
					Nie znalazłeś odpowiedzi? Skontaktuj się z nami bezpośrednio w sprawie{' '}
					<strong>wynajmu dmuchanego klubu</strong>{' '}
					<Link to='/kontakt' className='text-amber-500 font-bold underline'>
						TUTAJ
					</Link>
				</div>
			</section>

			{/* CTA SECTION */}
			<section className='py-40 px-6 relative overflow-hidden text-center'>
				{/* Tło z efektem poświaty - dodaje głębi */}
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full -z-10'></div>

				<div className='relative z-10 max-w-5xl mx-auto'>
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
						<span className='inline-flex items-center gap-2 text-amber-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 border border-amber-500/20 px-4 py-2 rounded-full bg-amber-500/5'>
							<Sparkles size={12} /> Rezerwacje na sezon 2026 otwarte
						</span>

						<h2 className='text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-12 uppercase leading-[0.85]'>
							STWÓRZMY <br />
							<span className=' text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 underline decoration-amber-500 decoration-4 underline-offset-[15px]'>
								HISTORIĘ
							</span>
						</h2>

						<div className='relative inline-block group'>
							{/* Pulsujący efekt pod przyciskiem */}
							<div className='absolute inset-0 bg-amber-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full'></div>

							<button
								onClick={addToCart}
								className='relative inline-flex items-center gap-6 bg-white text-black px-10 md:px-16 py-6 md:py-8 rounded-full font-black uppercase tracking-widest text-sm md:text-lg hover:bg-amber-500 hover:scale-105 transition-all duration-300 shadow-2xl'>
								REZERWUJ TERMIN <ArrowRight size={24} className='group-hover:translate-x-2 transition-transform' />
							</button>
						</div>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.5 }}
							className='mt-16 flex flex-col md:flex-row items-center justify-center gap-8 border-t border-white/5 pt-12'>
							<div className='flex flex-col gap-1'>
								<span className='text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]'>Dostępność</span>
								<span className='text-white text-xs font-bold uppercase'>
									Cała Polska (Warszawa, Poznań, Wrocław, Gdańsk)
								</span>
							</div>
							<div className='hidden md:block w-px h-8 bg-white/10'></div>
							<div className='flex flex-col gap-1'>
								<span className='text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]'>Gwarancja</span>
								<span className='text-white text-xs font-bold uppercase'>Sprzęt atestowany & Technika Live</span>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</div>
	)
}
