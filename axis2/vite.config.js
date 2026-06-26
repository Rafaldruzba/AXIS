import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		Sitemap({
			hostname: 'https://axis-events.pl',
			dynamicRoutes: [
				'/blog',
				'/o-nas',
				'/oferta',
				'/wesele',
				'/kontakt',
				'/realizacje',
				'/strefa-barowa',
				'/eventy-firmowe',
				'/namiot-eventowy',
				'/eventy-plenerowe',
				'/imprezy-urodzinowe',
				'/naglosnienie-i-oswietlenie',
				'/realizacje/neon-spring',
				'/realizacje/wesele-29-maj',
				'/realizacje/wesele-pod-chmurka',
				'/realizacje/grill-majowka',
				'/blog/impreza-w-ogrodzie-organizacja',
				'/blog/ile-pradu-potrzebuje-impreza-plenerowa',
				'/blog/klubowy-klimat-po-40-i-50-trend',
				'/blog/nalewak-do-piwa-na-imprezie',
				'/blog/event-firmowy-w-plenerze-czy-sala',
			], // dopisz resztę swoich podstron
		}),
	],
	build: {
		cssCodeSplit: true,
	},
})
