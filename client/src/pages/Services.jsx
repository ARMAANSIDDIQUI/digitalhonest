import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { services } from '../constants/services';
import { 
  FiArrowRight, 
  FiMap, 
  FiMonitor, 
  FiTruck, 
  FiLayers, 
  FiStar,
  FiZap 
} from 'react-icons/fi';

const Services = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'outdoor': return <FiLayers size={32} />;
      case 'transit': return <FiTruck size={32} />;
      case 'events': return <FiStar size={32} />;
      case 'local': return <FiZap size={32} />;
      case 'digital': return <FiMonitor size={32} />;
      case 'map': return <FiMap size={32} />;
      default: return <FiArrowRight size={32} />;
    }
  };

  return (
    <div className="pt-24 pb-24 bg-brand-bg">
      <Helmet>
        <title>Our Services | Full 360 Marketing Agency</title>
      </Helmet>
      
      <div className="section-padding !py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/5 text-brand-primary text-xs font-bold uppercase tracking-wider mb-2">
            Professional Expertise
          </div>
          <h1 className="text-4xl lg:text-6xl mb-4">
            Our <span className="premium-gradient-text">Service Pillars</span>
          </h1>
          <p className="text-lg text-brand-text-muted max-w-2xl mx-auto font-medium">
            High-conversion offline & online branding strategies designed for architectural authority and real results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col h-full"
            >
              <div className="glass-card p-2 mb-6 overflow-hidden aspect-video relative">
                 {/* Placeholder for high-end assets or abstract visuals */}
                 <div className="w-full h-full bg-slate-100 rounded-2xl flex items-center justify-center overflow-hidden transition-transform duration-700 group-hover:scale-105">
                    <div className="text-brand-primary/20">
                       {getIcon(service.icon)}
                    </div>
                 </div>
                 <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-brand-primary font-bold shadow-sm">
                    {index + 1}
                 </div>
              </div>

              <div className="px-2">
                <h3 className="text-2xl mb-3 font-display group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-brand-text-muted mb-6 text-sm leading-relaxed font-medium">
                  {service.shortDesc}
                </p>

                <Link 
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 font-bold text-brand-primary group-hover:gap-4 transition-all text-sm border-b-2 border-brand-primary/20 pb-1"
                >
                  Explore Capabilities <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust Section for added 'oomph' */}
      <div className="mt-32 section-padding !py-20 bg-white rounded-[4rem] shadow-premium">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-4xl mb-6">Why Dehradun's Top Brands <span className="text-brand-primary">Trust Us</span></h2>
               <p className="text-lg text-brand-text-muted mb-8 italic">"Digital Honest simplified our entire marketing stack. From hoardings to social ads, they manage it all under one roof."</p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-bg"></div>
                  <div>
                     <p className="font-bold">Akash Sharma</p>
                     <p className="text-xs text-brand-text-muted uppercase font-bold tracking-widest">MD, Regional Enterprises</p>
                  </div>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {[1,2,3,4].map(i => (
                  <div key={i} className="aspect-square bg-brand-bg rounded-3xl flex items-center justify-center font-black text-brand-primary/10 text-4xl">
                     DH
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default Services;
