import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, LogOut } from 'lucide-react'

const Home = ({ setScene, isInside, custom }) => {
	// Definiujemy warianty, które przyjmują "direction" (kierunek)
	const variants = {
		initial: dir => ({
			x: dir > 0 ? '100%' : dir < 0 ? '-100%' : 0,
			opacity: 1,
			scale: dir === 0 ? 1.1 : 1,
		}),
		animate: {
			x: 0,
			opacity: 1,
			scale: 1,
			transition: { duration: 0.3, ease: 'circOut' },
		},
		exit: dir => ({
			x: dir > 0 ? '-100%' : dir < 0 ? '100%' : 0,
			opacity: 1,
			scale: dir === 0 ? 1.5 : 1,
			transition: { duration: 0.3, ease: 'circIn' },
		}),
	}

	if (!isInside) {
		return (
			<motion.section
				key='entrance'
				custom='zoom' // Tutaj wchodzimy "głębiej"
				variants={variants}
				initial='initial'
				animate='animate'
				exit='exit'
				className='absolute inset-0 flex flex-col items-center justify-center bg-cover bg-center'
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')`,
				}}>
				<div className='absolute inset-0 bg-black/40' />
				<div className='relative z-10 text-center'>
					<h1 className='text-5xl md:text-7xl font-black mb-6 uppercase'>Impreza bez granic</h1>
					<button
						onClick={() => setScene('inside')}
						className='bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-transform hover:scale-105 cursor-pointer'>
						WEJDŹ DO ŚRODKA
					</button>
				</div>
			</motion.section>
		)
	}

	return (
		<motion.section
			custom={custom}
			variants={variants}
			initial='initial'
			animate='animate'
			exit='exit'
			className='absolute inset-0 flex flex-col items-center justify-center bg-cover bg-center'
			style={{
				backgroundImage: `url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80')`,
			}}>
			<div className='absolute inset-0 bg-black/30' />

			<div className='relative z-10 w-full max-w-6xl flex justify-between items-center px-10'>
				{/* Klikając BAR, chcemy żeby scena Home wyjechała w PRAWO (direction: 'left' dla Baru) */}
				<button
					onClick={() => setScene('bar', -1)}
					className='group flex flex-col items-center gap-4 bg-black/40 p-6 rounded-2xl hover:bg-blue-600/80 transition-all cursor-pointer'>
					<ArrowLeft size={48} className='group-hover:-translate-x-2 transition-transform' />
					<span className='font-bold uppercase tracking-widest'>ZOBACZ BAR</span>
				</button>

				<button
					onClick={() => setScene('speakers', 1)}
					className='group flex flex-col items-center gap-4 bg-black/40 p-6 rounded-2xl hover:bg-blue-600/80 transition-all cursor-pointer'>
					<ArrowRight size={48} className='group-hover:translate-x-2 transition-transform' />
					<span className='font-bold uppercase tracking-widest'>NAGŁOŚNIENIE</span>
				</button>
			</div>

			<button
				onClick={() => setScene('contact')}
				className='absolute bottom-12 flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black uppercase tracking-tighter hover:bg-blue-500 hover:text-white transition-all shadow-xl cursor-pointer'>
				<LogOut size={20} /> Wyjdź z namiotu i rezerwuj
			</button>
		</motion.section>
	)
}

export default Home
