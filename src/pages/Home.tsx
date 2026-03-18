import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import CTA from '../components/sections/CTA';
import CaseStudies from '../components/sections/CaseStudies';
import WorkingProcess from '../components/sections/WorkingProcess';
import Team from '../components/sections/Team';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element && window.lenis) {
        // Wait a bit for the page to render
        setTimeout(() => {
          window.lenis?.scrollTo(hash, { offset: -80 });
        }, 100);
      } else if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <Services />
      <CTA />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
