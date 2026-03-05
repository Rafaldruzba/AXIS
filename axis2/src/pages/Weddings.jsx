import { Link } from 'react-router-dom'
import { Wine, Tent, Stars, Coffee } from 'lucide-react'

export default function Weddings() {
	return (
		<div className='bg-[#fdfbf7] min-h-screen'>
			{/* HERO SECTION */}
			<section className='pt-40 pb-10 px-6'>
				<div className='max-w-7xl mx-auto'>
					<div className='text-center max-w-3xl mx-auto mb-20'>
						<span className='text-amber-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block'>
							Strefy Dodatkowe
						</span>
						<h1 className='text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none mb-8'>
							Podnieś Standard <br />
							<span className='text-amber-500'>Twojego Wesela.</span>
						</h1>
						<p className='text-gray-500 text-lg font-medium leading-relaxed'>
							Nie zajmujemy się oprawą całej sali, ale tworzymy to, co goście wspominają najlepiej – luksusowe strefy
							barowe i plenerowe przestrzenie chillout.
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-8'>
						{/* Karta: Mobilny Bar */}
						<div className='group bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500'>
							<div className='flex justify-between items-start mb-12'>
								<div className='w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center'>
									<Wine size={32} />
								</div>
								<span className='text-[10px] font-black text-gray-400 uppercase tracking-widest'>
									Najczęściej wybierane
								</span>
							</div>
							<h2 className='text-3xl font-black text-gray-900 mb-4'>Prestiżowy Bar Mobilny</h2>
							<p className='text-gray-500 mb-8 leading-relaxed font-medium'>
								Nasze podświetlane bary LED to nie tylko miejsce serwowania drinków, ale designerski element
								dekoracyjny, który ożywi każdy ogród weselny lub taras.
							</p>
							<Link
								to='/strefa-barowa'
								className='text-amber-600 font-black uppercase text-xs tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all'>
								Zobacz konfigurację baru <span>→</span>
							</Link>
						</div>

						{/* Karta: Namioty i Chillout */}
						<div className='group bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500'>
							<div className='flex justify-between items-start mb-12'>
								<div className='w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center'>
									<Tent size={32} />
								</div>
								<span className='text-[10px] font-black text-gray-400 uppercase tracking-widest'>
									Atrakcja Zewnętrzna
								</span>
							</div>
							<h2 className='text-3xl font-black text-gray-900 mb-4'>Strefa Chillout & VIP</h2>
							<p className='text-gray-500 mb-8 leading-relaxed font-medium'>
								Potrzebujesz dodatkowej przestrzeni? Nasze namioty eventowe idealnie sprawdzają się jako strefy
								wypoczynku, dając gościom chwilę wytchnienia w eleganckich warunkach.
							</p>
							<Link
								to='/oferta'
								className='text-amber-600 font-black uppercase text-xs tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all'>
								Sprawdź nasze namioty <span>→</span>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* SEKCJA SEO / CONTENT */}
			<section className='pb-16 bg-[#fdfbf7]'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='border-t border-gray-200 pt-20'>
						<div className='grid lg:grid-cols-3 gap-16'>
							<div>
								<h4 className='font-black text-gray-900 uppercase tracking-widest text-xs mb-6'>
									Ekskluzywny Bar Mobilny
								</h4>
								<p className='text-gray-500 text-sm leading-relaxed'>
									Szukasz unikalnej <strong>atrakcji na wesele</strong>? Nasz{' '}
									<strong>mobilny bar z podświetleniem LED</strong> to idealne rozwiązanie. Zapewniamy profesjonalną
									infrastrukturę barową, która doskonale komponuje się z nowoczesnymi aranżacjami. Wynajem baru to
									gwarancja, że strefa drinków stanie się sercem Twojego przyjęcia plenerowego.
								</p>
							</div>

							<div>
								<h4 className='font-black text-gray-900 uppercase tracking-widest text-xs mb-6'>
									Namioty i Strefy Chillout
								</h4>
								<p className='text-gray-500 text-sm leading-relaxed'>
									Od relaksu po szaleństwo na parkiecie. Nasze namioty to nie tylko ochrona przed deszczem, to serce
									Twojej imprezy. Realizujemy zarówno klimatyczne strefy wypoczynku, jak i profesjonalne przestrzenie
									klubowe z potężnym basem i dynamicznym światłem. My to stawiamy, my to konfigurujemy – Ty decydujesz,
									jaki klimat ma panować w środku.
								</p>
							</div>

							<div>
								<h4 className='font-black text-gray-900 uppercase tracking-widest text-xs mb-6'>
									Profesjonalna Technika
								</h4>
								<p className='text-gray-500 text-sm leading-relaxed'>
									Jako eksperci od <strong>technicznej obsługi eventów</strong>, dbamy o to, aby każda strefa barowa i
									namiotowa posiadała bezpieczne zasilanie i estetyczne okablowanie. Wybierając Axis Events, stawiasz na{' '}
									<strong>wynajem sprzętu eventowego</strong> najwyższej klasy. Działamy kompleksowo: od transportu,
									przez szybki montaż, aż po wsparcie techniczne podczas trwania uroczystości.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SEKTA "DLACZEGO WARTO?" */}
			<section className='py-24 bg-white'>
				<div className='max-w-5xl mx-auto px-6'>
					<div className='bg-gray-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden'>
						<div className='relative z-10 grid md:grid-cols-2 gap-12'>
							<div>
								<h2 className='text-3xl md:text-4xl font-black text-white mb-6 tracking-tight'>Dlaczego Axis?</h2>
								<p className='text-gray-400 leading-relaxed font-light'>
									Większość firm oferuje "wszystko". My oferujemy **specjalizację**. Skupiamy się na technicznej
									perfekcji stref zewnętrznych, byś Ty mógł cieszyć się imprezą.
								</p>
							</div>
							<div className='grid grid-cols-1 gap-6'>
								<div className='flex items-center gap-4 text-white font-bold'>
									<Stars className='text-amber-500' size={20} /> Design dopasowany do sali
								</div>
								<div className='flex items-center gap-4 text-white font-bold'>
									<Coffee className='text-amber-500' size={20} /> Komfortowa strefa odpoczynku
								</div>
								<div className='flex items-center gap-4 text-white font-bold'>
									<Wine className='text-amber-500' size={20} /> Profesjonalne zaplecze barowe
								</div>
							</div>
						</div>
						{/* Dekoracja */}
						<div className='absolute -left-20 -bottom-20 w-64 h-64 bg-amber-500 opacity-10 rounded-full blur-3xl'></div>
					</div>

					<div className='mt-16 text-center'>
						<h3 className='text-2xl font-black text-gray-900 mb-4'>Ważna informacja</h3>
						<p className='text-gray-500 max-w-2xl mx-auto font-medium'>
							Pamiętaj: nie zapewniamy pełnej organizacji wesel (sala, catering). Dostarczamy **wyłącznie infrastrukturę
							barową i namiotową**, stanowiącą dodatkową atrakcję Twojego wydarzenia.
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}
