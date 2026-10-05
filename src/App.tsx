import { Navigate, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
// import Gallery from './pages/Gallery';
import Training from './pages/Training';
import NotFound from './pages/NotFound';

/** Routes and layout. The router is supplied by main.tsx (browser) or entry-server.tsx (pre-render). */
function App() {
  return (
    <>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            <Route path="/training" element={<Training />} />
            {/* Old address, kept so shared links still work */}
            <Route path="/enroll-for-training" element={<Navigate to="/training" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
