import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href.startsWith('/')) {
      navigate(href);
    } else {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        window.lenis?.scrollTo(href, { offset: -80 });
      }
    }
  };

  return (
    <footer className="bg-dark text-white pt-20 pb-10 rounded-t-[45px] mt-[70px]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleLinkClick(e, '/')}>
            <img src={Logo} alt="Positivus Logo" className="h-8 w-auto brightness-0 invert" />
          </div>

          <nav className="flex flex-wrap gap-6 md:gap-12">
            {[
              { name: 'About us', href: '/about' },
              { name: 'Services', href: '/services' },
              { name: 'Use Cases', href: '#cases' },
              { name: 'Pricing', href: '/pricing' },
              { name: 'Blog', href: '/blog' },
            ].map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-lg hover:text-primary transition-colors border-b border-transparent hover:border-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-dark hover:bg-primary transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex flex-col gap-6">
            <h4 className="inline-block px-2 bg-primary rounded-md text-dark text-xl font-medium w-fit">
              Contact us:
            </h4>
            <div className="flex flex-col gap-2 text-lg">
              <p>Email: aduy000@mail.com</p>
              <p>Phone: +84 xxx xxx xxx</p>
              <p>Address: Thủ Đức, Hồ Chí Minh</p>
            </div>
          </div>

          <div className="bg-[#292A32] p-8 md:p-[58px_40px] rounded-[14px] flex flex-col md:flex-row gap-5 md:gap-5 w-full md:w-[634px] md:h-[184px] items-center">
            <input
              type="email"
              placeholder="Email"
              className="w-full md:w-[285px] h-[67px] bg-transparent border border-white rounded-[14px] p-[22px_35px] text-white text-[18px] leading-[23px] font-space focus:outline-none focus:border-primary transition-colors placeholder:text-white"
            />
            <button className="flex flex-row justify-center items-center p-[20px_35px] gap-[10px] w-full md:w-[249px] h-[68px] bg-primary rounded-[14px] text-dark text-[20px] leading-[28px] font-space font-normal flex-none order-1 grow-0 whitespace-nowrap hover:bg-opacity-90 transition-all">
              Subscribe to news
            </button>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-lg opacity-80">
          <div className="flex gap-4">
            <span>&copy; 2026 Positivus - by FoxPink</span>
            <a href="#" className="underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
