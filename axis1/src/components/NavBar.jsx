const NavBar = ({ setScene }) => {
	return (
		<nav className='fixed top-0 w-full z-[110] flex justify-between items-center p-6 bg-gradient-to-b from-black/80 to-transparent'>
			<div className='text-2xl font-bold tracking-tighter cursor-pointer' onClick={() => setScene('entrance')}>
				AXIS.<span className='text-blue-500'>events</span>
			</div>
			<div className='flex gap-4 md:gap-8 uppercase text-[12px] md:text-sm tracking-widest'>
				<button onClick={() => setScene('entrance')} className='hover:text-blue-400 transition cursor-pointer'>
					Start
				</button>
				<button onClick={() => setScene('inside')} className='hover:text-blue-400 transition cursor-pointer'>
					Środek
				</button>
				{/* Ten przycisk jest kluczowy */}
				<button
					onClick={() => setScene('contact')}
					className='bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition cursor-pointer'>
					Kontakt
				</button>
			</div>
		</nav>
	)
}

export default NavBar
