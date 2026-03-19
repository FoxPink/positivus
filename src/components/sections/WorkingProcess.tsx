import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const processes = [
  {
    number: '01',
    title: 'Consultation',
    description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will help us understand your needs and tailor our services to your requirements.',
  },
  {
    number: '02',
    title: 'Research and Strategy Development',
    description: 'We conduct thorough market research and competitor analysis to develop a customized strategy that aligns with your business objectives.',
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Our team of experts will implement the agreed-upon strategy, ensuring all campaigns are set up correctly and optimized for success.',
  },
  {
    number: '04',
    title: 'Monitoring and Optimization',
    description: 'We continuously monitor campaign performance and make data-driven adjustments to optimize results and ensure you get the best return on investment.',
  },
  {
    number: '05',
    title: 'Reporting and Communication',
    description: 'We provide regular reports and updates on campaign performance, so you can track progress and understand the impact of our marketing efforts.',
  },
  {
    number: '06',
    title: 'Continual Improvement',
    description: 'We are committed to continuous improvement, staying up-to-date with the latest industry trends and best practices to ensure your business stays ahead of the competition.',
  },
];

const WorkingProcess = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="process" className="py-10 md:py-[70px] bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center gap-10 mb-20">
          <h2 className="section-title mb-0 h-auto min-h-[51px] flex flex-col items-start justify-center px-[7px]">Our Working Process</h2>
          <p className="w-[292px] h-[46px] font-space font-normal text-[18px] leading-[23px] text-black flex-none order-1 grow-0">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-[1234px] mx-auto">
          {processes.map((process, index) => (
            <motion.div
              key={process.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-[45px] border border-dark shadow-[0px_5px_0px_#191A23] p-8 md:p-[41px_60px] transition-all duration-300 flex flex-col ${
                openIndex === index ? 'bg-primary' : 'bg-grey'
              }`}
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="text-4xl md:text-6xl font-medium">{process.number}</span>
                  <h3 className="text-2xl md:text-3xl font-medium">{process.title}</h3>
                </div>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-dark flex items-center justify-center bg-grey flex-shrink-0">
                  {openIndex === index ? <Minus size={32} /> : <Plus size={32} />}
                </div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-[30px]">
                      <div className="w-full h-px bg-dark mb-8 opacity-20"></div>
                      <p className="text-lg md:text-xl leading-relaxed text-dark">
                        {process.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
