import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects.json'

export default function RealizacjaPost() {
	const { slug } = useParams()
	const project = projects.find(p => p.slug === slug)

	if (!project) {
		return (
			<div className='pt-40 pb-40 text-center bg-[#fdfbf7] min-h-screen'>
				<h2 className='text-3xl font-black text-gray-900 mb-6'>Realizacja nie istnieje</h2>
				<Link to='/realizacje' className='text-amber-600 font-bold hover:underline'>
					← Wróć do listy
				</Link>
			</div>
		)
	}

	return (
		<div className='bg-[#fdfbf7] min-h-screen pt-32 pb-20'>
			<div className='max-w-6xl mx-auto px-6'>
				<Link
					to='/realizacje'
					className='text-amber-600 font-bold mb-8 inline-flex items-center gap-2 hover:-translate-x-2 transition-transform'>
					← Wróć do realizacji
				</Link>

				<header className='mb-12'>
					<div className='flex items-center gap-3 mb-4'>
						<span className='bg-amber-100 text-amber-700 px-3 py-1 rounded-md text-xs font-black uppercase tracking-widest'>
							{project.type}
						</span>
						<span className='text-gray-400 text-sm'>{project.date}</span>
					</div>
					<h1 className='text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8'>{project.title}</h1>
				</header>

				{/* Hero Image */}
				<div className='rounded-[3rem] overflow-hidden shadow-2xl mb-20 h-[500px] border border-gray-100'>
					<img src={project.image} alt={project.title} className='w-full h-full object-cover' />
				</div>

				<div className='grid md:grid-cols-3 gap-16'>
					{/* LEWA KOLUMNA: Dynamiczna treść */}
					<div className='md:col-span-2 space-y-16'>
						{/* Wstęp/Description z JSONa */}
						<p className='text-2xl text-gray-700 leading-relaxed font-medium border-l-4 border-amber-500 pl-8'>
							{project.description}
						</p>

						{/* Pętla po sekcjach z JSONa */}
						{project.contentSections &&
							project.contentSections.map((section, index) => (
								<section key={index} className='space-y-6'>
									<h2 className='text-3xl font-bold text-gray-900 tracking-tight'>{section.heading}</h2>
									<p className='text-lg text-gray-600 leading-relaxed'>{section.text}</p>
								</section>
							))}

						{/* Galeria zdjęć dodatkowych z pola "gallery" w JSON */}
						{project.gallery && (
							<div className='grid grid-cols-2 gap-6 pt-10'>
								{project.gallery.map((img, i) => (
									<div key={i} className='rounded-3xl overflow-hidden h-64 shadow-md border border-gray-100'>
										<img
											src={img}
											alt={`Detal ${i}`}
											className='w-full h-full object-cover hover:scale-105 transition duration-500'
										/>
									</div>
								))}
							</div>
						)}
					</div>

					{/* PRAWA KOLUMNA: Sidebar (Sticky) */}
					<aside className='h-fit sticky top-32'>
						<div className='bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100'>
							<h3 className='text-xl font-bold mb-8 text-gray-900 uppercase tracking-widest text-sm'>
								Wykorzystany sprzęt
							</h3>
							<ul className='space-y-4'>
								{project.tags &&
									project.tags.map((tag, i) => (
										<li key={i} className='flex items-center gap-3 text-gray-600 font-semibold text-sm'>
											<div className='w-2 h-2 bg-amber-500 rounded-full'></div>
											{tag}
										</li>
									))}
							</ul>

							<div className='mt-12 pt-8 border-t border-gray-100 text-center'>
								<Link
									to='/kontakt'
									className='block w-full bg-gray-900 text-white py-4 rounded-full font-bold hover:bg-amber-600 transition-all shadow-lg'>
									Zapytaj o ten setup
								</Link>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</div>
	)
}
