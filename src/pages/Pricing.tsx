import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Basic',
    price: '$500',
    period: '/month',
    description: 'Perfect for small businesses just starting their digital journey.',
    features: [
      'SEO Audit & Strategy',
      'Social Media Management (2 platforms)',
      'Basic Content Creation',
      'Monthly Progress Report',
      'Email Support'
    ],
    buttonText: 'Get Started',
    isPopular: false,
    bgColor: 'bg-grey',
    textColor: 'text-dark',
    btnVariant: 'btn-outline'
  },
  {
    name: 'Professional',
    price: '$1,500',
    period: '/month',
    description: 'Ideal for growing companies looking for consistent results.',
    features: [
      'Advanced SEO Optimization',
      'Social Media (4 platforms)',
      'PPC Campaign Management',
      'Bi-weekly Content Updates',
      'Priority Email & Chat Support',
      'Competitor Analysis'
    ],
    buttonText: 'Most Popular',
    isPopular: true,
    bgColor: 'bg-dark',
    textColor: 'text-white',
    btnVariant: 'btn-secondary'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Comprehensive solutions for large-scale digital dominance.',
    features: [
      'Full-funnel Marketing Strategy',
      'Unlimited Social Media',
      'Dedicated Account Manager',
      'Daily Analytics & Reporting',
      '24/7 Priority Support',
      'Custom Content Production'
    ],
    buttonText: 'Contact Us',
    isPopular: false,
    bgColor: 'bg-grey',
    textColor: 'text-dark',
    btnVariant: 'btn-outline'
  }
];

const PricingPage = () => {
  return (
    <div className="pt-[100px] md:pt-[150px]">
      <section className="py-10 md:py-[70px] bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center gap-10 mb-20 text-center md:text-left">
            <h1 className="section-title mb-0">Pricing</h1>
            <p className="max-w-[580px] font-space font-normal text-[18px] leading-[23px] text-black">
              Choose the perfect plan that fits your business needs and growth objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-10 rounded-[45px] border border-dark shadow-[0px_5px_0px_#191A23] flex flex-col h-full relative ${plan.bgColor} ${plan.textColor}`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-dark px-4 py-1 rounded-full text-sm font-bold border border-dark">
                    POPULAR
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-3xl font-medium mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-lg opacity-70">{plan.period}</span>
                  </div>
                  <p className="opacity-80 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="w-full h-px bg-current opacity-20 mb-8"></div>

                <ul className="flex flex-col gap-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${plan.isPopular ? 'bg-primary text-dark' : 'bg-dark text-primary'}`}>
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`btn ${plan.btnVariant} w-full py-5 text-xl font-medium rounded-[14px]`}>
                  {plan.buttonText}
                </button>
              </motion.div>
            ))}
          </div>

          {/* FAQ or Comparison Table shortcut */}
          <div className="mt-24 bg-grey rounded-[45px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-medium mb-4">Need a custom solution?</h2>
              <p className="text-xl text-dark opacity-80 leading-relaxed">
                If our standard plans don't meet your specific requirements, we can create a tailored package just for your business.
              </p>
            </div>
            <button className="btn btn-primary px-10 py-5 text-xl whitespace-nowrap">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
