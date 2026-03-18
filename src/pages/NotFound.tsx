import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SpeakerIcon from '../assets/Illustration/speaker.png';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-[100px] md:pt-[150px] pb-20">
      <div className="container">
        <div className="bg-grey rounded-[45px] p-8 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 border border-dark shadow-[0px_8px_0px_#191A23] relative overflow-hidden">
          <div className="max-w-xl space-y-8 relative z-10 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-primary text-dark px-4 py-1 rounded-md text-sm font-bold mb-6 inline-block uppercase tracking-widest">404 Error</span>
              <h1 className="text-5xl md:text-7xl font-medium leading-tight text-dark mb-6">
                Page Not Found
              </h1>
              <p className="text-xl text-dark/70 leading-relaxed font-space mb-10">
                Oops! It looks like you've navigated to a page that doesn't exist. Let's get you back on track.
              </p>
              <button 
                onClick={() => navigate('/')}
                className="bg-dark text-white px-10 py-5 rounded-2xl font-bold border-2 border-dark shadow-[0px_4px_0px_#B9FF66] hover:translate-y-[-2px] transition-all w-full md:w-auto"
              >
                Go Back Home
              </button>
            </motion.div>
          </div>
          
          <div className="w-full md:w-[400px] relative z-10">
            <motion.img 
              src={SpeakerIcon} 
              alt="404 Illustration" 
              className="w-full h-auto"
              initial={{ rotate: -10, y: 20 }}
              animate={{ rotate: 10, y: -20 }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 2,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-dark/5 rounded-full -ml-24 -mb-24 blur-2xl" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
