import blogs from '../data/blogs.json'
import { Link } from 'react-router-dom'

export default function BlogSection() {
	return (
		<section className='py-20 bg-gray-100 text-center'>
			<h2 className='text-4xl font-bold mb-6'>Nasz Blog</h2>
			<p className='max-w-2xl mx-auto mb-12 text-gray-600'>
				Aktualności, porady i wiedza branżowa z zakresu techniki eventowej.
			</p>

			<div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6'>
				{blogs.map(blog => (
					<Link
						key={blog.slug}
						to={`/blog/${blog.slug}`}
						className='bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition'>
						<h3 className='text-xl font-semibold mb-2'>{blog.title}</h3>
						<h4 className='text-orange-500 mb-3'>{blog.subtitle}</h4>
						<p className='text-gray-600 text-sm'>{blog.description}</p>
					</Link>
				))}
			</div>

			<Link to='/blog' className='inline-block mt-12 text-orange-500 font-semibold hover:underline'>
				Zobacz więcej →
			</Link>
		</section>
	)
}
