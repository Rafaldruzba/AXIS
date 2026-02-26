import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, Music, Radio, Sparkles, Volume2, Zap } from 'lucide-react'
import Footer from './Footer'

const Speakers = ({ setScene, addToCart }) => {
	const speakersVariants = {
		initial: { x: '100%', opacity: 1 }, // Wjeżdża z prawej
		animate: { x: 0, opacity: 1 },
		exit: { x: '100%', opacity: 1 }, // Wraca w prawo
	}
	const pakietyAudio = [
		{
			category: 'AUDIO',
			nazwa: 'Party Set',
			cena: 500,
			cechy: ['2x Kolumny aktywne 1000W', 'Statywy', 'Okablowanie', 'Łączność Bluetooth'],
			icon: <Volume2 className='text-purple-400' />,
		},
		{
			category: 'AUDIO',
			nazwa: 'Club Setup',
			cena: 1200,
			cechy: ['System 2.1 (2x góry + 1x Subwoofer)', 'Mikser audio', 'Mikrofon bezprzewodowy', 'Oświetlenie LED Basic'],
			icon: <Radio className='text-blue-400' />,
			rekomendowany: true,
		},
		{
			category: 'AUDIO',
			nazwa: 'Full Event',
			cena: 2500,
			cechy: ['System 2.2 (4000W mocy)', 'Realizator dźwięku', '4x LED Bar + 2x Głowy ruchome', 'Wytwornica dymu'],
			icon: <Music className='text-pink-400' />,
		},
	]

	return (
		<motion.section
			variants={speakersVariants}
			initial='initial'
			animate='animate'
			exit='exit'
			transition={{ type: 'keyframes', duration: 0.6, ease: 'circOut' }}
			className='absolute inset-0 bg-zinc-950 overflow-y-auto custom-scrollbar overflow-x-hidden'
			style={{
				backgroundImage: `url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80')`,
			}}>
			{/* --- ANIMOWANE TŁO LED (KOLOROWE KOŁA) --- */}
			<div className='fixed inset-0 pointer-events-none overflow-hidden z-0'>
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
						x: [0, 50, 0],
						y: [0, 30, 0],
						opacity: [0.2, 0.4, 0.2],
					}}
					transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
					className='absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]'
				/>
				<motion.div
					animate={{
						scale: [1.2, 1, 1.2],
						x: [0, -70, 0],
						y: [0, -40, 0],
						opacity: [0.1, 0.3, 0.1],
					}}
					transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
					className='absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px]'
				/>
				<motion.div
					animate={{
						opacity: [0, 0.5, 0],
						scale: [0.8, 1.1, 0.8],
					}}
					transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
					className='absolute top-[20%] right-[15%] w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-[100px]'
				/>
			</div>

			{/* --- HERO SECTION --- */}
			<div className='relative min-h-screen w-full flex flex-col justify-center px-6 md:px-24 py-20 z-10'>
				<div
					className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 grayscale-[0.5]'
					style={{
						backgroundImage: `url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80')`,
					}}
				/>
				<div className='absolute inset-0 bg-gradient-to-l from-black/20 via-black/80 to-black' />

				<div className='relative z-10 max-w-3xl'>
					<div className='flex items-center gap-4 mb-2'>
						<Sparkles className='text-purple-400 animate-pulse' />
						<span className='text-purple-400 font-bold tracking-[0.3em] uppercase text-sm'>Light & Sound</span>
					</div>
					<h2 className='text-7xl md:text-8xl font-black uppercase text-white tracking-tighter mb-4'>
						System Sound & <span className='text-purple-500 font-outline-2'>Vision</span>
					</h2>
					<p className='text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-[800px]'>
						Atmosfera, którą poczujesz „Zapewniamy profesjonalne nagłośnienie aktywne o wysokiej dynamice dźwięku, które
						wypełni przestrzeń namiotu czystym i głębokim brzmieniem. Nasz inteligentny system oświetlenia LED
						automatycznie synchronizuje się z rytmem muzyki, tworząc dynamiczną oprawę wizualną, która zmienia Twój
						event w profesjonalny parkiet taneczny.”
					</p>

					<button
						onClick={() => setScene('inside', -1)}
						className='flex w-fit items-center gap-3 text-lg font-bold border-2 border-purple-500/50 bg-purple-500/10 px-8 py-3 rounded-full hover:bg-purple-600 hover:text-white transition-all group'>
						<ArrowRight className='rotate-180 group-hover:translate-x-2 transition-transform' /> POWRÓT DO NAMIOTU
					</button>
				</div>
			</div>

			{/* --- CENNIK / PAKIETY --- */}
			<div className='relative z-10 bg-zinc-950/80 backdrop-blur-xl px-6 py-24 border-t border-white/5'>
				<div className='max-w-6xl mx-auto'>
					<div className='text-center mb-16'>
						<h3 className='text-4xl font-bold uppercase mb-4 tracking-tight'>Pakiety Nagłośnienia</h3>
						<p className='text-gray-400 mb-2'>Kliknij by dodać do konfiguratora</p>
						<div className='h-1.5 w-20 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full' />
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{pakietyAudio.map((pakiet, index) => (
							<div
								onClick={() => addToCart({ category: pakiet.category, name: pakiet.nazwa, price: pakiet.cena })}
								key={index}
								className={`relative p-8 rounded-3xl border ${pakiet.rekomendowany ? 'border-purple-500 bg-purple-500/5 shadow-[0_0_40px_rgba(168,85,247,0.15)]' : 'border-white/10 bg-zinc-900/50'} flex flex-col hover:scale-[1.02] transition-transform duration-300 cursor-pointer`}>
								{pakiet.rekomendowany && (
									<span className='absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-widest'>
										Best Value
									</span>
								)}
								<div className='mb-6 bg-zinc-800 w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner'>
									{pakiet.icon}
								</div>
								<h4 className='text-2xl font-bold mb-1'>{pakiet.nazwa}</h4>
								<div className='text-3xl font-black text-white mb-6 tracking-tight'>{pakiet.cena} zł</div>

								<ul className='space-y-4 mb-10 flex-grow'>
									{pakiet.cechy.map((cecha, i) => (
										<li key={i} className='flex items-start gap-3 text-sm text-gray-400 leading-snug'>
											<Check size={16} className='text-purple-500 mt-0.5 shrink-0' />
											{cecha}
										</li>
									))}
								</ul>

								<button
									onClick={() => setScene('contact')}
									className={`w-full py-4 rounded-2xl font-black uppercase text-xs tracking-widest transition-all ${
										pakiet.rekomendowany
											? 'bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-600/30'
											: 'bg-white/5 text-white hover:bg-white hover:text-black border border-white/10'
									}`}>
									Rezerwuj Sprzęt
								</button>
							</div>
						))}
					</div>
					{/* INFO O LEDACH */}
					<div className='mt-32 p-10 md:p-16 rounded-[40px] bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 relative overflow-hidden'>
						<div className='relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
							<div>
								<h3 className='text-3xl md:text-4xl font-black uppercase mb-6 leading-none'>
									Atmosfera sterowana <br /> <span className='text-purple-400 font-outline-1'>Światłem</span>
								</h3>
								<p className='text-gray-400 text-lg mb-8'>
									Nasze oświetlenie to nie tylko statyczne kolory. Używamy profesjonalnych sterowników DMX, dzięki
									którym LEDy pulsują w rytm basu, a głowy ruchome tworzą klimat prawdziwego klubu wewnątrz namiotu.
								</p>
								<div className='flex flex-wrap gap-4'>
									<span className='bg-white/5 px-4 py-2 rounded-lg text-xs font-bold border border-white/10 italic'>
										#Klimat
									</span>
									<span className='bg-white/5 px-4 py-2 rounded-lg text-xs font-bold border border-white/10 italic'>
										#Show
									</span>
									<span className='bg-white/5 px-4 py-2 rounded-lg text-xs font-bold border border-white/10 italic'>
										#PartyLife
									</span>
								</div>
							</div>
							<div className='grid grid-cols-2 gap-4'>
								<div className='h-48 rounded-2xl bg-zinc-800 overflow-hidden border border-white/10'>
									<img
										src='https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80'
										className='w-full h-full object-cover opacity-70 hover:opacity-100 transition'
										alt='Lights'
									/>
								</div>
								<div className='h-48 rounded-2xl bg-zinc-800 overflow-hidden mt-8 border border-white/10'>
									<img
										src='https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80'
										className='w-full h-full object-cover opacity-70 hover:opacity-100 transition'
										alt='Crowd'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Dekoracyjny element "basowy" - pulsujący okrąg w tle */}
			<motion.div
				animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
				transition={{ duration: 2, repeat: Infinity }}
				className='absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]'
			/>
			<Footer />
		</motion.section>
	)
}

export default Speakers
