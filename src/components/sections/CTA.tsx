import { motion } from 'framer-motion';
import LetMakeThingsHappen from '../../assets/Services/Let\'s make things happen.png';
import GreenStar from '../../assets/Services/GreenStar.png';
import GrayStar from '../../assets/Services/GrayStar.png';

const CTA = () => {
  return (
    <section className="py-10 md:py-[70px]">
      <div className="container">
        <div className="bg-grey rounded-[45px] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 relative">
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-4xl md:text-5xl font-medium mb-6">Let's make things happen</h2>
            <p className="text-xl text-dark mb-10 leading-relaxed">
              Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </p>
            <button className="btn btn-primary text-lg px-8 py-4">
              Get your free proposal
            </button>
          </div>
          
          <div className="relative mt-12 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-1/2 flex justify-center items-center z-20 pointer-events-none">
            <div className="relative">
               <img 
                src={LetMakeThingsHappen} 
                alt="CTA Illustration" 
                className="w-full max-w-[320px] md:max-w-[400px] lg:max-w-[500px] h-auto drop-shadow-xl scale-110 lg:scale-125"
               />
               <motion.img 
                src={GreenStar} 
                alt="Green Start Decor" 
                className="absolute bottom-[-8%] right-[42%] lg:bottom-[-10%] lg:right-[46%] w-[100px] md:w-[130px] lg:w-[160px] h-auto object-contain scale-110 lg:scale-125 z-10"
                style={{ marginBottom: "-10px", marginRight: "-10px" }}
                animate={{ y: [0, -15, 0] }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
               />
               <motion.img 
                src={GrayStar} 
                alt="Gray Star Decor" 
                className="absolute bottom-[4%] right-[-8%] lg:bottom-[6%] lg:right-[-12%] w-[140px] md:w-[170px] lg:w-[200px] h-auto object-contain scale-110 lg:scale-125 z-10"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
