import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar.jsx'
import Home from './pages/Home'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost'
import Footer from './components/Footer'
import Offer from './pages/Offer.jsx'
import Contact from './pages/Contact.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Weddings from './pages/Weddings.jsx'
import OutdoorEvents from './pages/OutdoorEvents.jsx'
import Realizations from './pages/Realizacje.jsx'
import RealizationPost from './pages/RealizacjePost.jsx'
import CompanyEvents from './pages/CompanyEvents.jsx'
import BdayEvents from './pages/BdayEvents.jsx'
import SoundAndLighting from './pages/SoundAndLighting.jsx'
import Bar from './pages/Bar.jsx'
import ScrollToTop from './components/ScrollToTop'
import './index.css'
import NotFound from './pages/NotFound.jsx'

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/blog/:slug' element={<BlogPost />} />
				<Route path='/o-nas' element={<AboutUs />} />
				<Route path='/oferta' element={<Offer />} />
				<Route path='/wesele' element={<Weddings />} />
				<Route path='/kontakt' element={<Contact />} />
				<Route path='/realizacje' element={<Realizations />} />
				<Route path='/strefa-barowa' element={<Bar />} />
				<Route path='/eventy-firmowe' element={<CompanyEvents />} />
				<Route path='/eventy-plenerowe' element={<OutdoorEvents />} />
				<Route path='/realizacje/:slug' element={<RealizationPost />} />
				<Route path='/imprezy-urodzinowe' element={<BdayEvents />} />
				<Route path='/naglosnienie-i-oswietlenie' element={<SoundAndLighting />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
