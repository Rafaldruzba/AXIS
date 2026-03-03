import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Star, Users, MapPin, Calendar, ArrowDown } from 'lucide-react'
import Footer from './Footer'

const Landing = ({ setScene, variants }) => {
	return (
		<motion.section
			key='landing'
			custom={0}
			variants={variants}
			initial='initial'
			animate='animate'
			exit='exit'
			className='absolute inset-0 bg-zinc-950 overflow-y-auto overflow-x-hidden custom-scrollbar scroll-smooth'>
			{/* --- SEKCJA HERO --- */}
			<div className='relative h-screen w-full flex flex-col items-center justify-center text-center px-4'>
				{/* Tło z efektem lekkiego przyciemnienia */}
				<div
					className='absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105'
					style={{
						backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')`,
					}}
				/>
				<div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-zinc-950' />

				<div className='relative z-10'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className='flex items-center justify-center gap-3 mb-6 mx-auto w-fit px-6 py-2 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]'>
						<Star className='text-blue-500 fill-blue-500 animate-pulse' size={16} />

						<span className='uppercase tracking-[0.4em] text-[10px] md:text-xs font-black text-blue-400'>
							Premium Event Experience
						</span>

						<Star className='text-blue-500 fill-blue-500 animate-pulse' size={16} />
					</motion.div>

					<h1 className='text-6xl md:text-9xl font-black mb-8 uppercase tracking-tighter text-white'>
						AXIS.<span className='text-blue-600 text-7xl'>events</span>
					</h1>

					<button
						onClick={() => setScene('inside', 0)}
						className='group relative bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-full text-2xl font-black transition-all hover:scale-105 shadow-[0_0_40px_rgba(37,99,235,0.4)] overflow-hidden cursor-pointer'>
						<span className='relative z-10'>WEJDŹ DO ŚRODKA</span>
						<div className='absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300' />
					</button>
				</div>

				{/* Podpowiedź scrollowania */}
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ repeat: Infinity, duration: 2 }}
					className='absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 flex flex-col items-center gap-2 cursor-pointer group z-20'>
					<span className='text-[10px] uppercase tracking-widest font-bold group-hover:text-blue-400 transition-colors'>
						Poznaj nas lepiej
					</span>
					<ArrowDown size={20} className='group-hover:text-blue-400 transition-colors' />
				</motion.div>
			</div>

			{/* --- SEKCJA: KIM JESTEŚMY (O NAS) --- */}
			<div className='relative z-10 bg-zinc-950 px-6 py-32'>
				<div className='max-w-6xl mx-auto'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-20 items-center'>
						<div className='relative'>
							<div className='absolute -top-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl' />
							<h2 className='text-5xl font-black uppercase mb-8 leading-none'>
								Tworzymy <br />
								<span className='text-blue-500 font-outline-2'>Przestrzeń</span> <br />
								Dla Twoich Wspomnień
							</h2>
							<p className='text-xl text-gray-400 leading-relaxed mb-8'>
								LuxTent to nie tylko namioty. To mobilne centra eventowe, które dostarczamy wszędzie tam, gdzie dzieje
								się coś wyjątkowego. Od eleganckich wesel, po szalone imprezy firmowe.
							</p>
							<div className='grid grid-cols-2 gap-6'>
								<div className='flex items-center gap-3'>
									<div className='p-3 bg-white/5 rounded-xl'>
										<Users className='text-blue-500' />
									</div>
									<span className='font-bold text-sm'>Setki zadowolonych gości</span>
								</div>
								<div className='flex items-center gap-3'>
									<div className='p-3 bg-white/5 rounded-xl'>
										<MapPin className='text-blue-500' />
									</div>
									<span className='font-bold text-sm'>Działamy w całej Polsce</span>
								</div>
							</div>
						</div>

						<div className='grid grid-cols-2 gap-4 h-[500px]'>
							<div
								className='rounded-3xl bg-cover bg-center mt-12 border border-white/10'
								style={{
									backgroundImage: `url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80')`,
								}}
							/>
							<div
								className='rounded-3xl bg-cover bg-center border border-white/10'
								style={{
									backgroundImage: `url('https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80')`,
								}}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* --- SEKCJA: DLACZEGO MY (MOTYWY IMPREZOWE) --- */}
			<div className='relative z-10 bg-zinc-900/50 py-32 border-y border-white/5'>
				<div className='max-w-6xl mx-auto px-6'>
					<div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'>
						<h3 className='text-4xl font-black uppercase italic tracking-tighter'>Co nas wyróżnia?</h3>
						<p className='text-blue-500 font-bold uppercase tracking-widest text-sm'>Wszystko w jednym miejscu</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{[
							{
								title: 'Błyskawiczny Montaż',
								desc: 'Twój klub stoi gotowy w zaledwie kilka godzin.',
								icon: <Calendar />,
							},
							{ title: 'Design Premium', desc: 'Przezroczyste ściany i nowoczesne podświetlenie.', icon: <Star /> },
							{ title: 'Pełne Wyposażenie', desc: 'Bar, nagłośnienie i oświetlenie w pakiecie.', icon: <Users /> },
						].map((item, i) => (
							<div
								key={i}
								className='group p-10 rounded-[40px] bg-zinc-950 border border-white/5 hover:border-blue-500/50 transition-all duration-500'>
								<div className='mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-500'>
									{item.icon}
								</div>
								<h4 className='text-2xl font-bold mb-4'>{item.title}</h4>
								<p className='text-gray-500'>{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* --- FOOTER LANDINGA --- */}
			<div className='py-20 text-center'>
				<p className='text-gray-500 uppercase tracking-[0.4em] text-xs mb-8 underline decoration-blue-500 underline-offset-8'>
					Gotowy na start?
				</p>
				<button
					onClick={() => setScene('inside', 0)}
					className='text-5xl md:text-7xl font-black hover:text-blue-500 transition-colors cursor-pointer'>
					KLIKNIJ I WEJDŹ
				</button>
			</div>
			<Footer />
		</motion.section>
	)
}

export default Landing
