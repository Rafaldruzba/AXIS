import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, X, Zap, Check, Trash2 } from 'lucide-react'

const ChatAssistant = ({ cart, isOpen, setIsOpen, addToCart, removeFromCart, setScene }) => {
	const tentInCart = cart.find(item => item.category === 'NAMIOT')

	// 1. Dokładne sprawdzenie obecności usług dodatkowych
	const maBar = cart.some(item => item.category === 'BAR')
	const maAudio = cart.some(item => item.category === 'AUDIO')

	// 2. Logika obliczania progu rabatowego
	let naleznyRabat = 0
	if (maBar && maAudio) {
		naleznyRabat = 20
	} else if (maBar || maAudio) {
		naleznyRabat = 10
	}

	// 3. Wykrywanie aktualnego rabatu zapisanego w nazwie produktu w koszyku
	const aktualnyRabatWNazwie = tentInCart?.name.includes('%') ? parseInt(tentInCart.name.match(/\d+/)[0]) : 0

	// 4. Ustalenie ceny bazowej (żeby nie nadpisać 3800 kwotą 1500)
	const cenaBazowaNamiotu = tentInCart
		? tentInCart.price > 3000 || tentInCart.name.toUpperCase().includes('WEEKEND')
			? 3800
			: 1500
		: 1500

	const nowaCenaZRabatem = Math.round(cenaBazowaNamiotu * (1 - naleznyRabat / 100))

	// 5. Funkcja aktualizująca koszyk
	const updateDiscount = () => {
		const index = cart.findIndex(item => item.category === 'NAMIOT')
		if (index !== -1) {
			removeFromCart(index)
			// Małe opóźnienie dla stabilności Reacta
			setTimeout(() => {
				addToCart({
					category: 'NAMIOT',
					// Zachowujemy informację o typie namiotu w nazwie
					name:
						naleznyRabat > 0
							? `${cenaBazowaNamiotu === 3800 ? 'Namiot Weekend' : 'Namiot Party'} (Rabat ${naleznyRabat}%)`
							: cenaBazowaNamiotu === 3800
								? 'Namiot Weekend'
								: 'Namiot Party',
					price: nowaCenaZRabatem,
				})
			}, 20)
		}
	}

	const totalPrice = cart.reduce((sum, item) => {
		const price = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^\d.]/g, '')) : item.price
		return sum + (price || 0)
	}, 0)

	return (
		<div className='fixed bottom-6 right-6 z-[999]'>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: 20 }}
						className='absolute bottom-20 right-0 w-[320px] bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden'>
						<div className='bg-gradient-to-r from-blue-600 to-blue-400 p-6 flex justify-between items-center'>
							<div>
								<h3 className='font-black uppercase tracking-widest text-sm text-white'>Twój Event</h3>
								<p className='text-[10px] text-blue-100 uppercase font-bold opacity-80'>Konfiguracja na żywo</p>
							</div>
							<button onClick={() => setIsOpen(false)} className='text-white/50 hover:text-white transition-colors'>
								<X size={20} />
							</button>
						</div>

						<div className='p-6 max-h-[350px] overflow-y-auto flex flex-col gap-4 custom-scrollbar'>
							{cart.length === 0 ? (
								<p className='text-gray-500 text-center py-10 text-sm italic'>
									Twój koszyk jest pusty. <br /> Wybierz pakiety wewnątrz namiotu!
								</p>
							) : (
								<AnimatePresence mode='popLayout'>
									{cart.map((item, i) => {
										const getCategoryStyles = category => {
											switch (category?.toUpperCase()) {
												case 'AUDIO':
													return 'border-l-purple-500 bg-purple-500/5 text-purple-400'
												case 'BAR':
													return 'border-l-yellow-500 bg-yellow-500/5 text-yellow-500'
												case 'NAMIOT':
													return item.name.includes('%')
														? 'border-l-emerald-500 bg-emerald-500/5 text-emerald-400'
														: 'border-l-blue-500 bg-blue-500/5 text-blue-400'
												default:
													return 'border-l-blue-500 bg-blue-500/5 text-blue-400'
											}
										}
										const styles = getCategoryStyles(item.category)
										return (
											<motion.div
												key={`${item.name}-${i}`}
												layout
												className={`flex justify-between items-center p-3 rounded-2xl border border-white/5 border-l-4 shadow-xl group ${styles.split(' ')[0]} ${styles.split(' ')[1]}`}>
												<div className='flex-grow'>
													<p className={`text-[10px] font-black uppercase tracking-tighter ${styles.split(' ')[2]}`}>
														{item.category}
													</p>
													<p className='text-sm font-bold text-white'>{item.name}</p>
													<p className='font-black text-white/90 text-xs'>{item.price} zł</p>
												</div>
												<button
													onClick={() => removeFromCart(i)}
													className='ml-2 p-2 text-gray-500 hover:text-red-400 transition-all'>
													<Trash2 size={16} />
												</button>
											</motion.div>
										)
									})}
								</AnimatePresence>
							)}
						</div>

						{/* SEKCJA ASYSTENTA - LOGIKA NAPRAWIONA */}
						<div className='px-6 pb-4'>
							{(() => {
								// 1. Jeśli brak namiotu
								if (!tentInCart && cart.length > 0) {
									return (
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											className='p-4 rounded-2xl bg-blue-600/10 border border-blue-500/20'>
											<p className='text-[10px] font-black text-blue-400 uppercase'>Okazja!</p>
											<p className='text-xs my-2 text-white/80'>Dodaj namiot, aby otrzymać rabat na zestaw!</p>
											<button
												onClick={() => addToCart({ category: 'NAMIOT', name: 'Namiot Party', price: 1500 })}
												className='w-full py-2 bg-blue-600 text-white text-[10px] font-black rounded-xl'>
												DODAJ NAMIOT
											</button>
										</motion.div>
									)
								}

								// 2. Jeśli namiot jest, a rabat powinien być wyższy LUB niższy (aktualizacja)
								if (tentInCart && aktualnyRabatWNazwie !== naleznyRabat) {
									const jestLepiej = naleznyRabat > aktualnyRabatWNazwie
									return (
										<motion.div
											initial={{ scale: 0.9 }}
											animate={{ scale: 1 }}
											className={`p-4 rounded-2xl border ${jestLepiej ? 'bg-emerald-600/20 border-emerald-500/50' : 'bg-amber-600/20 border-amber-500/50'}`}>
											<div className='flex items-center gap-2 mb-1'>
												<Zap size={14} className={jestLepiej ? 'text-emerald-400' : 'text-amber-400'} />
												<p
													className={`text-[10px] font-black uppercase ${jestLepiej ? 'text-emerald-400' : 'text-amber-400'}`}>
													{jestLepiej ? 'Dostępny większy rabat!' : 'Aktualizacja ceny'}
												</p>
											</div>
											<p className='text-[11px] text-white/90 mb-3'>
												{jestLepiej
													? `Super! Teraz należy Ci się aż **${naleznyRabat}%** zniżki!`
													: `Zmieniłeś dodatki. Aktualny rabat to **${naleznyRabat}%**.`}
											</p>
											<button
												onClick={updateDiscount}
												className={`w-full py-2 text-white text-[10px] font-black rounded-xl uppercase transition-colors ${jestLepiej ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-amber-600 hover:bg-amber-500'}`}>
												{jestLepiej ? 'Odbierz zniżkę' : 'Przelicz koszyk'}
											</button>
										</motion.div>
									)
								}
								return null
							})()}
						</div>

						{cart.length > 0 && (
							<div className='p-6 bg-white/5 border-t border-white/5'>
								<div className='flex justify-between items-center mb-1'>
									<span className='text-gray-400 uppercase text-[10px] font-bold'>Zaoszczędzone:</span>
									<span className='text-sm font-black text-emerald-400'>
										{cenaBazowaNamiotu - (tentInCart?.price || 0)} zł
									</span>
								</div>
								<div className='flex justify-between items-center mb-4'>
									<span className='text-gray-400 uppercase text-[10px] font-bold'>Suma:</span>
									<span className='text-2xl font-black text-white'>{totalPrice.toLocaleString()} zł</span>
								</div>
								<button
									onClick={() => {
										setIsOpen(false)
										setScene('contact')
									}}
									className='w-full bg-white text-black py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-2'>
									<Check size={18} /> SPRAWDŹ DOSTĘPNOŚĆ
								</button>
							</div>
						)}
					</motion.div>
				)}
			</AnimatePresence>

			<motion.button
				onClick={() => setIsOpen(!isOpen)}
				whileHover={{ scale: 1.05 }}
				className='w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-2xl relative'>
				{isOpen ? <X size={28} /> : <ShoppingBag size={28} />}
				{cart.length > 0 && !isOpen && (
					<span className='absolute -top-1 -right-1 w-6 h-6 bg-blue-600 text-white rounded-full text-[10px] flex items-center justify-center font-black'>
						{cart.length}
					</span>
				)}
			</motion.button>
		</div>
	)
}

export default ChatAssistant
