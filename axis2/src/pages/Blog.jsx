import { AdvancedImage } from '@cloudinary/react'
import blogs from '../data/blogs.json'
import { Link } from 'react-router-dom'
import { getOptimizedImage } from '../assets/img'
import { fill } from '@cloudinary/url-gen/actions/resize'

export default function Blog() {
	const sortedBlogs = [...blogs].sort((a, b) => {
		// Funkcja pomocnicza do konwersji Twojego formatu daty na obiekt Date
		const parseDate = dateStr => {
			const months = {
				Stycznia: 0,
				Lutego: 1,
				Marca: 2,
				Kwietnia: 3,
				Maja: 4,
				Czerwca: 5,
				Lipca: 6,
				Sierpnia: 7,
				Września: 8,
				Października: 9,
				Listopada: 10,
				Grudnia: 11,
			}
			const [day, monthName, year] = dateStr.split(' ')
			return new Date(year, months[monthName], day)
		}

		return parseDate(b.date) - parseDate(a.date) // b - a dla kolejności malejącej (najnowsze pierwsze)
	})

	return (
		<div className='bg-[#fdfbf7] min-h-screen'>
			<section className='pt-32 pb-20 px-6 max-w-7xl mx-auto'>
				{/* Nagłówek sekcji SEO-friendly */}
				<header className='text-center mb-20'>
					<h1 className='text-5xl md:text-6xl font-black mb-6 text-gray-900'>Inspiracje i Wiedza Eventowa</h1>
					<div className='w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full'></div>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
						Dowiedz się, jak zaplanować idealną imprezę plenerową, wybrać mobilny bar na wesele i stworzyć klimat, o
						którym Twoi goście będą opowiadać miesiącami.
					</p>
				</header>

				{/* Grid artykułów */}
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
					{sortedBlogs.map(blog => (
						<article key={blog.slug} className='group'>
							<Link to={`/blog/${blog.slug}`} className='block'>
								{/* Kontener na zdjęcie */}
								<div className='relative h-64 mb-6 overflow-hidden rounded-3xl bg-gray-200 shadow-md'>
									<AdvancedImage
										cldImg={getOptimizedImage(blog.image || 'default_blog_placeholder').resize(
											fill().width(800).height(500),
										)}
										alt={blog.title}
										className='object-cover w-full h-full transition duration-500 group-hover:scale-105'
									/>
									<div className='absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-amber-600'>
										{blog.subtitle}
									</div>
								</div>

								{/* Treść karty */}
								<div className='px-2'>
									<div className='flex items-center gap-4 mb-3 text-sm text-gray-400'>
										<span>Axis Events</span>
										<span className='w-1 h-1 bg-gray-300 rounded-full'></span>
										<span>{blog.date || 'Marzec 2026'}</span>
									</div>

									<h2 className='text-2xl font-bold mb-4 text-gray-900 group-hover:text-amber-600 transition-colors'>
										{blog.title}
									</h2>

									<p className='text-gray-600 leading-relaxed mb-6 line-clamp-3'>{blog.description}</p>

									<div className='flex items-center text-gray-900 font-bold text-sm'>
										<span>CZYTAJ ARTYKUŁ</span>
										<svg
											className='w-5 h-5 ml-2 transition-transform group-hover:translate-x-2'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 8l4 4m0 0l-4 4m4-4H3' />
										</svg>
									</div>
								</div>
							</Link>
						</article>
					))}
				</div>
				<div className='mt-32 bg-gray-900 rounded-[3rem] p-12 text-center text-white'>
					<h3 className='text-3xl font-bold mb-4'>Masz pytania dotyczące techniki?</h3>
					<p className='text-gray-400 mb-8 max-w-xl mx-auto'>
						Napisz do nas. Chętnie doradzimy Ci w kwestiach technicznych, nawet jeśli jeszcze nie jesteś zdecydowany na
						wynajem.
					</p>
					<Link
						to='/kontakt'
						className='inline-block bg-amber-500 text-black px-10 py-4 rounded-full font-bold hover:bg-amber-400 transition'>
						Skontaktuj się z nami
					</Link>
				</div>
			</section>
		</div>
	)
}
