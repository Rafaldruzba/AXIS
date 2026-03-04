import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
	const { pathname } = useLocation()

	useEffect(() => {
		// Przewija na samą górę z płynnym efektem lub natychmiast
		window.scrollTo(0, 0)
	}, [pathname]) // Uruchom za każdym razem, gdy zmienia się ścieżka (URL)

	return null
}
