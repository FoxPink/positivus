import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import Team from '../components/sections/Team';
import AboutImage from '../assets/about.png';

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

const AboutPage = () => {
  return (
    <div className="pt-[100px] md:pt-[150px]">
      {/* Hero Section of About Page */}
      <section className="py-10 md:py-[70px] bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center gap-10 mb-20">
            <h1 className="section-title mb-0">About Us</h1>
            <p className="max-w-[580px] font-space font-normal text-[18px] leading-[23px] text-black">
              We are a team of experienced digital marketers dedicated to helping businesses grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <h2 className="text-4xl md:text-5xl font-medium leading-tight">
                Our Journey <span className="bg-primary px-2 rounded-md">Since 2026</span>
              </h2>
              <p className="text-lg text-dark leading-relaxed">
                Positivus was founded with a simple goal: to provide small and medium-sized businesses with the same high-quality digital marketing services that large corporations enjoy.
              </p>
              <p className="text-lg text-dark leading-relaxed">
                Over the years, we have grown from a small team of three to a full-service agency with experts in every field of digital marketing. Our passion for helping our clients succeed remains at the core of everything we do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-dark rounded-[45px] p-12 aspect-video flex items-center justify-center relative overflow-hidden"
            >
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-24 h-24 mb-6 flex items-center justify-center">
                  <img 
                    src={AboutImage} 
                    alt="About Us Illustration" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                <h3 className="text-white text-3xl font-medium mb-4">Excellence in Every Detail</h3>
                <p className="text-white/70 max-w-sm mx-auto">
                  We don't just deliver services; we deliver results that transform businesses and lives.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-2 border-primary/20 rounded-full -ml-12 -mb-12"></div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="bg-grey rounded-[45px] p-10 md:p-20 grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="text-center">
              <div className="text-5xl font-bold text-dark mb-2">
                <Counter value={7} suffix="+" />
              </div>
              <div className="text-dark/60">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-dark mb-2">
                <Counter value={200} suffix="+" />
              </div>
              <div className="text-dark/60">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-dark mb-2">
                <Counter value={15} suffix="+" />
              </div>
              <div className="text-dark/60">Expert Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-dark mb-2">
                <Counter value={95} suffix="%" />
              </div>
              <div className="text-dark/60">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse Team Section on About Page */}
      <Team />

      {/* Values Section */}
      <section className="py-10 md:py-[70px] bg-white">
        <div className="container text-center">
          <h2 className="section-title mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Transparency', desc: 'We believe in open and honest communication with our clients at every step.' },
              { title: 'Innovation', desc: 'We constantly stay ahead of industry trends to provide cutting-edge solutions.' },
              { title: 'Results-Driven', desc: 'Our success is measured by the growth and ROI we deliver to our clients.' }
            ].map((value, i) => (
              <div key={i} className="p-10 border border-dark rounded-[45px] shadow-[0px_5px_0px_#191A23] bg-white hover:bg-primary transition-colors group">
                <h3 className="text-2xl font-medium mb-4">{value.title}</h3>
                <p className="text-dark group-hover:text-dark/80 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
