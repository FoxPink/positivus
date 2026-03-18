import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus, Minus } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Basic Plan',
    price: '$500',
    period: '/ month',
    description: 'Great for small businesses looking for an effective online presence.',
    features: [
      'Website optimization',
      'Social media management (2 platforms)',
      'Monthly progress report',
      'Email support',
      'Basic content creation',
      '1440/80 px'
    ],
    buttonText: 'Get started',
    bgColor: 'bg-white',
    textColor: 'text-dark',
    isPro: false,
    btn1Color: 'bg-dark text-white',
    btn2Color: 'bg-white text-dark border-dark'
  },
  {
    name: 'Pro Plan',
    price: '$1000',
    period: '/ month',
    description: 'Ideal for growing companies needing advanced marketing strategies.',
    features: [
      'Advanced SEO & keyword research',
      'Social media management (4 platforms)',
      'PPC ad campaign management',
      'Weekly performance report',
      'Priority email & chat support',
      'Custom content production',
      'Marketing strategy'
    ],
    buttonText: 'Get started',
    bgColor: 'bg-dark',
    textColor: 'text-white',
    isPro: true,
    btn1Color: 'bg-primary text-dark',
    btn2Color: 'bg-dark text-white border-white/20'
  },
  {
    name: 'Elite Plan',
    price: '$2000',
    period: '/ month',
    description: 'Comprehensive digital marketing solutions for industry dominance.',
    features: [
      'Full-funnel marketing strategy',
      'Multi-platform social media',
      'Comprehensive SEO & technical audits',
      'Detailed analytics and custom reporting',
      '24/7 dedicated account manager',
      'Extensive content and video production',
      'Full brand analysis and reputation'
    ],
    buttonText: 'Get started',
    bgColor: 'bg-white',
    textColor: 'text-dark',
    isPro: false,
    btn1Color: 'bg-dark text-white',
    btn2Color: 'bg-white text-dark border-dark'
  }
];

const faqs = [
  {
    question: 'Are there any additional fees or charges that may apply?',
    answer: 'At Positivus, we believe in transparent pricing. The monthly fee covers all the digital marketing services listed in your selected plan. There are no hidden charges. However, third-party costs like advertising spend (Google Ads, Meta Ads) are not included in the retainer and will be billed separately by the respective platforms.'
  },
  {
    question: 'Can I change or cancel my plan at any time?',
    answer: 'Yes, our plans are flexible. You can upgrade, downgrade, or cancel your subscription at the end of each billing cycle without any penalties.'
  },
  {
    question: 'Do you offer a free trial or consultation?',
    answer: 'We provide a free initial consultation to analyze your current online presence and recommend the best strategy for your business goals.'
  },
  {
    question: 'How do you bill and invoice your clients?',
    answer: 'Invoicing is done on a monthly basis. We accept various payment methods, including bank transfers and major credit cards.'
  },
  {
    question: 'Are your services guaranteed to deliver results?',
    answer: 'While we cannot guarantee specific market outcomes, we use data-driven methodologies and proven strategies to ensure the highest possible ROI for our clients.'
  },
  {
    question: 'Do you offer contract-based or monthly retainer-based pricing?',
    answer: 'Most of our clients prefer our monthly retainer model for its flexibility, but we also offer fixed-term contracts for large-scale enterprise projects.'
  }
];

const FAQItem = ({ faq, index, isOpen, onToggle }: { faq: any; index: number; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className={`rounded-[45px] border border-dark shadow-[0px_5px_0px_#191A23] px-8 md:px-[60px] py-8 md:py-[41px] transition-all duration-300 flex flex-col ${isOpen ? 'bg-primary' : 'bg-grey'}`}>
      <div className="flex items-center justify-between cursor-pointer" onClick={onToggle}>
        <div className="flex items-center gap-6 md:gap-10">
          <span className="text-4xl md:text-6xl font-medium">0{index + 1}</span>
          <h3 className="text-2xl md:text-3xl font-medium pr-8">{faq.question}</h3>
        </div>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-dark flex items-center justify-center bg-grey flex-shrink-0">
          {isOpen ? <Minus size={32} /> : <Plus size={32} />}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-[30px]">
              <div className="w-full h-[1px] bg-dark mb-8 opacity-20" />
              <p className="text-lg md:text-xl leading-relaxed text-dark">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="pt-[100px] md:pt-[150px]">
      <section className="mb-[140px]">
        <div className="container">
          <div className="flex flex-col gap-10 mb-20 text-center md:text-left">
            <h1 className="text-5xl md:text-[60px] font-medium leading-tight">Pricing</h1>
            <p className="max-w-[580px] font-space font-normal text-[18px] leading-[23px] text-black">
              Simple and Transparent Pricing for Every Business Need. No Hidden Fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-10 rounded-[45px] border border-dark shadow-[0px_5px_0px_#191A23] flex flex-col relative ${plan.bgColor} ${plan.textColor} ${plan.isPro ? 'md:scale-105 md:z-10' : 'md:my-6'}`}
              >
                {plan.isPro && (
                  <div className="absolute top-8 right-10 bg-primary text-dark px-4 py-1.5 rounded-full text-xs font-bold border border-dark">
                    POPULAR
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-3xl font-medium mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-lg opacity-60 font-medium">{plan.period}</span>
                  </div>
                  
                  <div className="space-y-4 mb-10">
                    <button className={`w-full py-4 rounded-2xl font-bold border-2 border-dark shadow-[0px_4px_0px_#191A23] transition-all hover:translate-y-[-2px] hover:shadow-[0px_6px_0px_#191A23] active:translate-y-[0px] ${plan.btn1Color}`}>
                      {plan.buttonText}
                    </button>
                    <button className={`w-full py-4 rounded-2xl font-bold border-2 shadow-[0px_4px_0px_#191A23] transition-all hover:translate-y-[-2px] hover:shadow-[0px_6px_0px_#191A23] active:translate-y-[0px] ${plan.btn2Color}`}>
                      Request a quote
                    </button>
                  </div>

                  <div className="w-full h-[1px] bg-dark/10 mb-10 border-t border-dashed border-dark/20" />
                  
                  <ul className="space-y-5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-1 w-6 h-6 rounded-full bg-primary border border-dark flex items-center justify-center flex-shrink-0">
                          <Check size={14} className="text-dark" strokeWidth={4} />
                        </div>
                        <span className="text-lg leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-[70px]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center gap-10 mb-20">
            <h2 className="section-title mb-0 h-[51px] flex flex-col items-start justify-center px-[7px]">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[292px] font-space font-normal text-[18px] leading-[23px] text-black">
              Step-by-Step Guide to Achieving Your Business Goals
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                index={index}
                faq={faq}
                isOpen={openFaqIndex === index}
                onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
