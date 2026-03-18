import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp',
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. Their team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
  {
    name: 'Jane Doe',
    role: 'Marketing Director at ABC Agency',
    text: '"Their expertise in digital marketing is second to none. They have helped us achieve our goals and more. We are extremely happy with the results we have seen so far and look forward to continuing our partnership with them."',
  },
  {
    name: 'Michael Brown',
    role: 'Founder at TechStart',
    text: '"The team at Positivus is fantastic to work with. They are always available to answer our questions and provide us with valuable insights. We have seen a steady increase in our organic search traffic since we started working with them."',
  },
  {
    name: 'Emily Johnson',
    role: 'Marketing Manager at Global Brands',
    text: '"Professional, creative, and results-driven. Working with Positivus has been a game-changer for our online strategy. They really understand our brand and audience."',
  },
  {
    name: 'Sarah Kim',
    role: 'CEO at Creative Studio',
    text: '"Highly recommend! The team is incredibly skilled and proactive. They don\'t just execute; they provide strategic advice that has significantly impacted our ROI."',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    let intervalId: number | undefined;

    const startInterval = () => {
      intervalId = window.setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 7000); // Increased to 7s for more reading time
    };

    startInterval();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [currentIndex]); // Re-start interval when index changes to reset timer

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isMobile = windowWidth < 768;
  const cardWidth = isMobile ? windowWidth - 60 : 500;
  const gap = isMobile ? 15 : 40;

  return (
    <section id="testimonials" className="py-10 md:py-[70px] bg-white overflow-hidden">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:items-center gap-10 mb-20">
          <h2 className="section-title mb-0 h-auto min-h-[51px] flex flex-col items-start justify-center px-[7px]">Testimonials</h2>
          <p className="max-w-[473px] font-space font-normal text-[18px] leading-[23px] text-black">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
        </div>

        <div className="bg-dark text-white rounded-[45px] py-12 md:py-[60px] relative max-w-[1240px] mx-auto overflow-hidden">
          <div className="relative z-10">
            {/* Slider Container */}
            <div className="relative w-full">
              <div className="overflow-visible flex justify-center">
                <motion.div
                  drag="x"
                  dragConstraints={{
                    left: -(testimonials.length - 1) * (cardWidth + gap),
                    right: 0
                  }}
                  onDragEnd={(_, info) => {
                    const threshold = 100;
                    if (info.offset.x < -threshold && currentIndex < testimonials.length - 1) {
                      next();
                    } else if (info.offset.x > threshold && currentIndex > 0) {
                      prev();
                    }
                  }}
                  animate={{ 
                    x: `calc(50% - ${currentIndex * (cardWidth + gap) + cardWidth / 2}px)` 
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 150, 
                    damping: 25,
                    mass: 0.5,
                    restDelta: 0.001
                  }}
                  className="flex items-start cursor-grab active:cursor-grabbing"
                  style={{ gap: `${gap}px` }}
                >
                  {testimonials.map((item, index) => (
                    <motion.div 
                      key={index} 
                      style={{ width: `${cardWidth}px` }} 
                      className="flex-shrink-0"
                      animate={{ opacity: index === currentIndex ? 1 : 0.5 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="relative">
                        <div className="p-6 md:p-[35px_40px] border border-primary rounded-[45px] text-[15px] md:text-[17px] leading-[21px] md:leading-[22px] font-normal relative">
                          {item.text}
                        </div>
                        {/* Speech Bubble Arrow */}
                        <div className="absolute -bottom-[18px] left-[50px] md:left-[60px] w-[30px] h-[30px] overflow-hidden">
                          <div className="w-[14px] h-[14px] border-r border-b border-primary bg-dark rotate-45 origin-top-left ml-[14px] -mt-[1px]"></div>
                        </div>
                      </div>
                      
                      <div className="pl-[60px] md:pl-[80px] mt-8">
                        <h4 className="text-[17px] md:text-[19px] font-medium text-primary">{item.name}</h4>
                        <p className="text-[15px] md:text-[17px] text-white font-normal">{item.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 md:mt-24 flex items-center justify-center gap-6 md:gap-[120px]">
              <button
                onClick={prev}
                className="text-white hover:text-primary transition-colors p-2"
              >
                <ArrowLeft size={isMobile ? 28 : 32} />
              </button>
              
              <div className="flex gap-4 md:gap-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="w-4 h-4 flex items-center justify-center group"
                  >
                    <motion.svg 
                      width="14" height="14" viewBox="0 0 14 14" fill="none"
                      animate={{ scale: index === currentIndex ? 1.2 : 1 }}
                      className="transition-transform"
                    >
                      <motion.path 
                        d={index === currentIndex ? "M7 0L14 7L7 14L0 7L7 0Z" : "M7 2.12132L11.8787 7L7 11.8787L2.12132 7L7 2.12132Z"} 
                        fill={index === currentIndex ? "#B9FF66" : "white"}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.svg>
                  </button>
                ))}
              </div>

              <button
                onClick={next}
                className="text-white hover:text-primary transition-colors p-2"
              >
                <ArrowRight size={isMobile ? 28 : 32} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
