import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	const [dropdown, setDropdown] = useState(false)

	return (
		<nav className='fixed w-full bg-black/70 backdrop-blur-md text-white z-50'>
			<div className='max-w-7xl mx-auto flex justify-between items-center p-4'>
				{/* LOGO */}
				<Link to='/' className='text-2xl font-bold tracking-widest' onClick={() => setIsOpen(false)}>
					AXIS EVENTS
				</Link>

				{/* DESKTOP MENU */}
				<div className='hidden md:flex items-center space-x-8'>
					{/* Oferta dropdown */}
					<div className='relative' onClick={() => setDropdown(!dropdown)}>
						<button className='hover:text-orange-400 transition'>Oferta ▾</button>

						{dropdown && (
							<div className='absolute top-8 left-0 bg-white text-black rounded-xl shadow-xl py-4 w-56'>
								<Link to='/oferta' className='block px-6 py-2 hover:bg-gray-100'>
									Konfigurator
								</Link>
								<Link to='/strefa-barowa' className='block px-6 py-2 hover:bg-gray-100'>
									Strefa barowa
								</Link>
								<Link to='/naglosnienie-i-oswietlenie' className='block px-6 py-2 hover:bg-gray-100'>
									Nagłośnienie i oświetlenie
								</Link>
								<Link to='/wesele' className='block px-6 py-2 hover:bg-gray-100'>
									Wesela
								</Link>
								<Link to='/eventy-firmowe' className='block px-6 py-2 hover:bg-gray-100'>
									Eventy firmowe
								</Link>
								<Link to='/eventy-plenerowe' className='block px-6 py-2 hover:bg-gray-100'>
									Eventy plenerowe
								</Link>
								<Link to='/imprezy-urodzinowe' className='block px-6 py-2 hover:bg-gray-100'>
									Imprezy urodzinowe
								</Link>
							</div>
						)}
					</div>

					<Link to='/realizacje' className='hover:text-orange-400'>
						Realizacje
					</Link>

					<Link to='/blog' className='hover:text-orange-400'>
						Blog
					</Link>

					<Link to='/o-nas' className='hover:text-orange-400'>
						O nas
					</Link>

					<Link to='/oferta' className='bg-orange-500 px-5 py-2 rounded-lg hover:bg-orange-600 transition'>
						Wyceń event
					</Link>
				</div>

				{/* MOBILE BUTTON */}
				<button onClick={() => setIsOpen(!isOpen)} className='md:hidden text-2xl'>
					☰
				</button>
			</div>

			{/* MOBILE MENU */}
			{isOpen && (
				<div className='md:hidden bg-black px-6 pb-6 space-y-4'>
					<Link to='/oferta' className='block' onClick={() => setIsOpen(false)}>
						Konfigurator
					</Link>
					<Link to='/strefa-barowa' className='block' onClick={() => setIsOpen(false)}>
						Strefa barowa
					</Link>
					<Link to='/naglosnienie-i-oswietlenie' className='block' onClick={() => setIsOpen(false)}>
						Nagłośnienie i oświetlenie
					</Link>
					<Link to='/wesele' className='block' onClick={() => setIsOpen(false)}>
						Wesela
					</Link>
					<Link to='/imprezy-firmowe' className='block' onClick={() => setIsOpen(false)}>
						Eventy firmowe
					</Link>
					<Link to='/eventy-plenerowe' className='block' onClick={() => setIsOpen(false)}>
						Eventy plenerowe
					</Link>
					<Link to='/imprezy-urodzinowe' className='block' onClick={() => setIsOpen(false)}>
						Imprezy urodzinowe
					</Link>
					<Link to='/realizacje' className='block' onClick={() => setIsOpen(false)}>
						Realizacje
					</Link>
					<Link to='/blog' className='block' onClick={() => setIsOpen(false)}>
						Blog
					</Link>
					<Link to='/o-nas' className='block' onClick={() => setIsOpen(false)}>
						O nas
					</Link>
					<Link to='/oferta' className='block text-orange-400 font-semibold' onClick={() => setIsOpen(false)}>
						Wyceń event
					</Link>
				</div>
			)}
		</nav>
	)
}
