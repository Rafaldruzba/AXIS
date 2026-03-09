import React from 'react'
import { Mail, Phone, Instagram, Facebook, MapPin, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom' // Jeśli używasz react-router

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='relative bg-zinc-950 border-t border-white/5 pt-20 pb-10 overflow-hidden'>
			{/* Subtelny gradient w tle */}
			<div className='absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent' />

			<div className='max-w-7xl mx-auto px-6'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
					{/* Brand Section */}
					<div className='space-y-6'>
						<div>
							<Link to='/' className='flex items-center gap-2'>
								{/* Zmieniliśmy h3 na span - wizualnie identycznie, technicznie poprawnie */}
								<span className='text-2xl font-black tracking-tighter text-white uppercase italic'>
									AXIS<span className='text-blue-500'>EVENTS</span>
								</span>
							</Link>
							<div className='h-1 w-12 bg-blue-600 mt-1' />
						</div>
						<p className='text-zinc-400 leading-relaxed max-w-xs'>
							Definiujemy nową jakość w technice eventowej. Od dźwięku po światło – tworzymy niezapomniane wrażenia.
						</p>
						<div className='flex gap-4'>
							{[
								{
									Icon: Instagram,
									label: 'Obserwuj nas na Instagramie',
									url: 'https://www.instagram.com/axis.events/',
								},
								{ Icon: Facebook, label: 'Dołącz do nas na Facebooku', url: 'https://www.facebook.com/axis.events' },
							].map(({ Icon, label, url }, i) => (
								<a
									key={i}
									href={url}
									target='_blank'
									rel='noopener noreferrer'
									aria-label={label} // TO NAPRAWIA BŁĄD Z SCREENSHOTA
									className='p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-blue-500/50 transition-all'>
									<Icon size={20} />
								</a>
							))}
						</div>
					</div>

					{/* Navigation */}
					<div>
						<p className='text-sm font-bold uppercase tracking-widest text-white mb-6'>Eksploruj</p>
						<ul className='space-y-4'>
							{['Home', 'O nas', 'Blog', 'Kontakt', 'Realizacje'].map(item => (
								<li key={item}>
									<Link
										to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
										className='text-zinc-400 hover:text-white flex items-center group transition-colors'>
										<ArrowUpRight
											size={14}
											className='mr-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all'
										/>
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services/Categories - opcjonalnie */}
					<div>
						<p className='text-sm font-bold uppercase tracking-widest text-white mb-6'>Usługi</p>
						<ul className='space-y-4 text-zinc-400'>
							{[
								{ to: '/naglosnienie-i-oswietlenie', label: 'Nagłośnienie i oświetlenie' },
								{ to: '/strefa-barowa', label: 'Strefa Barowa' },
								{ to: '/realizacje', label: 'Realizacje' },
								{ to: '/oferta', label: 'Konfigurator' },
								{ to: '/namiot-eventowy', label: 'Namiot Eventowy' }, // To chcemy wyróżnić
							].map((item, index) => {
								// Sprawdzamy, czy to nasz namiot
								const isTent = item.to === '/namiot-eventowy'

								return (
									<li key={index}>
										<Link
											to={item.to}
											className={`
                        transition-colors block w-fit cursor-pointer font-medium
                        ${
													isTent
														? 'text-amber-500 hover:text-amber-400' // Kolor dla namiotu
														: 'hover:text-white' // Standardowy hover dla reszty
												}
                    `}>
											{item.label}
											{/* Opcjonalnie: mała kropka przy wyróżnionym linku */}
											{isTent && <span className='ml-2 inline-block w-1 h-1 bg-amber-500 rounded-full animate-pulse' />}
										</Link>
									</li>
								)
							})}
						</ul>
					</div>
					{/* Contact Info */}
					<div className='space-y-6'>
						<p className='text-sm font-bold uppercase tracking-widest text-white mb-6'>Bądźmy w kontakcie</p>
						<div className='space-y-4'>
							<a
								href='mailto:hello.axis.events@gmail.com'
								className='flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group'>
								<div className='p-2 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all'>
									<Mail size={18} />
								</div>
								hello.axis.events@gmail.com
							</a>
							<a
								href='tel:+48791445104'
								className='flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group'>
								<div className='p-2 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all'>
									<Phone size={18} />
								</div>
								+48 791 445 104
							</a>
							<a
								href='tel:+48502190862'
								className='flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group'>
								<div className='p-2 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all'>
									<Phone size={18} />
								</div>
								+48 502 190 862
							</a>
							<div className='flex items-center gap-3 text-zinc-400'>
								<div className='p-2 rounded-lg bg-purple-500/10 text-purple-500'>
									<MapPin size={18} />
								</div>
								Warszawa / Cała Polska
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='pt-10 border-t border-white/5 flex flex-col md:row gap-6 items-center justify-between'>
					<p className='text-zinc-500 text-sm'>
						© {currentYear} <span className='text-zinc-300 font-medium'>AXIS EVENTS</span>. Projekt i realizacja:{' '}
						<span className='text-zinc-300'>
							<a href='https://emarika.pl'>
								<span className='text-red-500'>e</span>Marika
							</a>
						</span>
					</p>
					<div className='flex gap-8 text-sm text-zinc-500'>
						<a
							href='/polityka-prywatnosci-i-ciasteczka-cookies.pdf'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-white transition-colors'>
							Polityka prywatności
						</a>
						<a
							href='/regulamin.pdf'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-white transition-colors'>
							Regulamin
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
