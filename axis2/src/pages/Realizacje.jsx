export default function Realizacje() {
	const projects = [
		{
			title: 'Koncert plenerowy – 800 osób',
			type: 'Event plenerowy',
			description:
				'Kompleksowa realizacja techniczna koncertu plenerowego obejmująca system nagłośnienia liniowego, oświetlenie sceniczne typu beam i wash oraz zasilanie agregatem.',
		},
		{
			title: 'Wesele – 150 osób',
			type: 'Obsługa weselna',
			description:
				'Nagłośnienie sali, oświetlenie parkietu, podświetlany bar oraz oprawa świetlna dopasowana do klimatu przyjęcia.',
		},
		{
			title: 'Gala firmowa',
			type: 'Event firmowy',
			description:
				'Pełna obsługa techniczna konferencji z nagłośnieniem, mikrofonami bezprzewodowymi oraz eleganckim oświetleniem sceny.',
		},
	]

	return (
		<div className='pt-32 pb-24 px-6 max-w-7xl mx-auto'>
			<h1 className='text-5xl font-bold text-center mb-6'>Nasze realizacje eventowe</h1>

			<p className='text-center max-w-3xl mx-auto text-gray-600 mb-20'>
				Axis Events to profesjonalna wypożyczalnia eventowa specjalizująca się w kompleksowej obsłudze technicznej
				wydarzeń – od kameralnych przyjęć po duże eventy plenerowe.
			</p>

			<div className='grid md:grid-cols-3 gap-10'>
				{projects.map((project, index) => (
					<div
						key={index}
						className='bg-white rounded-2xl shadow-md p-8 hover:shadow-2xl transition duration-500 hover:-translate-y-2'>
						<h2 className='text-2xl font-bold mb-2'>{project.title}</h2>
						<p className='text-orange-500 mb-4'>{project.type}</p>
						<p className='text-gray-700'>{project.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}
