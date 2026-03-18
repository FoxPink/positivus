import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'About us', href: '/about' },
    { name: 'Services', href: '#services' },
    { name: 'Use Cases', href: '#cases' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, href: string) => {
    e.preventDefault();
    
    // Nếu là link trang (như /about)
    if (href.startsWith('/')) {
      navigate(href);
      setIsOpen(false);
      return;
    }

    // Nếu là anchor link (#...)
    if (location.pathname !== '/') {
      // Nếu đang ở trang khác, quay về home rồi mới scroll
      navigate('/' + href);
    } else {
      if (window.lenis) {
        window.lenis.scrollTo(href, {
          offset: -80,
          duration: 1.5,
        });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="container py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleScroll(e as any, '/')}>
          <img src={Logo} alt="Positivus Logo" className="h-6 w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-lg hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <button 
            className="btn btn-outline"
            onClick={() => {
              if (location.pathname !== '/') navigate('/#contact');
              else window.lenis?.scrollTo('#contact', { offset: -80 });
            }}
          >
            Request a quote
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-grey py-6 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium"
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <button 
            className="btn btn-outline w-full"
            onClick={() => {
              if (location.pathname !== '/') navigate('/#contact');
              else window.lenis?.scrollTo('#contact', { offset: -80 });
              setIsOpen(false);
            }}
          >
            Request a quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
