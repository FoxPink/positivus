import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: '1. Information We Collect',
      content: 'We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and any other information you choose to provide.'
    },
    {
      title: '2. How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to develop new products and services. We also use information to protect the safety and security of our services and our users.'
    },
    {
      title: '3. Information Sharing',
      content: 'We do not share your personal information with third parties except as described in this policy. We may share information with service providers who perform services on our behalf, or when required by law.'
    },
    {
      title: '4. Data Security',
      content: 'We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.'
    },
    {
      title: '5. Your Choices',
      content: 'You may update or correct information about yourself at any time by logging into your account or contacting us. You may also opt out of receiving promotional communications from us.'
    },
    {
      title: '6. Changes to this Policy',
      content: 'We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.'
    }
  ];

  return (
    <div className="pt-[100px] md:pt-[150px] pb-20">
      <section className="bg-white">
        <div className="container">
          <div className="flex flex-col mb-10 md:mb-20 text-center md:text-left">
            <h1 className="text-5xl md:text-[60px] font-medium leading-tight mb-6">Privacy Policy</h1>
            <p className="max-w-[780px] font-space font-normal text-[18px] leading-[23px] text-black opacity-70">
              Last updated: March 19, 2026. Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
          </div>

          <div className="max-w-4xl space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-4"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-dark">{section.title}</h2>
                <p className="text-lg text-dark/70 leading-relaxed font-space">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-8 md:p-12 bg-grey rounded-[45px] border border-dark shadow-[0px_5px_0px_#191A23]"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg text-dark/70 leading-relaxed font-space mb-8">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="flex flex-col gap-4 text-lg font-bold">
              <p>Email: aduy000@mail.com</p>
              <p>Phone: +84 xxx xxx xxx</p>
              <p>Address: Thủ Đức, Hồ Chí Minh</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
