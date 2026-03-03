import { useState } from 'react'

export default function InfoSection() {
	const [open, setOpen] = useState(null)

	const toggle = index => {
		setOpen(open === index ? null : index)
	}

	return (
		<section className='py-24 bg-white'>
			<div className='max-w-6xl mx-auto px-6 space-y-16'>
				{/* ===== INTRO ===== */}
				<div className='text-center max-w-4xl mx-auto'>
					<h2 className='text-4xl md:text-5xl font-bold mb-6'>Profesjonalna obsługa techniczna eventów</h2>
					<p className='text-gray-600 text-lg leading-relaxed'>
						Axis Events to nowoczesna wypożyczalnia eventowa specjalizująca się w nagłośnieniu, oświetleniu scenicznym
						oraz kompleksowej realizacji technicznej wydarzeń. Obsługujemy koncerty, wesela, imprezy firmowe,
						konferencje i eventy plenerowe na najwyższym poziomie.
					</p>
				</div>

				{/* ===== SEKCJA 1 ===== */}
				<div className='grid md:grid-cols-2 gap-16 items-center'>
					<img
						src='https://images.unsplash.com/photo-1506157786151-b8491531f063'
						alt='Profesjonalne nagłośnienie eventowe - scena koncertowa'
						className='rounded-2xl shadow-xl object-cover h-[300px] w-full'
					/>

					<div>
						<h3 className='text-3xl font-semibold mb-6'>Kompleksowa wypożyczalnia sprzętu eventowego</h3>
						<p className='text-gray-700 leading-relaxed mb-6'>
							Zapewniamy profesjonalne systemy nagłośnienia dopasowane do skali wydarzenia. Od kameralnych konferencji
							po duże eventy plenerowe – dobieramy sprzęt tak, aby zapewnić perfekcyjną jakość dźwięku.
						</p>
						<p className='text-gray-700 leading-relaxed'>
							Nasza oferta obejmuje kolumny liniowe, subwoofery, miksery, mikrofony bezprzewodowe oraz pełną obsługę
							techniczną podczas wydarzenia.
						</p>
					</div>
				</div>

				{/* ===== SEKCJA 2 ===== */}
				<div className='grid md:grid-cols-2 gap-16 items-center'>
					<div className='order-2 md:order-1'>
						<h3 className='text-3xl font-semibold mb-6'>Oświetlenie sceniczne budujące klimat</h3>
						<p className='text-gray-700 leading-relaxed mb-6'>
							Nowoczesne oświetlenie LED, ruchome głowy typu beam i wash oraz systemy sterowania DMX pozwalają stworzyć
							wyjątkową oprawę wizualną.
						</p>
						<p className='text-gray-700 leading-relaxed'>
							Projektujemy scenografie świetlne dopasowane do charakteru wydarzenia, budując emocje i podkreślając
							najważniejsze momenty.
						</p>
					</div>

					<img
						src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745'
						alt='Oświetlenie sceniczne LED podczas koncertu'
						className='rounded-2xl shadow-xl object-cover h-[300px] w-full order-1 md:order-2'
					/>
				</div>

				{/* ===== SEKCJA 3 ===== */}
				<div className='grid md:grid-cols-2 gap-16 items-center'>
					<img
						src='https://images.unsplash.com/photo-1515169067865-5387ec356754'
						alt='Realizacja techniczna wesela - scena i światło'
						className='rounded-2xl shadow-xl object-cover h-[300px] w-full'
					/>

					<div>
						<h3 className='text-3xl font-semibold mb-6'>Dlaczego warto wybrać Axis Events?</h3>
						<p className='text-gray-700 leading-relaxed mb-6'>
							Łączymy doświadczenie z nowoczesnym zapleczem technicznym. Dbamy o każdy etap realizacji – od projektu
							technicznego, przez montaż, po obsługę podczas trwania wydarzenia.
						</p>
						<ul className='space-y-3 text-gray-700'>
							<li>✔ Profesjonalny sprzęt eventowy</li>
							<li>✔ Terminowość i niezawodność</li>
							<li>✔ Indywidualne podejście do klienta</li>
							<li>✔ Kompleksowa obsługa techniczna</li>
						</ul>
					</div>
				</div>

				{/* ===== FAQ ACCORDION ===== */}
				<div className='max-w-3xl mx-auto'>
					<h3 className='text-3xl font-bold text-center mb-12'>Najczęściej zadawane pytania</h3>

					{[
						{
							question: 'Czy obsługujecie eventy plenerowe?',
							answer:
								'Tak, realizujemy zarówno małe wydarzenia prywatne, jak i duże eventy plenerowe z pełnym zapleczem technicznym.',
						},
						{
							question: 'Czy zapewniacie montaż i demontaż sprzętu?',
							answer:
								'Oczywiście. Zapewniamy transport, montaż, konfigurację oraz obsługę techniczną podczas całego wydarzenia.',
						},
						{
							question: 'Jak wyceniany jest event?',
							answer:
								'Cena zależy od skali wydarzenia, ilości sprzętu oraz zakresu obsługi. Każdą wycenę przygotowujemy indywidualnie.',
						},
					].map((item, index) => (
						<div key={index} className='border-b py-6 cursor-pointer' onClick={() => toggle(index)}>
							<div className='flex justify-between items-center'>
								<h4 className='text-lg font-semibold'>{item.question}</h4>
								<span className='text-2xl'>{open === index ? '−' : '+'}</span>
							</div>

							{open === index && <p className='mt-4 text-gray-600 leading-relaxed'>{item.answer}</p>}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
