import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Music2, RefreshCcw, Home } from 'lucide-react'

const NotFound = () => {
	return (
		<div className='min-h-screen bg-gray-900 flex items-center justify-center px-6 overflow-hidden relative'>
			{/* Dekoracyjne rozmyte światła w tle */}
			<div className='absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]' />
			<div className='absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]' />

			<div className='text-center relative z-10'>
				{/* Ikona z animacją "skakania" */}
				<motion.div
					animate={{
						y: [0, -20, 0],
						rotate: [0, 10, -10, 0],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
					className='inline-block mb-8 text-amber-500'>
					<Music2 size={80} strokeWidth={1} />
				</motion.div>

				<h1 className='text-9xl font-black text-white opacity-10 absolute -top-20 left-1/2 -translate-x-1/2 select-none'>
					404
				</h1>

				<h2 className='text-4xl md:text-6xl font-black text-white tracking-tighter mb-6'>
					Ups... Cisza nocna? <br />
					<span className='text-amber-500'>Impreza wygasła.</span>
				</h2>

				<p className='text-gray-400 text-lg max-w-md mx-auto mb-12 leading-relaxed'>
					Szukana strona nie istnieje. Prawdopodobnie technik potknął się o kabel albo barman zmienił lokalizację.
				</p>

				<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
					<Link
						to='/'
						className='flex items-center gap-3 bg-amber-500 text-gray-900 px-8 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white transition-all duration-300 shadow-xl shadow-amber-500/10'>
						<Home size={18} /> Wróć na główną
					</Link>

					<button
						onClick={() => window.location.reload()}
						className='flex items-center gap-3 border border-white/10 text-white px-8 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white/5 transition-all'>
						<RefreshCcw size={18} /> Spróbuj jeszcze raz
					</button>
				</div>

				{/* Żartobliwy dopisek na dole */}
				<p className='mt-16 text-gray-300 text-xs font-mono uppercase tracking-[0.3em]'>
					Błąd 404 // Brak sygnału na mikserze
				</p>
			</div>
		</div>
	)
}

export default NotFound
