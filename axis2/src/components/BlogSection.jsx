import blogs from '../data/blogs.json'
import { Link } from 'react-router-dom'

export default function BlogSection() {
	// Wybieramy tylko 3 ostatnie wpisy na stronę główną
	const latestBlogs = blogs.slice(0, 3)

	return (
		<section className='py-24 bg-[#fdfbf7]'>
			<div className='max-w-7xl mx-auto px-6'>
				{/* Header sekcji */}
				<div className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6'>
					<div className='max-w-2xl'>
						<h2 className='text-sm uppercase tracking-[0.3em] text-amber-600 font-black mb-4'>Baza Wiedzy</h2>
						<h3 className='text-4xl md:text-5xl font-black text-gray-900 leading-tight'>
							Porady, które pomogą Ci zaplanować <span className='text-amber-500'>idealny event</span>
						</h3>
					</div>
					<Link
						to='/blog'
						className='hidden md:inline-flex items-center gap-2 font-bold text-gray-900 hover:text-amber-600 transition-colors border-b-2 border-amber-500 pb-1'>
						Wszystkie wpisy <span className='text-xl'>→</span>
					</Link>
				</div>

				{/* Grid artykułów */}
				<div className='grid md:grid-cols-3 gap-10'>
					{latestBlogs.map(blog => (
						<article key={blog.slug} className='group cursor-pointer'>
							<Link to={`/blog/${blog.slug}`}>
								{/* Miniaturka */}
								<div className='relative h-64 mb-8 overflow-hidden rounded-[2rem] shadow-sm group-hover:shadow-xl transition-all duration-500'>
									<img
										src={blog.image || '/api/placeholder/600/400'}
										alt={blog.title}
										className='w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition duration-700'
									/>
									<div className='absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-amber-600 shadow-sm'>
										{blog.subtitle}
									</div>
								</div>

								{/* Tekst karty */}
								<div className='space-y-4'>
									<h4 className='text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors leading-snug'>
										{blog.title}
									</h4>
									<p className='text-gray-600 line-clamp-2 text-lg'>{blog.description}</p>
									<div className='pt-2 flex items-center gap-2 font-black text-xs uppercase tracking-tighter text-gray-900 group-hover:gap-4 transition-all'>
										Czytaj dalej <span>——</span>
									</div>
								</div>
							</Link>
						</article>
					))}
				</div>

				{/* Mobilny przycisk "Zobacz więcej" (widoczny tylko na małych ekranach) */}
				<div className='mt-12 md:hidden text-center'>
					<Link to='/blog' className='inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-bold'>
						Zobacz wszystkie porady
					</Link>
				</div>
			</div>
		</section>
	)
}
