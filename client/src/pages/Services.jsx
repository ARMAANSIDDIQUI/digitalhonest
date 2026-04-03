import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { services, operationalStates } from '../constants/services';
import { projects } from '../constants/projects';
import ImpactRail from '../components/common/ImpactRail';
import {
  FiArrowRight,
  FiMap,
  FiMonitor,
  FiTruck,
  FiZap,
  FiSearch,
  FiMapPin,
  FiX,
  FiMaximize2
} from 'react-icons/fi';

// AI Hero Images
import outdoorHero from '../assets/extreme_photorealistic_billboard_1774478569369.png';
import digitalHero from '../assets/extreme_photorealistic_dashboard_1774478618848.png';
import transitHero from '../assets/refined_transit_regional_bus_1774478793423.png';
import reachHero from '../assets/refined_national_reach_map_1774478777301.png';
import eventHero from '../assets/extreme_photorealistic_stage_1774478602352.png';

const heroSlides = [
  { img: outdoorHero, label: 'Omni-Outdoor', tag: 'Monolithic Visibility' },
  { img: digitalHero, label: 'Digital Architecture', tag: 'Precision Performance' },
  { img: transitHero, label: 'Kinetic Branding', tag: 'Moving Market Share' },
  { img: reachHero, label: 'National Footprint', tag: 'Network Dominance' },
  { img: eventHero, label: 'Live Activations', tag: 'Brand Arrival' }
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full group">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={heroSlides[index].img} className="w-full h-full object-cover" alt={heroSlides[index].label} />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/20 to-transparent"></div>
          
          <div className="absolute bottom-10 left-10 text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-secondary mb-2">{heroSlides[index].tag}</p>
            <h3 className="text-2xl font-bold text-white font-display">{heroSlides[index].label}</h3>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 right-6 flex gap-2">
        {heroSlides.map((_, i) => (
          <div 
            key={i} 
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === index ? 'bg-brand-secondary w-6' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredServices = services.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Our Services | Full 360 Marketing Agency | Digital Honest</title>
        <meta name="description" content="Explore our premium advertising services. From highway hoardings to digital performance marketing, we cover it all." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center py-12 lg:py-24 overflow-hidden bg-brand-primary">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-secondary/5 rounded-full blur-[160px] -z-10 translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="section-padding relative z-10 w-full grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div
            className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-4 px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6 lg:mb-10 shadow-2xl group">
              <span className="w-2.5 h-2.5 bg-brand-secondary rounded-full animate-ping"></span>
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] font-black text-white/50 group-hover:text-brand-secondary transition-colors">Strategic Capabilities</span>
            </div>
            
            <h1 className="text-4xl lg:text-[6rem] mb-8 lg:mb-10 leading-[1] lg:leading-[1.1] tracking-tighter text-white font-bold font-display">
               360° <br/>
               <span className="premium-gradient-text italic font-serif block mt-3 tracking-tighter">Dominance</span>
            </h1>
            
            <p className="text-[10px] lg:text-base text-white/50 leading-relaxed font-medium mb-8 lg:mb-14 max-w-2xl border-brand-secondary/40 lg:border-l-2 pl-0 lg:pl-10">
               Engineering brand momentum from high-velocity physical visibility to precision-targeted digital scaling. Total market architecture.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
               <div className="group">
                  <p className="text-4xl font-black text-brand-secondary mb-2 group-hover:translate-x-2 transition-transform">8+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30">Active States</p>
               </div>
               <div className="group">
                  <p className="text-4xl font-black text-white mb-2 group-hover:translate-x-2 transition-transform">24/7</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30">Ops Control</p>
               </div>
               <div className="group hidden md:block">
                  <p className="text-4xl font-black text-white mb-2 group-hover:translate-x-2 transition-transform">Hybrid</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30">Omnichannel</p>
               </div>
            </div>

            <div className="max-w-xl relative group">
               <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 text-xl group-focus-within:text-brand-secondary transition-colors" />
               <input 
                 type="text" 
                 placeholder="Search our monolithic services..." 
                 className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-16 py-5 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-secondary/50 transition-all backdrop-blur-md"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
               />
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative mt-16 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
             <div className="relative aspect-square md:aspect-[4/5] rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl">
                <HeroCarousel />
                <div className="absolute top-10 right-10 w-24 h-24 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center -rotate-12 bg-white/5 pointer-events-none">
                   <p className="text-[8px] font-black text-white/40 uppercase tracking-[0.3em] text-center">Trust <br/>Honest <br/>Growth</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* National Reach Section */}
      <section className="bg-brand-primary py-24 relative overflow-hidden">
        <div className="section-padding w-full relative z-10">
          <div className="glass-card !bg-white/5 !p-12 !rounded-[3.5rem] relative overflow-hidden border border-white/10 backdrop-blur-xl">
             <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[100px]"></div>
             <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
                <div className="lg:col-span-1">
                   <div className="flex items-center gap-3 text-brand-secondary mb-4">
                      <FiMapPin size={20} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Live Operations</span>
                   </div>
                   <h2 className="text-4xl text-white font-display font-bold leading-tight">National <br/><span className="text-brand-secondary italic">Reach</span></h2>
                </div>
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                   {operationalStates.map((item, idx) => (
                      <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-500 group">
                         <p className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 group-hover:scale-105 transition-transform origin-left">{item.region}</p>
                         <p className="text-white/60 text-sm font-medium leading-relaxed group-hover:text-white transition-colors">{item.states}</p>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding py-16">
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
                  
                  <div className="absolute inset-x-4 md:inset-x-8 bottom-6 md:bottom-8 glass-card !p-6 md:!p-8 !rounded-[2rem] md:!rounded-[2.5rem] translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                      <div>
                        <p className="text-[8px] md:text-[9px] uppercase tracking-widest font-black text-brand-secondary mb-2">{service.tag}</p>
                        <h3 className="text-xl md:text-2xl text-white font-bold leading-tight whitespace-pre-line">{service.title}</h3>
                      </div>
                      <Link to={`/services/${service.id}`} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-brand-primary shadow-lg hover:scale-110 transition-transform">
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

      <ImpactRail />

      {/* Trust Quote Section */}
      <section className="section-padding pb-32 mt-32">
        <div className="glass-card !rounded-[4rem] p-12 md:p-24 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px]"></div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] font-black text-brand-secondary mb-6">Why Trust Us</p>
              <h2 className="text-5xl lg:text-6xl tracking-tighter mb-8 leading-tight text-brand-primary">
                Built on Integrity, <br/><span className="premium-gradient-text italic font-serif">Fueled by Data</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary shrink-0">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">National Presence</h4>
                    <p className="text-brand-text-muted font-medium">Operations spread across 8+ states with high-impact highway visibility.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary shrink-0">
                    <FiZap size={24} />
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
                    <p className="text-xs uppercase tracking widest font-black text-white/40 italic leading-relaxed">
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
