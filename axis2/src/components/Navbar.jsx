import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	const [dropdown, setDropdown] = useState(false)

	const navRef = useRef(null)
	const dropdownRef = useRef(null)

	useEffect(() => {
		function handleClickOutside(e) {
			if (navRef.current && !navRef.current.contains(e.target)) {
				setIsOpen(false)
				setDropdown(false)
			}
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
				setDropdown(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	return (
		<nav ref={navRef} className='fixed w-full bg-black/90 backdrop-blur-md text-white z-50'>
			<div className='max-w-7xl mx-auto flex justify-between items-center p-4'>
				{/* LOGO */}
				<Link to='/' className='text-2xl font-bold tracking-widest md:ml-10' onClick={() => setIsOpen(false)}>
					<img src={logo} alt='AXIS Events logo' className='h-12 object-contain' />
				</Link>

				{/* DESKTOP MENU */}
				<div className='hidden md:flex items-center space-x-8'>
					{/* Oferta dropdown */}
					<div className='relative' ref={dropdownRef} onClick={() => setDropdown(!dropdown)}>
						<button className='flex items-center gap-1 hover:text-orange-400 transition'>
							Oferta
							<ChevronDown
								size={16}
								className='transition-transform duration-300'
								style={{ transform: dropdown ? 'rotate(180deg)' : 'rotate(0deg)' }}
							/>
						</button>

						<div
							className='absolute top-8 left-0 bg-white text-black rounded-xl shadow-xl py-4 w-56 overflow-hidden'
							style={{
								transition: 'opacity 0.2s ease, transform 0.2s ease',
								opacity: dropdown ? 1 : 0,
								transform: dropdown ? 'translateY(0)' : 'translateY(-6px)',
								pointerEvents: dropdown ? 'auto' : 'none',
							}}>
							<Link to='/oferta' className='block px-6 py-2 hover:bg-gray-100' onClick={() => setDropdown(false)}>
								Konfigurator
							</Link>
							<Link
								to='/namiot-eventowy'
								className='block px-6 py-2 hover:bg-gray-100'
								onClick={() => setDropdown(false)}>
								Namiot eventowy
							</Link>
							<Link
								to='/strefa-barowa'
								className='block px-6 py-2 hover:bg-gray-100'
								onClick={() => setDropdown(false)}>
								Strefa barowa
							</Link>
							<Link
								to='/naglosnienie-i-oswietlenie'
								className='block px-6 py-2 hover:bg-gray-100'
								onClick={() => setDropdown(false)}>
								Nagłośnienie i oświetlenie
							</Link>
							<Link to='/wesele' className='block px-6 py-2 hover:bg-gray-100' onClick={() => setDropdown(false)}>
								Wesela
							</Link>
							<Link
								to='/eventy-firmowe'
								className='block px-6 py-2 hover:bg-gray-100'
								onClick={() => setDropdown(false)}>
								Eventy firmowe
							</Link>
							<Link
								to='/eventy-plenerowe'
								className='block px-6 py-2 hover:bg-gray-100'
								onClick={() => setDropdown(false)}>
								Eventy plenerowe
							</Link>
							<Link
								to='/imprezy-urodzinowe'
								className='block px-6 py-2 hover:bg-gray-100'
								onClick={() => setDropdown(false)}>
								Imprezy urodzinowe
							</Link>
						</div>
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

					<Link
						to='/oferta'
						className='bg-amber-600 text-white px-5 py-2 rounded-lg hover:bg-amber-700 transition font-bold'>
						Wyceń event
					</Link>
				</div>

				{/* MOBILE BUTTON */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='md:hidden transition-transform duration-200 active:scale-90'>
					{isOpen ? <X size={26} /> : <Menu size={26} />}
				</button>
			</div>

			{/* MOBILE MENU */}
			<div
				className='md:hidden overflow-hidden'
				style={{
					maxHeight: isOpen ? '600px' : '0px',
					opacity: isOpen ? 1 : 0,
					transition: 'max-height 0.35s ease, opacity 0.25s ease',
				}}>
				<div className='px-6 pb-6 pt-4 space-y-4'>
					<div className='space-y-4 px-4 text-sm text-white/80'>
						<Link to='/oferta' className='block' onClick={() => setIsOpen(false)}>
							Konfigurator
						</Link>
						<Link to='/namiot-eventowy' className='block text-amber-600' onClick={() => setIsOpen(false)}>
							Namiot eventowy
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
						<Link to='/eventy-firmowe' className='block' onClick={() => setIsOpen(false)}>
							Eventy firmowe
						</Link>
						<Link to='/eventy-plenerowe' className='block' onClick={() => setIsOpen(false)}>
							Eventy plenerowe
						</Link>
						<Link to='/imprezy-urodzinowe' className='block' onClick={() => setIsOpen(false)}>
							Imprezy urodzinowe
						</Link>
					</div>
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
			</div>
		</nav>
	)
}
