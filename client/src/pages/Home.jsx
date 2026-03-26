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
      <div className="absolute bottom-12 left-12 text-white">
        <p className="text-xs font-bold uppercase tracking-widest mb-3 text-brand-secondary border-l-4 border-brand-secondary pl-4">{services[index].tag || "Service Focus"}</p>
        <h3 className="text-4xl font-display leading-tight whitespace-pre-line">{services[index].title}</h3>
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

      {/* Hero Section - High Fidelity Editorial */}
      <section className="section-padding py-12 lg:py-24 relative overflow-hidden lg:overflow-visible min-h-[85vh] flex items-center pt-24 pb-20">
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-secondary/5 rounded-full blur-[140px] -z-10 translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-8">
              <span className="w-2 h-2 bg-brand-secondary rounded-full animate-ping"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-text-muted">Marketing That Moves</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl mb-10 leading-none tracking-tighter transition-all">
              Offline Ho <br/>Ya Online <br/>
              <span className="premium-gradient-text italic font-serif">Brand Sab Jagah!</span>
            </h2>
            
            <p className="text-xl text-brand-text-muted leading-relaxed max-w-lg mb-12 font-medium">
              We don't just run ads; we build architectures for growth. From premium OOH hoarding to data-driven digital campaigns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/services" className="btn-conversion !px-12">
                Our Services <FiArrowRight />
              </Link>
              <Link to="/portfolio" className="btn-primary !px-12">
                View Portfolio
              </Link>
            </div>
          </motion.div>

          {/* Right Media Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="rounded-[3.5rem] overflow-hidden relative shadow-2xl">
              <Carousel />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -left-8 glass-card !rounded-3xl p-8 shadow-2xl reveal-up" style={{ animationDelay: '0.8s' }}>
              <p className="text-4xl font-black text-brand-secondary">8+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-text-muted">Operational States</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Showcase - Editorial Layout */}
      <section className="py-24 bg-white">
        <div className="section-padding mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.4em] font-black text-brand-secondary mb-4">Core Offerings</p>
              <h2 className="text-5xl lg:text-6xl tracking-tighter">Everything you need to <span className="text-brand-text-muted/30">Dominate</span> the market.</h2>
            </div>
            <Link to="/services" className="group flex items-center gap-3 font-black text-xs uppercase tracking-widest border-b-2 border-brand-secondary pb-2 mb-2 hover:gap-5 transition-all">
              All Services <FiArrowRight className="text-brand-secondary" />
            </Link>
          </div>
        </div>

        {/* Infinite Sliding Carousel - Full Screen Width */}
        <div className="relative w-full overflow-hidden">
          <motion.div 
            className="flex gap-8"
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
                className="relative h-[500px] w-[350px] flex-shrink-0 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-premium transition-all duration-700 group"
              >
                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/20 to-transparent"></div>
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <p className="text-[10px] uppercase tracking-widest font-black text-brand-secondary mb-3">{service.tag}</p>
                  <h3 className="text-3xl text-white mb-6 group-hover:translate-x-2 transition-transform duration-500 whitespace-pre-line font-bold font-display leading-[1.1]">{service.title}</h3>
                  <Link to={`/services/${service.id}`} className="w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
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
