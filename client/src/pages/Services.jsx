import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { services, operationalStates } from '../constants/services';
import {
  FiArrowRight,
  FiMap,
  FiMonitor,
  FiTruck,
  FiLayers,
  FiStar,
  FiZap,
  FiSearch,
  FiMapPin
} from 'react-icons/fi';

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-24 bg-brand-bg min-h-screen">
      <Helmet>
        <title>Our Services | Full 360 Marketing Agency | Digital Honest</title>
        <meta name="description" content="Explore our premium advertising services. From highway hoardings to digital performance marketing, we cover it all." />
      </Helmet>

      {/* Header Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-secondary mb-6">Capabilities</p>
            <h1 className="text-6xl lg:text-8xl tracking-tighter mb-8 leading-none">
              Strategic <br/><span className="premium-gradient-text italic font-serif">Powerhouses</span>
            </h1>
            <p className="text-xl text-brand-text-muted max-w-2xl mx-auto font-medium leading-relaxed mb-16">
              We merge architectural physical visibility with precision digital scaling to create unstoppable brand momentum.
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative group mb-12">
            <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-text-muted text-xl group-focus-within:text-brand-secondary transition-colors" />
            <input 
              type="text" 
              placeholder="Searching for a specific medium?" 
              className="w-full luxury-input !pl-16 !py-6 shadow-xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Operational Sites Section (Special) */}
      <section className="section-padding mb-32">
        <div className="glass-card !bg-brand-text-main !p-12 !rounded-[3.5rem] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[100px]"></div>
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
              <div className="lg:col-span-1">
                 <div className="flex items-center gap-3 text-brand-secondary mb-4">
                    <FiMapPin size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Live Operations</span>
                 </div>
                 <h2 className="text-3xl text-white font-display leading-tight">National <br/>Reach</h2>
              </div>
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                 {operationalStates.map((item, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                       <p className="text-brand-secondary text-[10px] font-black uppercase tracking-widest mb-2">{item.region}</p>
                       <p className="text-white/80 text-sm font-medium leading-relaxed">{item.states}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-sm hover:shadow-premium transition-all duration-700 bg-white">
                  <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/40 to-transparent"></div>
                  
                  <div className="absolute inset-x-8 bottom-8 glass-card !p-8 !rounded-[2.5rem] translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[9px] uppercase tracking-widest font-black text-brand-secondary mb-2">{service.tag}</p>
                        <h3 className="text-2xl text-white font-bold leading-tight whitespace-pre-line">{service.title}</h3>
                      </div>
                      <Link to={`/contact?service=${service.id}`} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-primary shadow-lg hover:scale-110 transition-transform">
                        <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 px-4">
                  <p className="text-brand-text-muted leading-relaxed font-medium mb-6 line-clamp-2">
                    {service.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((f, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white border border-gray-100 rounded-full text-brand-text-muted">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Trust Section */}
      <section className="mt-32 section-padding pb-32">
        <div className="glass-card !rounded-[4rem] p-12 md:p-24 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px]"></div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] font-black text-brand-secondary mb-6">Why Trust Us</p>
              <h2 className="text-5xl lg:text-6xl tracking-tighter mb-8 leading-tight">
                Built on Integrity, <br/><span className="premium-gradient-text italic font-serif">Fueled by Data</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary shrink-0">
                    <FiMap size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">National Presence</h4>
                    <p className="text-brand-text-muted font-medium">Operations spread across 8+ states with high-impact highway visibility.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary shrink-0">
                    <FiMonitor size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Digital Dominance</h4>
                    <p className="text-brand-text-muted font-medium">Full-stack digital performance with ROAS-focused campaign management.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[3rem] shadow-xl rotate-3">
                 <div className="w-full h-full bg-brand-primary rounded-[3rem] flex flex-col items-center justify-center p-12 text-center overflow-hidden">
                    <p className="text-6xl font-black text-brand-secondary mb-4">100%</p>
                    <p className="text-xs uppercase tracking-widest font-black text-brand-text-muted italic leading-relaxed">
                      Commitment to <br/>Honest Growth & <br/>Direct Conversions
                    </p>
                 </div>
              </div>
              <div className="absolute -bottom-6 -left-6 aspect-square w-32 bg-brand-secondary rounded-3xl flex items-center justify-center -rotate-6 shadow-xl">
                 <FiZap size={48} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
