import { motion } from 'framer-motion'
import { AdvancedImage } from '@cloudinary/react'
import { fill } from '@cloudinary/url-gen/actions/resize'
import { getOptimizedImage, IMAGES } from '../assets/img'
import { Link } from 'react-router-dom'

const images = [IMAGES.REALIZATION_1, IMAGES.B_18_BOY, IMAGES.BARMAN_DRINK_2, IMAGES.LIGHTS_PARTY, IMAGES.BAR_LIGHTS]
const images2 = [IMAGES.POETRY_GIRL, IMAGES.B40_3, IMAGES.BAR_RED_THINGS, IMAGES.RED_GIRL, IMAGES.COWBOY_GIRL]

const infiniteImages = [...images, ...images]
const infiniteImages2 = [...images2, ...images2]

// card width + gap on desktop: 500px + 40px = 540px
const CARD_WIDTH = 540
const ROW1_LOOP = images.length * CARD_WIDTH // 2700px — one full set
const ROW2_LOOP = images2.length * CARD_WIDTH // 2700px

const GalleryCarousel = () => {
	return (
		<section className='py-24 bg-[#fdfbf7] overflow-hidden relative'>
			<div className='max-w-7xl mx-auto px-6 mb-16 text-center'>
				<h2 className='text-sm uppercase tracking-[0.4em] text-amber-600 font-black mb-4'>Momentum</h2>
				<p className='text-4xl md:text-5xl font-black text-gray-900 tracking-tighter'>Atmosfera w obiektywie</p>
			</div>

			<div className='relative flex flex-col gap-6 md:gap-10 -rotate-1 scale-105'>
				{/* RZĄD 1 - jedzie w lewo */}
				<div className='flex overflow-hidden'>
					<motion.div
						className='flex gap-6 md:gap-10'
						animate={{ x: [0, -ROW1_LOOP] }}
						transition={{
							repeat: Infinity,
							repeatType: 'loop',
							duration: 40,
							ease: 'linear',
						}}>
						{infiniteImages.map((imgId, index) => (
							<div
								key={`row1-${index}`}
								className='w-[300px] h-[200px] md:w-[500px] md:h-[350px] shrink-0 rounded-[2.5rem] overflow-hidden shadow-2xl group relative border-4 border-black md:border-white bg-gray-200'>
								<AdvancedImage
									loading='lazy'
									cldImg={getOptimizedImage(imgId).resize(fill().width(600).height(400))}
									alt={`Axis Realizacja ${index}`}
									className='w-full h-full object-cover md:grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700'
								/>
								<div className='absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none' />
							</div>
						))}
					</motion.div>
				</div>

				{/* RZĄD 2 - jedzie w prawo */}
				<div className='flex overflow-hidden'>
					<motion.div
						className='flex gap-6 md:gap-10'
						animate={{ x: [-ROW2_LOOP, 0] }}
						transition={{
							repeat: Infinity,
							repeatType: 'loop',
							duration: 50,
							ease: 'linear',
						}}>
						{infiniteImages2.map((imgId, index) => (
							<div
								key={`row2-${index}`}
								className='w-[300px] h-[200px] md:w-[500px] md:h-[350px] shrink-0 rounded-[2.5rem] overflow-hidden shadow-2xl group relative border-4 border-black md:border-white bg-gray-200'>
								<AdvancedImage
									loading='lazy'
									cldImg={getOptimizedImage(imgId).resize(fill().width(600).height(400))}
									alt={`Axis Event ${index}`}
									className='w-full h-full object-cover md:grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700'
								/>
								<div className='absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none' />
							</div>
						))}
					</motion.div>
				</div>
			</div>

			<div className='max-w-7xl mx-auto mt-10 px-6 relative z-30 text-center'>
				<div className='flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8'>
					<Link
						to='/oferta'
						className='group flex items-center gap-3 bg-amber-500 text-black px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto justify-center'>
						<span className='text-xl'>📸</span>
						Dodaj fotografa do swojej imprezy
						<span className='group-hover:translate-x-1 transition-transform'>→</span>
					</Link>
					<a
						href='https://klaudiacyran.myportfolio.com/about-me'
						target='_blank'
						rel='noopener noreferrer'
						className='group flex items-center gap-3 bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 w-full sm:w-auto justify-center'>
						Zobacz pełne portfolio
						<span className='opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all'>↗</span>
					</a>
				</div>
			</div>

			{/* Maski boczne */}
			<div className='absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#fdfbf7] via-[#fdfbf7]/20 md:via-[#fdfbf7]/80 to-transparent z-20 pointer-events-none' />
			<div className='absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#fdfbf7] via-[#fdfbf7]/20 md:via-[#fdfbf7]/80 to-transparent z-20 pointer-events-none' />
		</section>
	)
}

export default GalleryCarousel
