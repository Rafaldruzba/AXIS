import { Link } from 'react-router-dom'

export default function Hero() {
	return (
		<section
			className='h-screen bg-cover bg-center flex items-center justify-center text-white relative'
			style={{
				backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')",
			}}>
			<div className='absolute inset-0 bg-black/60'></div>

			<div className='relative text-center max-w-3xl px-6'>
				<h1 className='text-4xl md:text-6xl font-bold mb-6'>Profesjonalna wypożyczalnia eventowa</h1>
				<p className='text-lg md:text-xl mb-8'>
					Kompleksowa obsługa techniczna eventów, wesel, koncertów i imprez firmowych.
				</p>
				<div className='space-x-4'>
					<Link to='/oferta'>
						<button className='bg-orange-500 px-6 py-3 rounded text-lg hover:bg-orange-600 transition'>
							Zobacz ofertę
						</button>
					</Link>
					<Link to='/kontakt'>
						<button className='border border-white px-6 py-3 rounded text-lg hover:bg-white hover:text-black transition'>
							Skontaktuj się
						</button>
					</Link>
				</div>
			</div>
		</section>
	)
}
