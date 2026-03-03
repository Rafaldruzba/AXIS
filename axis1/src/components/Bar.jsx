import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Award, Calculator, Check, GlassWater, Zap } from 'lucide-react'
import Footer from './Footer'
import barIMG from '../img/bar-img.webp'

const Bar = ({ setScene, addToCart }) => {
	const barVariants = {
		initial: { x: '-100%', opacity: 1 },
		animate: { x: 0, opacity: 1 },
		exit: { x: '-100%', opacity: 1 },
	}

	const pakiety = [
		{
			category: 'BAR',
			nazwa: 'Basic',
			cena: 1500,
			cechy: [
				'Obsługa barmańska (6h)',
				'Ekologiczne naczynia Premium (Safe Party)',
				'Karta 5 klasycznych drinków',
				'Designerska oprawa wizualna baru',
				'Doradztwo w zakupie alkoholu',
			],
			icon: <GlassWater className='text-amber-400' />,
		},
		{
			category: 'BAR',
			nazwa: 'Standard',
			cena: 2500,
			cechy: [
				'Obsługa barmańska (8h)',
				'Karta drinków dopasowana do gości',
				'Szeroka gama syropów i świeżych dodatków',
				'Szoty!',
				'Nastrojowe oświetlenie strefy barowej',
			],
			icon: <Zap className='text-yellow-500' />,
			rekomendowany: true,
		},
		{
			category: 'BAR',
			nazwa: 'Tepee Exclusive VIP',
			cena: 4000,
			cechy: [
				'Obsługa 2 barmanów (10h)',
				'Ekskluzywne szkło koktajlowe (Kryształ/Szkło)',
				'Nielimitowane dodatki (owoce egzotyczne, zioła)',
				'Dedykowane Menu Premium (Signature Drinks)',
				'Pełna logistyka: lód, rurki, dodatki "no-limit"',
			],
			icon: <Award className='text-amber-300' />,
		},
	]

	return (
		<motion.section
			variants={barVariants}
			initial='initial'
			animate='animate'
			exit='exit'
			transition={{ type: 'tween', duration: 0.5 }}
			className='absolute inset-0 bg-zinc-950 overflow-y-auto custom-scrollbar'>
			{/* HERO SECTION */}
			<div className='relative min-h-screen w-full flex flex-col justify-center px-6 md:px-24 py-20'>
				<div
					className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40'
					style={{
						backgroundImage: `url(${barIMG})`,
					}}
				/>
				<div className='absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent' />

				<div className='relative z-10 max-w-2xl'>
					{/* ZMIANA: text-amber-500 i glow */}
					<h2 className='text-7xl md:text-8xl font-black uppercase text-amber-500 tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]'>
						Bar LED
					</h2>
					<p className='text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed'>
						Profesjonalna Strefa Barowa – Elegancja, którą poczujesz Planujesz 18-nastkę, poprawiny, czy elegancki event
						w ogrodzie? Nasz bar to coś więcej niż blat. To starannie zaprojektowana przestrzeń, która nadaje imprezie
						prestiżu.
					</p>

					<button
						onClick={() => setScene('inside', 1)}
						className='flex w-fit items-center gap-3 text-lg font-bold border-2 border-amber-500/30 px-8 py-3 rounded-full hover:bg-amber-600 hover:border-amber-600 text-white transition-all group'>
						POWRÓT DO NAMIOTU <ArrowRight className='group-hover:translate-x-2 transition-transform' />
					</button>
				</div>
				{/* Podpowiedź scrollowania */}
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ repeat: Infinity, duration: 2 }}
					className='absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 flex flex-col items-center gap-2 cursor-pointer group z-20'>
					<span className='text-[10px] uppercase tracking-widest font-bold group-hover:text-blue-400 transition-colors'>
						Poznaj nas lepiej
					</span>
					<ArrowDown size={20} className='group-hover:text-blue-400 transition-colors' />
				</motion.div>
			</div>

			{/* SEKCJA PAKIETÓW */}
			<div className='relative z-10 bg-zinc-950 px-6 py-24 shadow-[0_-50px_100px_rgba(0,0,0,0.9)]'>
				<div className='max-w-6xl mx-auto'>
					<div className='text-center mb-16'>
						<h3 className='text-4xl font-bold uppercase mb-4 text-white'>Wybierz swój pakiet</h3>
						<p className='text-gray-400 mb-2'>Kliknij by dodać do konfiguratora</p>
						{/* ZMIANA: pasek na amber */}
						<div className='h-1 w-24 bg-amber-500 mx-auto rounded-full' />
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{pakiety.map((pakiet, index) => (
							<div
								onClick={() => addToCart({ category: pakiet.category, name: pakiet.nazwa, price: pakiet.cena })}
								key={index}
								className={`relative p-8 rounded-3xl border transition-all duration-300 cursor-pointer group
                                    ${
																			pakiet.rekomendowany
																				? 'border-amber-500 bg-amber-500/10 shadow-[0_0_30px_rgba(245,158,11,0.1)]'
																				: 'border-white/10 bg-white/5 hover:border-amber-500/50'
																		}`}>
								{pakiet.rekomendowany && (
									<span className='absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest'>
										BESTSELLER
									</span>
								)}
								<div className='mb-6 transform group-hover:scale-110 transition-transform'>{pakiet.icon}</div>
								<h4 className='text-2xl font-bold mb-2 text-white'>{pakiet.nazwa}</h4>
								<div className='text-3xl font-black text-amber-500 mb-6'>{pakiet.cena} zł</div>

								<ul className='space-y-4 mb-8 flex-grow'>
									{pakiet.cechy.map((cecha, i) => (
										<li key={i} className='flex items-start gap-3 text-sm text-gray-300'>
											<Check size={16} className='text-amber-500 mt-0.5 shrink-0' />
											{cecha}
										</li>
									))}
								</ul>

								<button
									onClick={e => {
										e.stopPropagation()
										setScene('contact')
									}}
									className={`w-full py-3 rounded-xl font-black uppercase text-[10px] tracking-widest border transition-all
                                        ${
																					pakiet.rekomendowany
																						? 'bg-amber-500 text-black border-amber-500 hover:bg-white hover:border-white'
																						: 'border-white/20 text-white hover:border-amber-500 hover:text-amber-500'
																				}`}>
									ZAPYTAJ O TERMIN
								</button>
							</div>
						))}
					</div>
					<div className='mt-8 p-4 bg-zinc-900 border border-amber-500/30 rounded-xl'>
						<h4 className='text-amber-400 font-bold mb-2 flex items-center'>
							<Calculator className='mr-2' size={20} />
							Ile wydasz na alkohol? (Szacunkowy koszt)
						</h4>
						<p className='text-zinc-300 text-sm leading-relaxed'>
							Przy imprezie na **30 osób**, korzystając z naszego doradztwa i zakupów we własnym zakresie, średni koszt
							bazy alkoholowej (wódka, gin, rum, prosecco, itp.) to ok. **800 – 1100 zł**. Dzięki temu całkowity koszt
							profesjonalnego baru z obsługą jest nawet o **50% niższy** niż w lokalu!
						</p>
						<p className='text-zinc-500 text-xs mt-2 italic'>
							*Wyliczenie orientacyjne na podstawie średnich cen rynkowych. Dokładną listę zakupów przygotujemy dla
							Ciebie po rezerwacji terminu.
						</p>
					</div>

					{/* JAK TO WYGLĄDA */}
					<div className='mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
						<div>
							<h3 className='text-3xl font-bold mb-6 uppercase text-white'>Jak to wygląda?</h3>
							<div className='space-y-8'>
								{[
									{
										t: 'Montaż:',
										d: 'Montaż i aranżacja: Przyjeżdżamy min. 120 minut przed imprezą. Instalujemy bar w dowolnie wybranej lokalizacji i zajmujemy się pełną konfiguracją stanowiska. Dbamy o to, aby oprawa wizualna baru – w tym efekty świetlne – idealnie współgrała z motywem przewodnim Twojej imprezy. Ty wskazujesz miejsce, my zajmujemy się resztą.',
									},
									{
										t: 'Profesjonalna Obsługa:',
										d: 'Nasi barmani to pasjonaci, którzy miksują drinki z pasją i uśmiechem. To nie tylko obsługa – to gwarancja dobrej energii, widowiskowego serwisu i interakcji z gośćmi, która sprawi, że bar stanie się ulubionym punktem Twojej imprezy.',
									},
									{
										t: 'Kompleksowa Logistyka:',
										d: 'Zapewniamy pełne zaplecze: od kruszonego lodu i świeżych owoców, po profesjonalne szkło i akcesoria. Ty dostarczasz bazę, a my zajmujemy się całą resztą – łącznie z utrzymaniem czystości strefy barowej, byś Ty mógł skupić się wyłącznie na zabawie.',
									},
								].map((item, i) => (
									<div key={i} className='flex gap-4'>
										<div className='w-12 h-12 shrink-0 bg-amber-500 text-black rounded-full flex items-center justify-center font-black text-xl shadow-[0_0_15px_rgba(245,158,11,0.3)]'>
											{i + 1}
										</div>
										<p className='text-gray-400'>
											<strong className='text-amber-500 block uppercase text-xs tracking-widest mb-1'>{item.t}</strong>
											{item.d}
										</p>
									</div>
								))}
							</div>
						</div>
						<div className='relative group'>
							<div className='absolute -inset-2 bg-amber-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity' />
							<div className='relative rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-500/5'>
								<img
									src='https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=80'
									alt='Barman przy pracy'
									className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</motion.section>
	)
}

export default Bar
