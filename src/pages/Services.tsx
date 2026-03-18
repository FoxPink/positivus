import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import HeroImage from '../assets/Services.png'; 
import CTAIllustration from '../assets/Ready to Elevate Your Search Rankings.png';
import GrayStar from '../assets/Services/GrayStar.png';
import Services from '../components/sections/Services';
import CaseStudies from '../components/sections/CaseStudies';

type SEOProcessStep = { id: string; title: string; desc: string };

const seoProcess: SEOProcessStep[] = [
  { id: '01', title: 'Website Audit & Analysis', desc: 'We perform a comprehensive audit of your website to identify technical issues and optimization opportunities.' },
  { id: '02', title: 'Keyword Research & Strategy', desc: 'Our team researches high-intent keywords that will drive targeted traffic to your business.' },
  { id: '03', title: 'On-Page Optimization', desc: 'We optimize your website content, meta tags, and structure to improve search engine visibility.' },
  { id: '04', title: 'Content Creation & Optimization', desc: 'High-quality, SEO-friendly content is created to engage your audience and rank for key terms.' },
  { id: '05', title: 'Link Building', desc: 'We develop a strategic link-building campaign to increase your domain authority and rankings.' },
  { id: '06', title: 'Monitoring & Reporting', desc: 'Regular monitoring and detailed reporting ensure we track progress and refine strategies.' },
];

const ProcessItem = ({ item, index }: { item: SEOProcessStep; index: number }) => {
  const [isOpen, setIsOpen] = useState(index === 0);
  return (
    <div className={`rounded-[45px] border border-dark shadow-[0px_5px_0px_#191A23] px-8 md:px-[60px] py-8 md:py-[41px] transition-all duration-300 flex flex-col mb-6 ${isOpen ? 'bg-primary' : 'bg-grey'}`}>
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center gap-6 md:gap-10">
          <div className="relative flex items-center justify-center">
            <img src={GrayStar} alt="Star" className="w-12 h-12 md:w-16 md:h-16 brightness-0" />
            <span className="absolute text-xl md:text-2xl font-bold text-white">{item.id}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-medium">{item.title}</h3>
        </div>
        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-dark flex items-center justify-center bg-grey flex-shrink-0">
          {isOpen ? <Minus size={28} /> : <Plus size={28} />}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-[30px]">
              <div className="w-full h-[1px] bg-dark mb-8 opacity-20" />
              <p className="text-lg md:text-xl leading-relaxed text-dark">{item.desc}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="pt-[100px] md:pt-[150px]">
      {/* Hero Section */}
      <section className="mb-[140px]">
        <div className="container">
          <div className="bg-grey rounded-[45px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
            <div className="flex-1">
              <motion.img
                src={HeroImage}
                alt="Services Hero"
                className="w-full h-auto object-contain"
                initial={{ opacity: 0, scale: 0.9, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                loading="lazy"
              />
            </div>
            <div className="flex-1 space-y-8">
              <h1 className="text-5xl md:text-[60px] font-medium leading-tight">
                Expert Digital Marketing Services
              </h1>
              <p className="text-xl text-dark leading-relaxed max-w-xl">
                Boost your business with our data-driven marketing strategies tailored for success in the digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Banner Section (Upgraded Style) */}
      <section className="mb-[140px]">
        <div className="container">
          <div className="bg-dark rounded-[45px] p-12 md:p-20 relative overflow-hidden group">
            {/* Background Animations */}
            <motion.div 
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -right-20 -top-20 opacity-10 pointer-events-none"
            >
              <img src={GrayStar} alt="" className="w-[400px] h-[400px] invert" />
            </motion.div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="space-y-8 flex-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-[0px_0px_20px_rgba(185,255,102,0.3)]">
                    <img src={GrayStar} alt="SEO" className="w-6 h-6 brightness-0" />
                  </div>
                  <span className="text-primary font-bold tracking-widest uppercase text-sm md:text-base">
                    Premium SEO Services
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
                  Unlock your business potential with <span className="text-primary">Expert SEO</span>
                </h2>
                
                <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed font-space">
                  We don't just optimize for search engines; we optimize for humans and results. Get a custom strategy tailored to your industry.
                </p>
              </div>

              <div className="flex flex-col gap-6 items-center lg:items-end">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary text-dark px-12 py-6 rounded-[20px] font-bold text-xl md:text-2xl shadow-[0px_8px_0px_#191A23] hover:bg-white transition-all duration-300 w-full md:w-auto"
                >
                  Get the Strategy
                </motion.button>
                <span className="text-white/40 text-sm font-space italic text-center lg:text-right">
                  * 30-min free audit included
                </span>
              </div>
            </div>

            {/* Decorative border bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="mb-[70px]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center gap-10 mb-20">
            <h2 className="section-title mb-0 h-[51px] flex flex-col items-start justify-center px-[7px]">
              How We Work: SEO Process
            </h2>
            <p className="max-w-[580px] font-space font-normal text-[18px] leading-[23px] text-black">
              A Step-by-Step Guide to Achieving Your Search Engine Optimization Goals
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {seoProcess.map((item, index) => (
              <ProcessItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section (Reused from Home) */}
      <CaseStudies />

      {/* Our Services Section (Reused from Home) */}
      <Services />

      {/* Bottom CTA Section */}
      <section className="mt-[70px] mb-[140px]">
        <div className="container">
          <div className="bg-white rounded-[45px] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 border border-dark shadow-[0px_8px_0px_#191A23] relative overflow-hidden">
            <div className="max-w-xl space-y-8 relative z-10">
              <h2 className="text-4xl md:text-5xl font-medium leading-tight text-dark">
                Ready to Elevate Your Search Rankings?
              </h2>
              <p className="text-xl text-dark/70 leading-relaxed font-space">
                Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
              </p>
              <button className="bg-primary text-dark px-10 py-5 rounded-2xl font-bold border-2 border-dark shadow-[0px_4px_0px_#191A23] hover:translate-y-[-2px] transition-all">
                Get Your Free Quote
              </button>
            </div>
            <div className="w-full md:w-[450px] relative z-10">
              <img src={CTAIllustration} alt="Elevate Rankings" className="w-full h-auto" loading="lazy" />
            </div>
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[2px] border-dark/5 rounded-full pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
