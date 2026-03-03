import { useParams, Link } from 'react-router-dom'
import blogs from '../data/blogs.json'

export default function BlogPost() {
	const { slug } = useParams()
	const post = blogs.find(blog => blog.slug === slug)

	if (!post) {
		return (
			<div className='pt-32 text-center'>
				<h2 className='text-3xl font-bold'>Nie znaleziono wpisu</h2>
				<Link to='/blog' className='text-orange-500 mt-4 inline-block'>
					Wróć do bloga
				</Link>
			</div>
		)
	}

	return (
		<article className='pt-32 pb-20 px-6 max-w-4xl mx-auto'>
			<h1 className='text-4xl font-bold mb-4'>{post.title}</h1>

			<h2 className='text-orange-500 text-xl mb-8'>{post.subtitle}</h2>

			<p className='text-gray-700 leading-relaxed mb-6'>{post.description}</p>

			<div className='space-y-6 text-gray-700 leading-relaxed'>
				<p>
					Tutaj w przyszłości dodamy pełną treść artykułu. Możesz później podłączyć markdown albo backend (MongoDB).
				</p>

				<p>
					Axis Events to profesjonalna wypożyczalnia eventowa, oferująca nagłośnienie i oświetlenie dopasowane do
					każdego rodzaju wydarzenia.
				</p>
			</div>

			<Link to='/blog' className='inline-block mt-10 text-orange-500 font-semibold'>
				← Wróć do bloga
			</Link>
		</article>
	)
}
