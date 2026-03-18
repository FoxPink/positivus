import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, User, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'How to Optimize Your Website for Search Engines',
    category: 'SEO',
    author: 'John Smith',
    date: 'March 15, 2026',
    readTime: '5 min read',
    excerpt: 'Discover the latest SEO techniques to improve your search engine rankings and drive more organic traffic to your site.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    bgColor: 'bg-white'
  },
  {
    id: 2,
    title: 'The Future of Social Media Marketing in 2026',
    category: 'Social Media',
    author: 'Jane Doe',
    date: 'March 10, 2026',
    readTime: '7 min read',
    excerpt: 'Stay ahead of the curve with our insights into the upcoming trends and technologies shaping the social media landscape.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    bgColor: 'bg-primary'
  },
  {
    id: 3,
    title: 'Mastering PPC: A Comprehensive Guide for Beginners',
    category: 'PPC',
    author: 'Michael Brown',
    date: 'March 05, 2026',
    readTime: '8 min read',
    excerpt: 'Learn how to create and manage effective Pay-Per-Click campaigns that deliver measurable results and high ROI.',
    image: 'https://asmarketingagency.com/wp-content/uploads/2023/10/Mastering-Japanese-Localization-PPC-1.png',
    bgColor: 'bg-dark',
    textColor: 'text-white'
  },
  {
    id: 4,
    title: 'Why Content Marketing is Essential for Brand Growth',
    category: 'Content Marketing',
    author: 'Emily Johnson',
    date: 'February 28, 2026',
    readTime: '6 min read',
    excerpt: 'Understand the power of high-quality content in building brand authority, engaging audiences, and driving conversions.',
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=800&auto=format&fit=crop',
    bgColor: 'bg-grey'
  }
];

const BlogPage = () => {
  return (
    <div className="pt-[100px] md:pt-[150px] pb-20">
      <section className="bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center gap-10 mb-20">
            <h1 className="section-title mb-0">Blog</h1>
            <p className="max-w-[580px] font-space font-normal text-[18px] leading-[23px] text-black">
              Insights, news, and expert advice on all things digital marketing to help you grow your business.
            </p>
          </div>

          {/* Featured Post */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 bg-dark rounded-[45px] p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center overflow-hidden border border-dark shadow-[0px_5px_0px_#191A23]"
          >
            <div className="lg:w-1/2 w-full">
              <img 
                src={blogPosts[1].image} 
                alt="Featured Post" 
                className="w-full h-[300px] md:h-[400px] object-cover rounded-[30px]"
              />
            </div>
            <div className="lg:w-1/2 w-full text-white">
              <span className="bg-primary text-dark px-4 py-1 rounded-md text-sm font-bold mb-6 inline-block">FEATURED</span>
              <h2 className="text-3xl md:text-5xl font-medium mb-6 leading-tight">
                {blogPosts[1].title}
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                {blogPosts[1].excerpt}
              </p>
              <div className="flex flex-wrap gap-6 mb-8 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-primary" /> {blogPosts[1].author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary" /> {blogPosts[1].date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-primary" /> {blogPosts[1].readTime}
                </div>
              </div>
              <button className="flex items-center gap-2 text-primary hover:underline text-lg font-medium group">
                Read More <ArrowUpRight size={20} className="transition-all duration-300 ease-in-out group-hover:rotate-45" />
              </button>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 rounded-[45px] border border-dark shadow-[0px_5px_0px_#191A23] flex flex-col ${post.bgColor} ${post.textColor || 'text-dark'}`}
              >
                <div className="mb-6 overflow-hidden rounded-[30px]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`${post.bgColor === 'bg-dark' ? 'bg-primary text-dark' : 'bg-dark text-white'} px-3 py-1 rounded-md text-xs font-bold`}>
                    {post.category}
                  </span>
                  <span className="text-xs opacity-60 flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-medium mb-4 leading-snug">
                  {post.title}
                </h3>
                <p className="opacity-70 mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-sm font-medium">
                    By {post.author}
                  </div>
                  <button className={`flex items-center gap-2 font-medium hover:underline ${post.bgColor === 'bg-dark' ? 'text-primary' : 'text-dark'} group`}>
                    Read <ArrowUpRight size={18} className="transition-all duration-300 ease-in-out group-hover:rotate-45" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center items-center gap-4">
            <button className="w-12 h-12 rounded-full border border-dark flex items-center justify-center hover:bg-primary transition-all hover:scale-110 group">
              <ChevronLeft size={24} className="group-hover:text-dark" />
            </button>
            <div className="flex items-center gap-2">
              <button className="w-12 h-12 rounded-full border border-dark flex items-center justify-center bg-primary text-dark font-bold shadow-[0px_3px_0px_#191A23]">1</button>
              <button className="w-12 h-12 rounded-full border border-dark flex items-center justify-center hover:bg-primary transition-colors">2</button>
              <button className="w-12 h-12 rounded-full border border-dark flex items-center justify-center hover:bg-primary transition-colors">3</button>
              <span className="px-2 text-dark font-bold text-xl">...</span>
              <button className="w-12 h-12 rounded-full border border-dark flex items-center justify-center hover:bg-primary transition-colors">9</button>
              <button className="w-12 h-12 rounded-full border border-dark flex items-center justify-center hover:bg-primary transition-colors">10</button>
            </div>
            <button className="w-12 h-12 rounded-full border border-dark flex items-center justify-center hover:bg-primary transition-all hover:scale-110 group">
              <ChevronRight size={24} className="group-hover:text-dark" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
