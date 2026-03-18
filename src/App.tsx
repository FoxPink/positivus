import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/sections/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import PricingPage from './pages/Pricing';
import BlogPage from './pages/Blog';
import Lenis from '@studio-freight/lenis';

// Declare a global variable for Lenis to be accessed from other components
declare global {
  interface Window {
    lenis: Lenis | undefined;
  }
}

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. Reset scroll to top on page change (if no hash)
    if (!hash) {
      window.scrollTo(0, 0);
      window.lenis?.scrollTo(0, { immediate: true });
    }

    // 2. Tell Lenis to re-calculate page dimensions
    // This is crucial because different pages have different heights
    const timer = setTimeout(() => {
      window.lenis?.resize();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    window.lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = undefined;
    };
  }, []);

  return (
    <Router>
      <ScrollManager />
      <div className="min-h-screen font-space overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
