import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import TogetherForSuccessImage from '../assets/TogetherForSuccess.png';
import HeartIcon from '../assets/Illustration/heart.png';
import PlayIcon from '../assets/Illustration/play.png';
import ShareIcon from '../assets/Illustration/share.png';
import LocationIcon from '../assets/Illustration/location.png';
import CTAIllustration from '../assets/Illustration/Illustration.png';
import GreenStar from '../assets/Services/GreenStar.png';

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      
      const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
      
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, value, count, rounded]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const SectionHeading = ({ badge, text }: { badge: string; text: string }) => (
  <div className="flex flex-col md:flex-row md:items-center gap-10 mb-20">
    <h2 className="section-title mb-0">{badge}</h2>
    <p className="max-w-[580px] font-space font-normal text-[18px] leading-[23px] text-black">
      {text}
    </p>
  </div>
);

const AboutPage = () => {
  const journeyRef = useRef(null);
  const isJourneyInView = useInView(journeyRef, { once: true, margin: "-100px" });

  return (
    <div className="pt-[100px] md:pt-[150px] pb-0">
      {/* 1. Hero Section */}
      <section className="mb-[80px] md:mb-[140px]">
        <div className="container">
          <div className="bg-grey rounded-[45px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
            <div className="flex-1 space-y-8">
              <h1 className="text-5xl md:text-6xl font-medium leading-tight">
                Together for Success
              </h1>
              <p className="text-xl text-dark leading-relaxed max-w-xl">
                At Positivus, we are committed to providing top-tier digital marketing services that help businesses of all sizes achieve their full potential.
              </p>
            </div>
            <div className="flex-1 relative">
              <motion.img 
                src={TogetherForSuccessImage} 
                alt="Together for Success" 
                className="w-full h-auto object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Impact in Numbers */}
      <section className="mb-[80px] md:mb-[140px]">
        <div className="container">
          <SectionHeading 
            badge="Our Impact in Numbers" 
            text="A glimpse into the milestones we've achieved through dedication and strategic excellence."
          />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 text-center">
            {[
              { value: 8, suffix: "+", label: "Years Experience" },
              { value: 50, suffix: "+", label: "Experts" },
              { value: 100, suffix: "+", label: "Projects Completed" },
              { value: 20, suffix: "+", label: "Awards Won" },
              { value: 500, suffix: "%", label: "ROI for Clients" }
            ].map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center ${i === 4 ? 'col-span-2 justify-self-center md:col-span-1 md:justify-self-auto' : ''}`}
              >
                <div className="text-4xl md:text-5xl font-bold text-dark mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-dark/60 font-space whitespace-pre-line">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Journey (Timeline) */}
      <section className="mb-[80px] md:mb-[140px]">
        <div className="container">
          <SectionHeading 
            badge="Our Journey" 
            text="How we started, where we've been, and our vision for the future of digital marketing."
          />
          
          <div ref={journeyRef} className="relative mt-20 px-4 md:px-0">
            {/* Vertical Line - Solid with primary accent */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-dark/10 hidden md:block -translate-x-1/2" />

            <div className="space-y-16 md:space-y-24">
              {[
                { year: '2019', title: 'The Beginning', desc: 'Positivus was founded by a small team of passionate marketers with a vision to revolutionize the digital landscape.' },
                { year: '2021', title: 'Industry Recognition', desc: 'We received our first major industry award and expanded our team to over 20 experts across multiple disciplines.' },
                { year: '2023', title: 'Innovation and Growth', desc: 'Launched several proprietary marketing tools and expanded our services to include AI-driven data analytics.' },
                { year: '2024', title: 'Leading the Future', desc: 'Now a leading agency with global reach, helping hundreds of clients navigate the ever-evolving digital world.' }
              ].map((item, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-12 md:gap-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Year Display */}
                  <div className={`flex-1 flex ${i % 2 !== 0 ? 'md:justify-start md:pl-20' : 'md:justify-end md:pr-20'} justify-center items-center`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isJourneyInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                      className="bg-primary px-8 py-3 rounded-full border border-dark shadow-[4px_4px_0px_#191A23] text-2xl font-bold text-dark"
                    >
                      {item.year}
                    </motion.div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex justify-center items-center relative z-10 w-8 h-8 rounded-full bg-white border-4 border-dark shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 w-full">
                    <motion.div 
                      initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                      animate={isJourneyInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: i * 0.2 }}
                      className="bg-white border-2 border-dark p-8 md:p-10 rounded-[45px] shadow-[0px_8px_0px_#191A23] hover:translate-y-[-5px] transition-transform duration-300 relative group overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors" />
                      
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <span className="w-2 h-8 bg-primary rounded-full" />
                        {item.title}
                      </h3>
                      <p className="text-dark/80 text-lg leading-relaxed font-space">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="mb-[80px] md:mb-[140px]">
        <div className="container">
          <SectionHeading 
            badge="Core Values" 
            text="The principles that guide our work, our relationships, and our commitment to excellence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Client Success First', icon: HeartIcon, desc: 'Your growth is our primary metric. We align our strategies with your business objectives.' },
              { title: 'Innovation', icon: PlayIcon, desc: 'We continuously explore new technologies and creative approaches to keep you ahead.' },
              { title: 'Collaboration', icon: ShareIcon, desc: 'We believe in the power of working together—as a team and as a partner to our clients.' },
              { title: 'Transparency', icon: LocationIcon, desc: 'Honest communication and clear reporting are at the heart of everything we do.' }
            ].map((value, i) => (
              <div key={i} className="p-10 border border-dark rounded-[45px] shadow-[0px_5px_0px_#191A23] bg-white flex flex-col h-full">
                <h3 className="text-2xl font-medium mb-4">{value.title}</h3>
                <p className="text-dark leading-relaxed mb-8 flex-grow">
                  {value.desc}
                </p>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center p-3">
                  <img src={value.icon} alt={value.title} className="w-full h-full object-contain" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Quote Section */}
      <section className="mb-[80px] md:mb-[140px]">
        <div className="container">
          <div className="bg-dark rounded-[45px] p-12 md:p-24 relative overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <blockquote className="text-3xl md:text-4xl font-medium text-white leading-tight italic">
                  "At Positivus, we believe that success is built on innovation, collaboration, and a relentless focus on delivering results."
                </blockquote>
                <div className="text-primary text-xl font-medium">— John Smith, Founder of Positivus</div>
              </div>
              <div className="w-32 md:w-48 relative">
                <motion.img
                  src={GreenStar}
                  alt="Decoration"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24 blur-2xl" />
          </div>
        </div>
      </section>

      {/* 6. Awards Section */}
      <section className="mb-[80px] md:mb-[140px]">
        <div className="container">
          <SectionHeading 
            badge="Awards & Recognition" 
            text="Celebrating the milestones and industry accolades that validate our commitment to excellence."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: '2023', name: 'Global Marketing Award', org: 'Best Agency' },
              { year: '2022', name: 'Digital Excellence', org: 'Top Performer' },
              { year: '2021', name: 'Innovation Hub', org: 'Future Leader' },
              { year: '2020', name: 'Client Choice', org: 'Highest Rated' }
            ].map((award, i) => (
              <div key={i} className="bg-grey rounded-[45px] p-10 flex flex-col items-center text-center hover:bg-primary transition-colors duration-300 cursor-default group">
                <div className="text-5xl mb-6 opacity-30 group-hover:opacity-100 transition-opacity">🏆</div>
                <div className="text-sm font-bold text-dark/40 mb-2 uppercase tracking-widest">{award.year}</div>
                <h3 className="text-xl font-bold text-dark mb-1">{award.name}</h3>
                <p className="text-dark/60">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="mb-0">
        <div className="container">
          <div className="bg-primary rounded-[45px] p-12 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl space-y-8 relative z-10">
              <h2 className="text-4xl md:text-5xl font-medium leading-tight text-dark">
                Join Our Team
              </h2>
              <p className="text-xl text-dark/80 leading-relaxed">
                Whether you're an experienced professional or a rising star, we're always looking for talent to help us shape the future of digital marketing.
              </p>
              <button className="btn-secondary w-full md:w-auto">
                Explore Careers
              </button>
            </div>
            <div className="w-full md:w-[400px] relative z-10">
              <img src={CTAIllustration} alt="Join Our Team" className="w-full h-auto" loading="lazy" />
            </div>
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[40px] border-white/10 rounded-full pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
