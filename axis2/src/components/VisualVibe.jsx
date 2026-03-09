import React from 'react'
import { motion } from 'framer-motion'

const VisualVibe = () => {
	// Tutaj wrzuć ścieżki do swoich zdjęć namiotu
	const imagesRow1 = ['/tent-1.jpg', '/tent-2.jpg', '/tent-3.jpg', '/tent-4.jpg']

	const imagesRow2 = ['/tent-5.jpg', '/tent-6.jpg', '/tent-7.jpg', '/tent-8.jpg']

	return (
		<section className='py-20 bg-[#0a0a0a] overflow-hidden'>
			<div className='max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end'>
				<div>
					<span className='text-amber-500 font-black uppercase tracking-[0.4em] text-[10px] mb-2 block'>
						Gallery Experience
					</span>
					<h2 className='text-4xl font-black uppercase tracking-tighter'>
						Wizualny <span className='text-gray-600 italic'>Vibe</span>
					</h2>
				</div>
				<p className='text-gray-600 text-[10px] uppercase font-bold tracking-widest hidden md:block'>
					Scroll to explore setup
				</p>
			</div>

			{/* Pierwszy rząd - lewo */}
			<div className='flex mb-4'>
				<motion.div
					animate={{ x: [0, -1000] }}
					transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
					className='flex gap-4 flex-nowrap'>
					{[...imagesRow1, ...imagesRow1].map((img, i) => (
						<div
							key={i}
							className='w-[300px] md:w-[450px] h-[250px] md:h-[350px] flex-shrink-0 rounded-[2rem] overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700'>
							<img src={img} alt='Event setup' className='w-full h-full object-cover' />
						</div>
					))}
				</motion.div>
			</div>

			{/* Drugi rząd - prawo */}
			<div className='flex'>
				<motion.div
					animate={{ x: [-1000, 0] }}
					transition={{ repeat: Infinity, duration: 35, ease: 'linear' }}
					className='flex gap-4 flex-nowrap'>
					{[...imagesRow2, ...imagesRow2].map((img, i) => (
						<div
							key={i}
							className='w-[300px] md:w-[450px] h-[250px] md:h-[350px] flex-shrink-0 rounded-[2rem] overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700'>
							<img src={img} alt='Night party vibe' className='w-full h-full object-cover' />
						</div>
					))}
				</motion.div>
			</div>
		</section>
	)
}

export default VisualVibe
