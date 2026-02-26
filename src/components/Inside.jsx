import React from 'react'
import { motion } from 'framer-motion'
import {
	ArrowLeft,
	ArrowRight,
	Calendar,
	Clock,
	LayoutPanelTop,
	LogOut,
	Sparkles,
	ShieldCheck,
	Zap,
	Tent,
	MapPin,
	Wind,
} from 'lucide-react'
import partyIMG from '../img/party.png'
import Footer from './Footer'
import GalleryCarousel from './GalleryCarousel'

const Inside = ({ setScene, custom, variants, addToCart }) => {
	const pakietyWynajmu = [
		{
			id: '1noc',
			category: 'NAMIOT',
			name: '1 NOC',
			subtitle: 'Szybki Event',
			price: 1500,
			icon: <Clock size={36} />,
			color: 'blue',
		},
		{
			id: 'weekend',
			category: 'NAMIOT',
			name: 'WEEKEND',
			subtitle: 'Pełna Moc',
			price: 3800,
			icon: <Calendar size={36} />,
			color: 'purple',
		},
	]

	const opcjeDodatkowe = [
		{
			id: 'przedsionek',
			category: 'OPCJA_NAMIOT',
			name: 'Przedsionek (VIP Entrance)',
			price: 300,
			icon: <LayoutPanelTop size={18} />,
			color: 'emerald',
		},
	]

	return (
		<motion.section
			key='inside'
			custom={custom}
			variants={variants}
			initial='initial'
			animate='animate'
			exit='exit'
			className='absolute inset-0 bg-zinc-950 overflow-y-auto overflow-x-hidden custom-scrollbar'>
			{/* --- TŁO FIXED (Zostaje w tle podczas scrolla) --- */}
			<div
				className='fixed inset-0 bg-cover bg-center scale-110'
				style={{ backgroundImage: `url(${partyIMG})`, opacity: 0.4 }}
			/>
			<div className='fixed inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.1)_0%,_rgba(9,9,11,1)_90%)]' />

			{/* --- SEKCJA 1: HERO (100VH) --- */}
			<div className='relative z-10 w-full h-screen flex flex-col items-center justify-center px-4 text-center'>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-md mb-8'>
					<Sparkles size={14} className='text-blue-400' />
					<span className='text-[12px] font-black uppercase tracking-[0.4em] text-blue-300'>Konfiguracja Wnętrza</span>
				</motion.div>

				<h2 className='text-6xl md:text-9xl font-black uppercase tracking-tighter text-white leading-none mb-12'>
					SERCE{' '}
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600'>IMPREZY</span>
				</h2>

				{/* NAWIGACJA MIĘDZY SCENAMI */}
				<div className='flex items-center justify-center w-full max-w-2xl gap-6'>
					<button
						onClick={() => setScene('bar', -1)}
						className='group flex items-center gap-4 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-2xl'>
						<ArrowLeft
							size={24}
							className='text-blue-400 group-hover:text-white transition-transform group-hover:-translate-x-1'
						/>
						<span className='text-xs font-black uppercase tracking-widest text-white'>DO STREFY BAR</span>
					</button>

					<button
						onClick={() => setScene('speakers', 1)}
						className='group flex items-center gap-4 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-2xl'>
						<span className='text-xs font-black uppercase tracking-widest text-white'>DO STREFY AUDIO</span>
						<ArrowRight
							size={24}
							className='text-blue-400 group-hover:text-white transition-transform group-hover:translate-x-1'
						/>
					</button>
				</div>

				{/* WSKAŹNIK SCROLLA */}
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ repeat: Infinity, duration: 2 }}
					className='absolute bottom-10 text-gray-500 flex flex-col items-center gap-2 uppercase font-black text-[10px] tracking-[0.3em]'>
					<span>Przewiń po cennik</span>
					<div className='w-px h-12 bg-gradient-to-b from-blue-500 to-transparent' />
				</motion.div>
			</div>

			{/* --- SEKCJA 2: OFERTA I INFO (PONIŻEJ HERO) --- */}
			<div className='relative z-10 w-full flex flex-col items-center py-24 px-4 bg-zinc-950/80 backdrop-blur-sm border-t border-white/5'>
				{/* CENNIK NAMIOTÓW */}
				<div className='w-full max-w-4xl mb-20'>
					<p className='text-[16px] font-black text-blue-500 uppercase tracking-[0.5em] mb-3 text-center'>
						Dostępne Pakiety
					</p>
					<p className='text-gray-400 mb-6 text-center'>Kliknij by dodać do konfiguratora</p>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						{pakietyWynajmu.map(pakiet => (
							<motion.div
								key={pakiet.id}
								whileHover={{ y: -5 }}
								onClick={() => addToCart({ category: pakiet.category, name: pakiet.name, price: pakiet.price })}
								className='cursor-pointer p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col gap-6 hover:border-blue-500/50 transition-all'>
								<div
									className={`w-14 h-14 rounded-2xl bg-${pakiet.color}-500/20 text-${pakiet.color}-400 flex items-center justify-center`}>
									<span>{pakiet.icon}</span>
								</div>
								<div className='flex justify-between items-end'>
									<div>
										<h4 className='text-3xl font-black text-white uppercase'>{pakiet.name}</h4>
										<p className='text-xs text-gray-400 font-bold uppercase'>{pakiet.subtitle}</p>
									</div>
									<span className='text-3xl font-black text-white'>{pakiet.price} zł</span>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* DODATKI DO NAMIOTU */}
				<div className='w-full max-w-4xl mb-24'>
					<p className='text-[16px] font-black text-gray-500 uppercase tracking-[0.5em] mb-6 ml-4 text-center md:text-left'>
						Personalizacja Wnętrza
					</p>
					{opcjeDodatkowe.map(opcja => (
						<motion.div
							key={opcja.id}
							onClick={() => addToCart({ category: opcja.category, name: opcja.name, price: opcja.price })}
							className='group cursor-pointer p-6 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all'>
							<div className='flex items-center gap-6'>
								<div className='p-3 rounded-xl bg-emerald-500/20 text-emerald-400'>{opcja.icon}</div>
								<h4 className='text-xl font-bold text-white uppercase'>{opcja.name}</h4>
							</div>
							<span className='text-xl font-black text-white'>{opcja.price} zł</span>
						</motion.div>
					))}
				</div>

				{/* INFO O NAMIOCIE I TECHNIKALIA */}
				<div className='w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
					{/* GABARYTY */}
					<div className='p-8 rounded-[2rem] bg-white/5 border border-white/5 flex flex-col gap-4 backdrop-blur-sm'>
						<div className='w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center'>
							<Tent className='text-blue-400' size={28} />
						</div>
						<h5 className='font-black text-white uppercase text-sm tracking-widest'>Przestrzeń 54m²</h5>
						<p className='text-gray-400 text-[11px] leading-relaxed font-medium'>
							Imponujące wymiary 6x9m w głębokiej czerni. Wysoki sufit i brak wewnętrznych podpór dają pełną swobodę
							aranżacji dla Twoich gości.
						</p>
					</div>

					{/* TECHNOLOGIA AIR */}
					<div className='p-8 rounded-[2rem] bg-white/5 border border-white/5 flex flex-col gap-4 backdrop-blur-sm'>
						<div className='w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center'>
							<Zap className='text-purple-400' size={28} />
						</div>
						<h5 className='font-black text-white uppercase text-sm tracking-widest'>Express Setup</h5>
						<p className='text-gray-400 text-[11px] leading-relaxed font-medium'>
							Konstrukcja stałociśnieniowa. Namiot "wstaje" w 15 minut, a po odcięciu zasilania zachowuje kształt. Cicha
							praca kompresorów nie zakłóca muzyki.
						</p>
					</div>

					{/* DESIGN / POGODA */}
					<div className='p-8 rounded-[2rem] bg-white/5 border border-white/5 flex flex-col gap-4 backdrop-blur-sm'>
						<div className='w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center'>
							<ShieldCheck className='text-amber-400' size={28} />
						</div>
						<h5 className='font-black text-white uppercase text-sm tracking-widest'>All-Weather Black</h5>
						<p className='text-gray-400 text-[11px] leading-relaxed font-medium'>
							Grube, czarne poszycie techniczne. 100% wodoodporności i pełne zaciemnienie w dzień – idealne, aby Twój
							bar i oświetlenie wyglądały epicko nawet o 14:00.
						</p>
					</div>
				</div>

				<GalleryCarousel />

				{/* PRZYCISK KONTAKTU */}
				<button
					onClick={() => setScene('contact', 0)}
					className='group relative flex items-center gap-6 bg-white text-black px-16 py-7 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-[0_20px_80px_rgba(255,255,255,0.1)]'>
					<LogOut size={24} className='group-hover:rotate-12 transition-transform' />
					<span className='text-lg'>ZAREZERWUJ TERMIN</span>
				</button>
			</div>
			<Footer />
		</motion.section>
	)
}

export default Inside
