import React from 'react'
import { motion } from 'framer-motion'
import { AdvancedImage } from '@cloudinary/react'
import { fill } from '@cloudinary/url-gen/actions/resize'
import { getOptimizedImage, IMAGES } from '../assets/img'

const VisualVibe = () => {
	const imagesRow1 = [
		IMAGES.NAMIOT_RSIDE,
		IMAGES.BEHRINGER_LOGO,
		IMAGES.SETUP_LOW,
		IMAGES.SETUP_MID,
		IMAGES.SETUP_MAX,
		IMAGES.NAMIOT_SETUP,
	]
	const imagesRow2 = [
		IMAGES.BARMAN_SHAKE,
		IMAGES.BARMAN_DRINK,
		IMAGES.BARMAN_DRINK_2,
		IMAGES.GLENMORANGIE,
		IMAGES.BAR_FRONT,
		IMAGES.BAR_WITH_SOUND,
	]

	const cardWidth = 466
	const row1LoopWidth = imagesRow1.length * cardWidth
	const row2LoopWidth = imagesRow2.length * cardWidth

	return (
		<section className='py-20 bg-[#0a0a0a] overflow-hidden'>
			<div className='max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end'>
				<div>
					<span className='text-amber-500 font-black uppercase tracking-[0.4em] text-[10px] mb-2 block'>
						Gallery Experience
					</span>
					<h2 className='text-4xl font-black uppercase tracking-tighter text-white'>
						Wizualny <span className='text-gray-600 italic'>Vibe</span>
					</h2>
				</div>
				<p className='text-gray-400 text-[10px] uppercase font-bold tracking-widest hidden md:block'>
					Scroll to explore setup
				</p>
			</div>

			{/* Pierwszy rząd - lewo */}
			<div className='flex mb-4'>
				<motion.div
					animate={{ x: [0, -row1LoopWidth] }}
					transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
					className='flex gap-4 flex-nowrap'>
					{/* Two copies is enough — the loop resets exactly at the seam */}
					{[...imagesRow1, ...imagesRow1].map((imgId, i) => (
						<div
							key={`row1-${i}`}
							className='w-[300px] md:w-[450px] h-[250px] md:h-[350px] flex-shrink-0 rounded-[2rem] overflow-hidden border border-white/5 bg-gray-900'>
							<AdvancedImage
								cldImg={getOptimizedImage(imgId).resize(fill().width(600).height(600))}
								alt='Event setup'
								className='w-full h-full object-cover'
							/>
						</div>
					))}
				</motion.div>
			</div>

			{/* Drugi rząd - prawo */}
			<div className='flex'>
				<motion.div
					animate={{ x: [-row2LoopWidth, 0] }}
					transition={{ repeat: Infinity, duration: 45, ease: 'linear' }}
					className='flex gap-4 flex-nowrap'>
					{[...imagesRow2, ...imagesRow2].map((imgId, i) => (
						<div
							key={`row2-${i}`}
							className='w-[300px] md:w-[450px] h-[250px] md:h-[350px] flex-shrink-0 rounded-[2rem] overflow-hidden border border-white/5 bg-gray-900'>
							<AdvancedImage
								cldImg={getOptimizedImage(imgId).resize(fill().width(600).height(600))}
								alt='Night party vibe'
								className='w-full h-full object-cover'
							/>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	)
}

export default VisualVibe
