import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Applications from './pages/Applications.jsx'
import Contact from './pages/Contact.jsx'
import RequestSample from './pages/RequestSample.jsx'
import NotFound from './pages/NotFound.jsx'

// Every page URL for the site lives here. Add a new <Route> + page file
// under src/pages/ any time a new page is needed.
export default function App() {
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
