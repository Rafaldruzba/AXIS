import './index.css'
import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import NavBar from './components/NavBar'
// import Home from './components/Home'
import Bar from './components/Bar'
import Speakers from './components/Speakers'
import Contact from './components/Contact'
import Inside from './components/Inside'
import Landing from './components/Landing'
import ChatAssistant from './bot/ChatAssistant'

const sharedVariants = {
	initial: dir => ({
		x: dir > 0 ? '100%' : dir < 0 ? '-100%' : 0,
		opacity: 0,
		scale: dir === 0 ? 1.1 : 1,
	}),
	animate: {
		x: 0,
		opacity: 1,
		scale: 1,
		transition: { duration: 0.3, ease: 'circOut' },
	},
	exit: dir => ({
		x: dir > 1 ? '-100%' : dir < 0 ? '100%' : 0, // Zmiana dir > 0 na dir > 1 dla logiki powrotu
		opacity: 0,
		scale: dir === 0 ? 1.2 : 1,
		transition: { duration: 0.3, ease: 'circIn' },
	}),
}

const App = () => {
	const [scene, setScene] = useState('entrance')
	const [direction, setDirection] = useState(0) // 1: w prawo, -1: w lewo, 0: zoom
	const [cart, setCart] = useState([]) // Tu trzymamy wybrane pakiety
	const [isChatOpen, setIsChatOpen] = useState(false)

	const addToCart = item => {
		// Unikamy duplikatów w tej samej kategorii (np. nie można mieć dwóch barów)
		setCart(prev => {
			const filtered = prev.filter(i => i.category !== item.category)
			return [...filtered, item]
		})
		setIsChatOpen(true)
	}
	const removeFromCart = index => {
		setCart(prev => prev.filter((_, i) => i !== index))
	}

	const changeScene = (newScene, dir) => {
		setDirection(dir)
		setScene(newScene)
	}

	return (
		<div className='relative h-screen w-full bg-black overflow-hidden text-white font-sans'>
			<NavBar setScene={s => changeScene(s, 0)} />

			<AnimatePresence custom={direction} mode='popLayout'>
				{scene === 'entrance' && <Landing key='landing' setScene={changeScene} variants={sharedVariants} />}
				{scene === 'inside' && (
					<Inside
						key='inside'
						setScene={changeScene}
						addToCart={addToCart}
						custom={direction}
						variants={sharedVariants}
					/>
				)}
				{scene === 'bar' && (
					<Bar key='bar' setScene={changeScene} addToCart={addToCart} custom={direction} variants={sharedVariants} />
				)}
				{scene === 'speakers' && (
					<Speakers
						key='speakers'
						setScene={changeScene}
						addToCart={addToCart}
						custom={direction}
						variants={sharedVariants}
					/>
				)}
				{scene === 'contact' && <Contact key='contact' setScene={s => changeScene(s, 0)} cart={cart} />}
			</AnimatePresence>
			<ChatAssistant
				cart={cart}
				isOpen={isChatOpen}
				setIsOpen={setIsChatOpen}
				addToCart={addToCart}
				removeFromCart={removeFromCart}
				setScene={s => changeScene(s, 0)}
			/>
		</div>
	)
}

export default App
