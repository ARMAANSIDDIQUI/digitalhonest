import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiSearch, FiArrowRight, FiMapPin } from 'react-icons/fi';
import { projects } from '../constants/projects';
import { operationalStates } from '../constants/services';

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.client?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-24 bg-brand-bg min-h-screen">
      <Helmet><title>Portfolio | Our Best Campaigns | Digital Honest</title></Helmet>
      
      <section className="section-padding relative py-12 overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-8">
            <span className="w-2 h-2 bg-brand-secondary rounded-full"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-text-muted">Proven Excellence</span>
          </div>
          <h1 className="text-6xl lg:text-7xl mb-8 tracking-tighter leading-none">
            Our Work <span className="premium-gradient-text italic font-serif">Speaks</span>
          </h1>
          <p className="text-xl text-brand-text-muted font-medium leading-relaxed">
            Delivering 360° marketing dominance for regional and national brands. High impact, high conversion.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-20 relative group">
          <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-text-muted text-xl group-focus-within:text-brand-secondary transition-colors" />
          <input 
            type="text" 
            placeholder="Search campaigns, brands, or categories..." 
            className="w-full luxury-input !pl-16 !py-6 shadow-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      <div className="section-padding !py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-[3.5rem] overflow-hidden shadow-glass hover:shadow-premium transition-all duration-700 border border-white"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-brand-text-main/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                     <span className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-black text-[10px] uppercase tracking-widest border border-white/30">View Case Study</span>
                  </div>
                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-brand-secondary font-black text-[9px] uppercase tracking-widest shadow-lg">{project.tag}</span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary">{project.category}</span>
                    <FiExternalLink className="text-brand-text-muted group-hover:text-brand-primary transition-colors duration-500" />
                  </div>
                  <h4 className="text-2xl mb-4 font-display font-bold leading-tight group-hover:text-brand-primary transition-colors">{project.title}</h4>
                  <p className="text-brand-text-muted text-sm font-medium leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-brand-text-muted text-lg italic">No campaigns found matching your search. Try a different keyword.</p>
          </div>
        )}

        <div className="mt-24 text-center">
          <Link to="/contact" className="btn-conversion !px-12 !py-6 shadow-2xl">
            Launch Your Campaign Today
          </Link>
        </div>
      </div>

      {/* Operational Sites Section (Special) */}
      <section className="mt-32 section-padding relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-secondary/5 rounded-full blur-[120px] -z-10"></div>
        
        <div className="glass-card !bg-white/40 backdrop-blur-3xl !p-12 md:!p-20 !rounded-[4rem] border border-white">
           <div className="text-center mb-16">
              <p className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-secondary mb-4">Strategic Footprint</p>
              <h2 className="text-4xl md:text-5xl tracking-tighter font-display leading-tight">Live in <span className="premium-gradient-text italic">8+ Operational States</span></h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {operationalStates.map((item, idx) => (
                 <div key={idx} className="p-8 rounded-[2.5rem] bg-white shadow-sm border border-gray-100 hover:shadow-premium transition-all duration-500">
                    <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-6">
                       <FiMapPin size={24} />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{item.region}</h4>
                    <p className="text-brand-text-muted text-sm font-medium leading-relaxed">{item.states}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
