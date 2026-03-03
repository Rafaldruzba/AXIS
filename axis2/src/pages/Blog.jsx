import blogs from '../data/blogs.json'
import { Link } from 'react-router-dom'

export default function Blog() {
	return (
		<section className='pt-32 pb-20 px-6 max-w-7xl mx-auto'>
			<h1 className='text-4xl md:text-5xl font-bold mb-6 text-center'>Blog Axis Events</h1>

			<p className='text-center text-gray-600 max-w-2xl mx-auto mb-16'>
				Wiedza, porady i inspiracje ze świata techniki eventowej. Nagłośnienie, oświetlenie, organizacja wydarzeń.
			</p>

			<div className='grid md:grid-cols-3 gap-10'>
				{blogs.map(blog => (
					<Link
						key={blog.slug}
						to={`/blog/${blog.slug}`}
						className='bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition hover:-translate-y-1'>
						<h2 className='text-2xl font-semibold mb-3'>{blog.title}</h2>

						<h3 className='text-orange-500 mb-4'>{blog.subtitle}</h3>

						<p className='text-gray-600 text-sm'>{blog.description}</p>

						<span className='inline-block mt-4 text-sm font-semibold text-orange-500'>Czytaj więcej →</span>
					</Link>
				))}
			</div>
		</section>
	)
}
