import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiZap } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { services } from '../constants/services';
import { useState, useEffect } from 'react';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const imgs = services.map(s => s.image);

  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % imgs.length), 5000);
    return () => clearInterval(timer);
  }, [imgs.length]);

  return (
    <div className="w-full h-full relative group">
      <AnimatePresence mode="wait">
        <motion.img 
          key={index}
          src={imgs[index]} 
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 text-white">
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 text-brand-secondary border-l-4 border-brand-secondary pl-4">{services[index].tag || "Service Focus"}</p>
        <h3 className="text-2xl md:text-4xl font-display leading-tight whitespace-pre-line">{services[index].title}</h3>
      </div>
    </div>
  );
};

// Placeholder for ServiceMedia component, assuming it will be defined elsewhere or is a new component.
// For the purpose of this edit, we'll assume it's a simple component that renders the Carousel.
const ServiceMedia = () => {
  return <Carousel />;
};

export default function Home() {
  return (
    <div className="overflow-hidden bg-brand-bg">
      <Helmet>
        <title>Digital Honest | Best Advertising Agency in Dehradun</title>
        <meta name="description" content="Offline Ho Ya Online - Brand Sab Jagah! High visibility outdoor branding, transit branding, and digital marketing agency in Dehradun." />
      </Helmet>

      {/* Hero Section - High-Fidelity Architectural Monolith */}
      <section className="relative min-h-[90vh] lg:min-h-[95vh] w-full flex items-center pt-32 pb-12 lg:py-24 overflow-visible bg-brand-primary tracking-normal">
        {/* Background Depth Layers */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-secondary/10 rounded-full blur-[160px] -z-10 translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-secondary/5 rounded-full blur-[140px] -z-10 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="section-padding grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-center relative z-10">
          {/* Left Content Column */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-4 px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6 lg:mb-10 shadow-2xl overflow-hidden group">
              <span className="w-2 h-2 bg-brand-secondary rounded-full animate-ping"></span>
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-black text-white/60 group-hover:text-brand-secondary transition-colors">Marketing Architecture</span>
            </div>
            
            <h1 className="text-2xl lg:text-[6rem] mb-8 lg:mb-10 leading-[1] lg:leading-[1.1] tracking-tighter text-white font-bold font-display">
              Offline Ho <br/>Ya Online <br/>
              <span className="premium-gradient-text italic font-serif block mt-3 tracking-tighter">Brand Sab Jagah!</span>
            </h1>
            
            <p className="text-[10px] lg:text-base text-white/50 leading-relaxed max-w-xl mb-6 lg:mb-12 font-medium border-brand-secondary/30 lg:border-l-2 pl-0 lg:pl-8">
              We don't just run ads; we engineer architectures for growth. From premium OOH hoarding to data-driven digital infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16 lg:mb-0">
              <Link to="/services" className="btn-conversion !px-12 !py-5 text-lg group">
                Strategic Services 
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/portfolio" className="btn-primary !bg-white/5 !text-white !px-12 !py-5 text-lg border border-white/10 hover:!bg-white/10 backdrop-blur-sm">
                View Impact
              </Link>
            </div>
          </motion.div>

          {/* Right Media Column */}
          <motion.div
            className="lg:col-span-5 relative mt-20 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group">
              <div className="rounded-[2rem] md:rounded-[4rem] overflow-hidden relative shadow-3xl border border-white/5 aspect-[4/3] sm:aspect-auto sm:h-[500px]">
                <Carousel />
              </div>

              {/* Sophisticated Glass Stats Card - Hidden on Mobile */}
              <div className="absolute -top-64 -right-12 md:-top-24 md:-right-20 z-50 glass-card !bg-white/10 !backdrop-blur-[40px] !border-white/20 !rounded-[1.25rem] md:!rounded-[2.5rem] p-3 md:p-8 shadow-premium scale-[0.65] md:scale-[0.85] origin-bottom-left transition-all duration-700 hidden md:block">
                <div className="flex items-center gap-3 md:gap-6 mb-2 md:mb-4">
                   <div className="w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-brand-secondary flex items-center justify-center text-white shadow-lg shadow-brand-secondary/20">
                      <FiZap size={16} className="md:w-[28px] md:h-[28px]" />
                   </div>
                   <div>
                      <p className="text-2xl md:text-5xl font-black text-white leading-none">8+</p>
                      <p className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-black text-brand-secondary mt-1">Operational States</p>
                   </div>
                </div>
                <div className="h-px w-full bg-white/10 my-3 md:my-6"></div>
                <div className="flex items-center justify-between gap-6">
                   <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-white/40">Network Impact</p>
                   <p className="text-brand-secondary text-[10px] md:text-xs font-black">10M+ Reach</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 border border-brand-secondary/20 rounded-3xl rotate-12 -z-10 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-white/10 rounded-[3rem] -rotate-12 -z-10 opacity-10"></div>
      </section>


      {/* Services Showcase - Editorial Layout */}
      <section className="py-24 bg-white relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-padding mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.4em] font-black text-brand-secondary mb-4">Core Offerings</p>
              <h2 className="text-5xl lg:text-6xl tracking-tighter">Everything you need to <span className="text-brand-text-muted/30">Dominate</span> the market.</h2>
            </div>
            <Link to="/services" className="group flex items-center gap-3 font-black text-xs uppercase tracking-widest border-b-2 border-brand-secondary pb-2 mb-2 hover:gap-5 transition-all">
              All Services <FiArrowRight className="text-brand-secondary" />
            </Link>
          </div>
        </motion.div>

        {/* Infinite Sliding Carousel - Full Screen Width */}
        <div className="relative w-full overflow-hidden">
          <motion.div 
            className="flex gap-4 md:gap-8"
            animate={{ 
              x: ["0%", "-50%"] 
            }}
            transition={{ 
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ width: 'fit-content' }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {/* Double the list for seamless loop */}
            {[...services, ...services].map((service, idx) => (
              <div
                key={`${service.id}-${idx}`}
                className="relative h-[400px] md:h-[500px] w-[280px] md:w-[350px] flex-shrink-0 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-sm hover:shadow-premium transition-all duration-700 group"
              >
                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/20 to-transparent"></div>
                
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-black text-brand-secondary mb-3">{service.tag}</p>
                  <h3 className="text-2xl md:text-3xl text-white mb-6 group-hover:translate-x-2 transition-transform duration-500 whitespace-pre-line font-bold font-display leading-[1.1]">{service.title}</h3>
                  <Link to={`/services/${service.id}`} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <FiArrowRight className="text-brand-primary" />
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Trust Bar */}
      <section className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="section-padding">
           <div className="glass-card !rounded-[3rem] p-16 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-[100px]"></div>
             <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Ready to make your brand <br/><span className="premium-gradient-text italic font-serif">Visible to Millions?</span></h2>
             <p className="text-xl text-brand-text-muted mb-12 max-w-2xl mx-auto">Apne brand ki advertising shuru karein aaj hi! Book your high-impact campaigns today.</p>
             <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Link to="/contact" className="btn-conversion !px-12">
                 Get a Free Quote <FiZap className="ml-2" />
               </Link>
               <a href="tel:+917310688048" className="btn-primary !px-12 !bg-white !text-brand-text-main border border-gray-100 shadow-sm">
                 Call Now
               </a>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
