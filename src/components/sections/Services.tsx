import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SearchEngineImg from '../../assets/Services/SearchEngineOptimiztion.png';
import PPCImg from '../../assets/Services/Pay-per-click.png';
import SocialMediaImg from '../../assets/Services/SocialMedia.png';
import EmailImg from '../../assets/Services/Email.png';
import ContentImg from '../../assets/Services/Content.png';
import AnalyticsImg from '../../assets/Services/AnalyticsAnd.png';

const services = [
  {
    title: ['Search engine', 'optimization'],
    bgColor: 'bg-grey',
    titleColor: 'bg-primary',
    textColor: 'text-dark',
    iconColor: 'bg-dark',
    iconArrow: 'text-primary',
    image: SearchEngineImg
  },
  {
    title: ['Pay-per-click', 'advertising'],
    bgColor: 'bg-primary',
    titleColor: 'bg-white',
    textColor: 'text-dark',
    iconColor: 'bg-dark',
    iconArrow: 'text-primary',
    image: PPCImg
  },
  {
    title: ['Social Media', 'Marketing'],
    bgColor: 'bg-dark',
    titleColor: 'bg-white',
    textColor: 'text-white',
    iconColor: 'bg-white',
    iconArrow: 'text-dark',
    image: SocialMediaImg
  },
  {
    title: ['Email', 'Marketing'],
    bgColor: 'bg-grey',
    titleColor: 'bg-primary',
    textColor: 'text-dark',
    iconColor: 'bg-dark',
    iconArrow: 'text-primary',
    image: EmailImg
  },
  {
    title: ['Content', 'Creation'],
    bgColor: 'bg-primary',
    titleColor: 'bg-white',
    textColor: 'text-dark',
    iconColor: 'bg-dark',
    iconArrow: 'text-primary',
    image: ContentImg
  },
  {
    title: ['Analytics and', 'Reporting'],
    bgColor: 'bg-dark',
    titleColor: 'bg-primary',
    textColor: 'text-white',
    iconColor: 'bg-white',
    iconArrow: 'text-dark',
    image: AnalyticsImg
  },
];

const Services = () => {
  return (
    <section id="services" className="py-10 md:py-[70px]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start gap-[40px] mb-20">
          <h2 className="section-title mb-0 h-auto min-h-[51px] flex flex-col items-start justify-center px-[7px]">Services</h2>
          <p className="max-w-[580px] font-normal text-[18px] leading-[23px] text-black">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-[40px] w-full items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.title.join(' ')}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-row justify-between items-center p-8 md:p-[50px] border border-dark shadow-[0px_5px_0px_#191A23] rounded-[45px] h-full ${service.bgColor}`}
            >
              <div className="flex flex-col justify-between h-full gap-8">
                <div className="flex flex-col items-start">
                  {service.title.map((line, i) => (
                    <span
                      key={i}
                      className={`inline-block px-1.5 rounded-[7px] text-[26px] md:text-[30px] font-medium w-fit ${service.titleColor} text-black`}
                    >
                      {line}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out group-hover:rotate-45 ${service.iconColor}`}>
                    <ArrowUpRight className={service.iconArrow} />
                  </div>
                  <span className={`text-xl font-medium ${service.textColor}`}>Learn more</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center justify-center w-[210px] h-[170px]">
                {service.image ? (
                  <img src={service.image} alt={service.title.join(' ')} className="max-w-full max-h-full object-contain" loading="lazy" />
                ) : (
                  <div className={`w-full h-full rounded-3xl border-4 border-dark/10 flex items-center justify-center ${service.titleColor}`}>
                    <div className="w-16 h-16 bg-dark/5 rounded-full"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
