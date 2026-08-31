import { useEffect } from 'react'
// import { Routes, Route } from 'react-router-dom'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Applications from './pages/Applications.jsx'
import Contact from './pages/Contact.jsx'
import RequestSample from './pages/RequestSample.jsx'
import Terms from './pages/Terms.jsx'
import Privacy from './pages/Privacy.jsx'
import NotFound from './pages/NotFound.jsx'

import AOS from 'aos'
import 'aos/dist/aos.css'

// Every page URL for the site lives here. Add a new <Route> + page file
// under src/pages/ any time a new page is needed.
export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Refresh AOS animations after route changes to bind scroll listeners to new DOM elements
    const timer = setTimeout(() => {
      AOS.refreshHard()
    }, 100)
    
    return () => clearTimeout(timer)
  }, [location.pathname, location.search])

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false, // ensures all scroll animations trigger whenever scrolled into view
      offset: 50,
      easing: 'ease-out-cubic',
    })

    const onPageLoad = () => {
      AOS.refreshHard()
    }
    
    window.addEventListener('load', onPageLoad)
    return () => window.removeEventListener('load', onPageLoad)
  }, [])

  return (
    <div className="site">
      <Navbar />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-sample" element={<RequestSample />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
