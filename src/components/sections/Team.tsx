import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

import JohnSmith from '../../assets/team/John Smith.png';
import JaneDoe from '../../assets/team/Jane Doe.png';
import MichaelBrown from '../../assets/team/Michael Brown.png';
import EmilyJohnson from '../../assets/team/Emily Johnson.png';
import BrianWilliams from '../../assets/team/Brian Williams.png';
import SarahKim from '../../assets/team/Sarah Kim.png';

const team = [
  {
    name: 'John Smith',
    role: 'CEO and Founder',
    experience: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    image: JohnSmith,
  },
  {
    name: 'Jane Doe',
    role: 'Director of Operations',
    experience: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    image: JaneDoe,
  },
  {
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
    experience: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    image: MichaelBrown,
  },
  {
    name: 'Emily Johnson',
    role: 'PPC Manager',
    experience: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    image: EmilyJohnson,
  },
  {
    name: 'Brian Williams',
    role: 'Social Media Specialist',
    experience: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
    image: BrianWilliams,
  },
  {
    name: 'Sarah Kim',
    role: 'Content Creator',
    experience: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
    image: SarahKim,
  },
];

const Team = () => {
  return (
    <section id="team" className="py-10 md:py-[70px] bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center gap-10 mb-20">
          <h2 className="section-title mb-0">Team</h2>
          <p className="w-[473px] h-[46px] font-space font-normal text-[18px] leading-[23px] text-black flex-none order-1 grow-0">
            Meet the skilled and experienced team behind our successful digital marketing strategies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-[40px_35px] rounded-[45px] border border-dark shadow-[0px_5px_0px_#191A23] bg-white relative flex flex-col gap-[10px] min-h-[331px]"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-end gap-4">
                   <div className="w-24 h-24 rounded-3xl overflow-hidden relative">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                   </div>
                   <div>
                      <h3 className="text-xl font-medium">{member.name}</h3>
                      <p className="text-dark opacity-70">{member.role}</p>
                   </div>
                </div>
                <a
                  href="#"
                  className="w-10 h-10 bg-dark rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
              <div className="w-full h-px bg-dark opacity-20 mb-5"></div>
              <p className="text-lg leading-[23px] text-dark">
                {member.experience}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center md:justify-end">
          <button className="btn btn-primary text-lg px-12 py-4">
            See all team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
