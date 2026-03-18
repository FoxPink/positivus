import { motion } from 'framer-motion';
import ContactImage from '../../assets/Contact Us.png';

const Contact = () => {
  return (
    <section id="contact" className="py-10 md:py-[70px] bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center gap-10 mb-20">
          <h2 className="section-title mb-0 h-auto min-h-[51px] flex flex-col items-start justify-center px-[7px]">Contact Us</h2>
          <p className="w-[323px] h-[46px] font-space font-normal text-[18px] leading-[23px] text-black flex-none order-1 grow-0">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>

        <div className="bg-grey rounded-[45px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-16 overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative z-10"
          >
            <form className="flex flex-col gap-6">
              <div className="flex gap-8 mb-4">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="type"
                    className="w-6 h-6 border-2 border-dark rounded-full checked:bg-primary checked:border-dark appearance-none cursor-pointer"
                    defaultChecked
                  />
                  <span className="text-lg font-medium">Say Hi</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="type"
                    className="w-6 h-6 border-2 border-dark rounded-full checked:bg-primary checked:border-dark appearance-none cursor-pointer"
                  />
                  <span className="text-lg font-medium">Get a Quote</span>
                </label>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="p-4 border border-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium">Email*</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="p-4 border border-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium">Message*</label>
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="p-4 border border-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white resize-none"
                  required
                ></textarea>
              </div>

              <button className="btn btn-primary text-lg py-4 mt-4">
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div 
            className="hidden lg:block absolute right-0 top-1/2 w-[600px] h-[600px] pointer-events-none"
            style={{ x: "40%", y: "-50%" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
             {/* Original Image */}
             <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={ContactImage} 
                  alt="Contact Us" 
                  className="w-full h-auto object-contain"
                />
             </div>
             {/* Duplicated and Rotated Image */}
             <div className="absolute inset-0 flex items-center justify-center rotate-180">
                <img 
                  src={ContactImage} 
                  alt="Contact Us" 
                  className="w-full h-auto object-contain"
                />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
