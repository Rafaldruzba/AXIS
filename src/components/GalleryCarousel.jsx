import { motion } from 'framer-motion'

import partyIMG1 from '../img/party1.jpg'
import partyIMG2 from '../img/party2.jpg'
import partyIMG3 from '../img/party3.jpg'
import partyIMG4 from '../img/party4.jpg'
import partyIMG5 from '../img/party5.jpg'

// Przykładowe zdjęcia (podmień na swoje ścieżki)
const images = [
	partyIMG1, // Zdjęcie 1
	partyIMG2, // Zdjęcie 2
	partyIMG3, // Zdjęcie 3
	partyIMG4, // Zdjęcie 4
	partyIMG5, // Zdjęcie 5
]

// Podwajamy tablicę, żeby stworzyć efekt nieskończoności
const infiniteImages = [...images, ...images]

const GalleryCarousel = () => {
	return (
		<div className='w-full overflow-hidden py-10 relative'>
			{/* Gradienty maskujące na bokach - dają efekt znikania zdjęć */}
			<div className='absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-zinc-950 to-transparent z-10' />
			<div className='absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-zinc-950 to-transparent z-10' />

			<motion.div
				className='flex gap-4 w-max'
				animate={{
					x: ['0%', '-50%'],
				}}
				transition={{
					x: {
						repeat: Infinity,
						repeatType: 'loop',
						duration: 30, // Im wyższa liczba, tym wolniej jedzie
						ease: 'linear',
					},
				}}>
				{infiniteImages.map((img, index) => (
					<div
						key={index}
						className='w-[280px] h-[180px] md:w-[400px] md:h-[250px] shrink-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl'>
						<img
							src={img}
							alt={`Gallery ${index}`}
							className='w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-500'
						/>
					</div>
				))}
			</motion.div>
			<motion.div
				className='flex gap-4 w-max mt-5'
				animate={{
					x: ['-50%', '0%'],
				}}
				transition={{
					x: {
						repeat: Infinity,
						repeatType: 'loop',
						duration: 30, // Im wyższa liczba, tym wolniej jedzie
						ease: 'linear',
					},
				}}>
				{infiniteImages.map((img, index) => (
					<div
						key={index}
						className='w-[280px] h-[180px] md:w-[400px] md:h-[250px] shrink-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl'>
						<img
							src={img}
							alt={`Gallery ${index}`}
							className='w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-500'
						/>
					</div>
				))}
			</motion.div>
		</div>
	)
}

export default GalleryCarousel
