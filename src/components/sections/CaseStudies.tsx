import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
    link: '#',
  },
  {
    text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
    link: '#',
  },
  {
    text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
    link: '#',
  },
];

const CaseStudies = () => {
  return (
    <section id="cases" className="py-10 md:py-[70px]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start gap-[40px] mb-20">
          <h2 className="section-title mb-0 h-[51px] flex flex-col items-start justify-center px-[7px]">Case Studies</h2>
          <p className="max-w-[580px] font-normal text-[18px] leading-[23px] text-black">
            Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
          </p>
        </div>

        <div className="bg-dark text-white rounded-[45px] py-10 md:py-[70px] px-8 md:px-[60px] w-full max-w-[1234px] mx-auto flex flex-col md:flex-row items-stretch gap-10 md:gap-[64px] relative overflow-hidden">
          {cases.map((item, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-1 flex flex-col justify-between"
              >
                <p className="text-[18px] leading-[23px] mb-8">
                  {item.text}
                </p>
                <a href={item.link} className="flex items-center gap-2 text-primary font-medium group text-[20px] mt-auto">
                  Learn more <ArrowUpRight className="transition-all duration-300 ease-in-out group-hover:rotate-45" />
                </a>
              </motion.div>
              {index < cases.length - 1 && (
                <div className="hidden md:block w-[1px] h-[186px] bg-white self-center" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
