import { motion } from 'framer-motion'

// Importy zostają te same co u Ciebie
import partyIMG1 from '../img/party1.jpg'
import partyIMG2 from '../img/party2.jpg'
import partyIMG3 from '../img/party3.jpg'
import partyIMG4 from '../img/party4.jpg'
import partyIMG5 from '../img/party5.jpg'

const images = [partyIMG1, partyIMG2, partyIMG3, partyIMG4, partyIMG5]
const infiniteImages = [...images, ...images, ...images] // Potrajamy dla płynności

const GalleryCarousel = () => {
	return (
		<section className='py-24 bg-[#fdfbf7] overflow-hidden relative'>
			{/* Header sekcji - warto dodać, żeby galeria miała kontekst */}
			<div className='max-w-7xl mx-auto px-6 mb-16 text-center'>
				<h2 className='text-sm uppercase tracking-[0.4em] text-amber-600 font-black mb-4'>Momentum</h2>
				<p className='text-4xl md:text-5xl font-black text-gray-900 tracking-tighter'>Atmosfera w obiektywie</p>
			</div>

			{/* Kontener z lekkim pochyleniem dla efektu 3D */}
			<div className='relative flex flex-col gap-6 md:gap-10 -rotate-1 scale-105'>
				{/* Pierwszy rząd - jedzie w lewo */}
				<div className='flex overflow-hidden'>
					<motion.div
						className='flex gap-6 md:gap-10 pr-6 md:pr-10'
						animate={{ x: ['0%', '-50%'] }}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: 'loop',
								duration: 40,
								ease: 'linear',
							},
						}}
						whileHover={{ transition: { duration: 100 } }} // Zwalnia przy hoverze
					>
						{infiniteImages.map((img, index) => (
							<div
								key={index}
								className='w-[300px] h-[200px] md:w-[500px] md:h-[350px] shrink-0 rounded-[2.5rem] overflow-hidden shadow-2xl group relative border-4 border-white'>
								<img
									src={img}
									alt={`Axis Realizacja ${index}`}
									className='w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700'
								/>
								<div className='absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none' />
							</div>
						))}
					</motion.div>
				</div>

				{/* Drugi rząd - jedzie w prawo */}
				<div className='flex overflow-hidden'>
					<motion.div
						className='flex gap-6 md:gap-10 pr-6 md:pr-10'
						animate={{ x: ['-50%', '0%'] }}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: 'loop',
								duration: 50, // Inna prędkość dla efektu głębi
								ease: 'linear',
							},
						}}
						whileHover={{ transition: { duration: 100 } }}>
						{infiniteImages.map((img, index) => (
							<div
								key={index}
								className='w-[300px] h-[200px] md:w-[500px] md:h-[350px] shrink-0 rounded-[2.5rem] overflow-hidden shadow-2xl group relative border-4 border-white'>
								<img
									src={img}
									alt={`Axis Event ${index}`}
									className='w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700'
								/>
								<div className='absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none' />
							</div>
						))}
					</motion.div>
				</div>
			</div>

			{/* Maski boczne - dopasowane do koloru tła strony */}
			<div className='absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fdfbf7] via-[#fdfbf7]/80 to-transparent z-20 pointer-events-none' />
			<div className='absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fdfbf7] via-[#fdfbf7]/80 to-transparent z-20 pointer-events-none' />
		</section>
	)
}

export default GalleryCarousel
