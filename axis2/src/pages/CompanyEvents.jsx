import { Link } from 'react-router-dom'
import { Users, Briefcase, GlassWater, Layout } from 'lucide-react'

export default function CompanyEvents() {
	return (
		<div className='bg-[#fdfbf7] min-h-screen'>
			{/* HERO SECTION */}
			<section className='pt-40 pb-20 px-6'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div>
							<span className='text-amber-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block'>
								Business & Integration
							</span>
							<h1 className='text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none mb-8'>
								Kameralne <br />
								<span className='text-amber-500'>Eventy Firmowe.</span>
							</h1>
							<p className='text-gray-500 text-xl leading-relaxed mb-10 font-medium'>
								Specjalizujemy się w obsłudze mniejszych, prestiżowych integracji do 50 osób. Tworzymy ekskluzywne
								strefy barowe i namiotowe, gdzie biznes spotyka się z relaksem.
							</p>
							<Link
								to='/kontakt'
								className='inline-block bg-gray-900 text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-amber-500 hover:text-gray-900 transition-all shadow-xl'>
								Zapytaj o ofertę dla firm
							</Link>
						</div>
						<div className='relative'>
							<div className='aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white bg-gray-100'>
								<img
									src='https://images.unsplash.com/photo-1528605248644-14dd0d812396?auto=format&fit=crop&q=80'
									alt='Event firmowy Axis'
									className='w-full h-full object-cover'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* KONKRETNE ROZWIĄZANIA */}
			<section className='py-32 bg-white rounded-[4rem] shadow-sm'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='text-center mb-20'>
						<h2 className='text-4xl font-black tracking-tighter text-gray-900'>Rozwiązania dla Twojego zespołu</h2>
						<p className='text-gray-500 mt-4'>
							Zamieniamy nudne spotkania firmowe w widowiskowe wydarzenia z pełnym zapleczem technicznym.
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-12'>
						{/* Bar Firmowy */}
						<div className='p-12 rounded-[3rem] bg-[#fdfbf7] border border-gray-100 hover:shadow-xl transition-all'>
							<div className='w-14 h-14 rounded-2xl bg-amber-500 text-gray-900 flex items-center justify-center mb-8'>
								<GlassWater size={28} />
							</div>
							<h3 className='text-2xl font-black mb-4'>Mobilny Bar Premium</h3>
							<p className='text-gray-500 leading-relaxed font-medium mb-6'>
								Zapomnij o nudnych integracjach. Nasz bar to centrum dowodzenia każdą imprezą – od
								<strong> firmowych grilli po jubileusze</strong>. Serwujemy profesjonalne koktajle w oprawie, która
								buduje prestiż Twojego wydarzenia i rozkręca każdą rozmowę.
							</p>
							<p className='text-sm text-amber-600 font-black uppercase tracking-widest'>Pełny Serwis Barmański</p>
						</div>

						{/* Namiot Integracyjny */}
						<div className='p-12 rounded-[3rem] bg-[#fdfbf7] border border-gray-100 hover:shadow-xl transition-all'>
							<div className='w-14 h-14 rounded-2xl bg-gray-900 text-amber-500 flex items-center justify-center mb-8'>
								<Layout size={28} />
							</div>
							<h3 className='text-2xl font-black mb-4'>Twoja Baza w Plenerze</h3>
							<p className='text-gray-500 leading-relaxed font-medium mb-6'>
								Namiot o wymiarach <strong>9x6m</strong> to idealne miejsce dla ekipy
								<strong> do 50 osób</strong>. W dzień komfortowa strefa chillout, w nocy – dzięki naszemu audio 2.2 –
								prywatny klub, gdziekolwiek go postawimy. Czysto, stylowo i bez kompromisów.
							</p>
							<p className='text-sm text-amber-600 font-black uppercase tracking-widest'>Namiot + Audio + Światło</p>
						</div>
					</div>
				</div>
			</section>

			{/* SEO & CONTENT SECTION */}
			<section className='pb-32 pt-10 bg-[#fdfbf7]'>
				<div className='max-w-4xl mx-auto px-6'>
					<div className='space-y-12 text-center md:text-left'>
						<div>
							<h4 className='text-2xl font-black mb-4 tracking-tight'>Impreza, która nie jest tylko kolejnym mailem</h4>
							<p className='text-gray-500 leading-relaxed'>
								Najlepsze pomysły rodzą się w swobodnej atmosferze. Zamiast siedzenia przy stołach, oferujemy dynamiczną
								przestrzeń z profesjonalnym barem, która naturalnie zachęca do rozmów. Nasze rozwiązania techniczne to
								nie tylko sprzęt – to narzędzie do budowania zgranego zespołu w nowoczesnym, luźnym stylu.
							</p>
						</div>
						<div>
							<h4 className='text-2xl font-black mb-4 tracking-tight'>Integracja zespołowa do 50 osób</h4>
							<p className='text-gray-500 leading-relaxed'>
								Specjalizujemy się w obsłudze <strong>kameralnych spotkań biznesowych</strong>. Jeśli planujesz{' '}
								<strong>wyjazd integracyjny</strong>, szkolenie w plenerze lub po prostu chcesz podziękować pracownikom
								za udany kwartał, nasze rozwiązania techniczne zapewnią odpowiedni klimat. Namiot o powierzchni 54m²
								zapewnia idealny balans między przestrzenią a przytulną atmosferą.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
