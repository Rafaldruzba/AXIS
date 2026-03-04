import Hero from '../components/Hero'
import BlogSection from '../components/BlogSection'
import InfoSection from '../components/InfoSection'
import EventTypesSection from '../components/EventTypesSection'
import GallerySection from '../components/GalleryCarousel'
import Contact from '../pages/Contact'
export default function Home() {
	return (
		<>
			<Hero />
			<EventTypesSection />
			<BlogSection />
			<GallerySection />
			<InfoSection />
			<Contact />
		</>
	)
}
