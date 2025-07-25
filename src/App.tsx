import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import EnrollForTraining from './pages/EnrollForTraining';

function App() {
  return (
    <Router basename={import.meta.env.VITE_APP_BASE}>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/enroll-for-training" element={<EnrollForTraining />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;