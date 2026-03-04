import { useParams, Link } from 'react-router-dom'
import blogs from '../data/blogs.json'

export default function BlogPost() {
	const { slug } = useParams()
	const post = blogs.find(blog => blog.slug === slug)

	if (!post) {
		return (
			<div className='pt-40 pb-40 text-center bg-[#fdfbf7] min-h-screen'>
				<h2 className='text-3xl font-bold'>Wpis nie istnieje</h2>
				<Link to='/blog' className='text-amber-600 mt-6 inline-block underline'>
					Wróć do bloga
				</Link>
			</div>
		)
	}

	return (
		<div className='bg-[#fdfbf7] min-h-screen'>
			<article className='pt-32 pb-24 px-6 max-w-3xl mx-auto'>
				<header className='mb-12'>
					<span className='text-amber-600 text-sm font-bold uppercase tracking-widest'>{post.subtitle}</span>
					<h1 className='text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6 leading-tight'>{post.title}</h1>

					<div className='flex items-center gap-4 text-gray-500 text-sm'>
						<div className='w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold'>
							{post.author.substring(0, 2).toUpperCase()}
						</div>
						<div>
							<p className='font-bold text-gray-900'>{post.author}</p>
							<p>{post.date}</p>
						</div>
					</div>
				</header>

				<div className='mb-12 rounded-3xl overflow-hidden shadow-xl'>
					<img src={post.image} alt={post.title} className='w-full h-auto' />
				</div>

				{/* Renderowanie sekcji z JSONa */}
				<div className='space-y-12 text-gray-800 text-lg leading-relaxed'>
					{/* Intro */}
					<p className='text-xl font-medium text-gray-700 italic border-l-4 border-amber-500 pl-6'>
						{post.description}
					</p>

					{/* Pętla po sekcjach */}
					{post.sections &&
						post.sections.map((section, index) => (
							<div key={index} className='space-y-4'>
								<h2 className='text-3xl font-bold text-gray-900'>{section.heading}</h2>
								<p className='text-gray-700'>{section.text}</p>
							</div>
						))}
				</div>

				<footer className='mt-16 pt-10 border-t border-gray-200'>
					<div className='bg-gray-900 text-white p-8 rounded-3xl text-center'>
						<h3 className='text-2xl font-bold mb-4'>Potrzebujesz wsparcia technicznego?</h3>
						<p className='text-gray-400 mb-6'>Axis Events to nie tylko wynajem, to doradztwo i pełna realizacja.</p>
						<Link
							to='/kontakt'
							className='inline-block bg-amber-500 text-black px-8 py-3 rounded-full font-bold hover:bg-amber-400 transition'>
							Zapytaj o ofertę
						</Link>
					</div>
					<Link to='/blog' className='inline-block mt-8 text-gray-900 font-bold'>
						← Wróć do listy
					</Link>
				</footer>
			</article>
		</div>
	)
}
