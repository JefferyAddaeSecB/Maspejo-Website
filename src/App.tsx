import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact"  element={<Contact />} />
        {/* 404 fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="page-top" style={{
      minHeight: '70vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', flexDirection: 'column', gap: '1.5rem',
      textAlign: 'center', padding: '4rem 1rem',
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '5rem', fontWeight: 800,
        color: 'var(--color-primary)', lineHeight: 1,
      }}>404</div>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>
        Page Not Found
      </h1>
      <p style={{ color: 'var(--color-text-secondary)', maxWidth: 420 }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="btn btn--primary">
        Back to Home
      </a>
    </main>
  );
}
