import React from 'react'
import { Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react'

const Footer = () => {
	return (
		<footer className='w-full bg-black/50 backdrop-blur-md border-t border-white/10 p-12'>
			<div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8'>
				{/* INFO KONTAKTOWE */}
				<div className='flex flex-col items-center md:items-start gap-2'>
					<div className='flex items-center gap-2 text-blue-400 font-bold'>
						<Phone size={18} />
						<span>+48 123 456 789</span>
					</div>
					<div className='flex items-center gap-2 text-gray-400 text-sm'>
						<Mail size={18} />
						<span>kontakt@luxtent.pl</span>
					</div>
				</div>

				{/* LOKALIZACJA */}
				<div className='flex flex-col items-center gap-1 text-gray-400 text-sm'>
					<div className='flex items-center gap-2'>
						<MapPin size={18} className='text-red-500' />
						<span>Działamy w promieniu 100km od Warszawy</span>
					</div>
					<p className='text-[10px] uppercase tracking-widest opacity-50'>Dojazd w cenie przy wynajmie full opcja</p>
				</div>

				{/* SOCIAL MEDIA */}
				<div className='flex gap-6'>
					<a
						href='https://www.instagram.com/'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Odwiedź nasz profil na Instagramie'
						className='hover:text-pink-500 transition-colors'>
						<Instagram size={24} />
					</a>
					<a
						href='https://www.facebook.com/'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Odwiedź nasz profil na Facebooku'
						className='hover:text-blue-500 transition-colors'>
						<Facebook size={24} />
					</a>
				</div>
			</div>

			<div className='text-center text-[10px] text-gray-600 mt-8 uppercase tracking-[0.2em]'>
				© 2024 LUXTENT - Najlepsze Imprezy pod Dmuchem
			</div>
		</footer>
	)
}

export default Footer
