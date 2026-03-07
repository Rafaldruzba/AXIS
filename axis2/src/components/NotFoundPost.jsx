import { motion } from 'framer-motion'
import { FileQuestion, ArrowLeft, Ghost } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function NotFoundPost({ post }) {
	if (!post) {
		return (
			<div className='pt-20 pb-20 text-center bg-[#fdfbf7] min-h-screen flex items-center justify-center px-6'>
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='max-w-xl w-full'>
					{/* Ikona ducha lub znaku zapytania z animacją lewitowania */}
					<motion.div
						animate={{ y: [0, -15, 0] }}
						transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
						className='inline-block mb-8 text-amber-500/50'>
						<Ghost size={120} strokeWidth={1} />
					</motion.div>

					<h2 className='text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-4'>
						Ten wpis to <br />
						<span className='text-amber-500'>miejska legenda.</span>
					</h2>

					<p className='text-gray-500 text-lg mb-10 leading-relaxed'>
						Szukasz treści, której nie ma. Prawdopodobnie została zarchiwizowana głęboko w skrzyniach ze sprzętem albo
						jeszcze jej nie napisaliśmy.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link
							to='/blog'
							className='flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 shadow-xl shadow-gray-200'>
							<ArrowLeft size={18} /> Wróć do bloga
						</Link>

						<Link
							to='/'
							className='flex items-center justify-center gap-3 border border-gray-200 text-gray-400 px-8 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:bg-gray-100 transition-all'>
							Strona główna
						</Link>
					</div>

					{/* Subtelny żart techniczny */}
					<p className='mt-12 text-[10px] font-mono text-gray-300 uppercase tracking-[0.5em]'>
						Error: Content_Not_Found // Axis_Blog_Engine
					</p>
				</motion.div>
			</div>
		)
	}
}
