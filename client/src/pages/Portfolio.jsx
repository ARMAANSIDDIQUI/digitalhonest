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
    <div className="bg-white min-h-screen">
      <Helmet><title>Portfolio | Our Best Campaigns | Digital Honest</title></Helmet>

      {/* Hero Section - High-Fidelity Architectural Monolith */}
      <section className="relative min-h-screen w-full flex items-center py-24 overflow-hidden bg-brand-primary">
        {/* Background Depth & Animated Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-secondary/10 rounded-full blur-[140px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

        <div className="section-padding relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Content Column */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-4 px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6 lg:mb-10 shadow-2xl group">
                <span className="w-2.5 h-2.5 bg-brand-secondary rounded-full"></span>
                <span className="text-[10px] uppercase tracking-[0.5em] font-black text-white/50 group-hover:text-brand-secondary transition-colors">Proven Impact Portfolio</span>
              </div>

              <h1 className="text-[2.25rem] lg:text-[6rem] mb-8 lg:mb-10 leading-[1] lg:leading-[1.1] tracking-tighter text-white font-bold font-display">
                Success <br />
                <span className="premium-gradient-text italic font-serif block mt-3 tracking-tighter">Stories</span>
              </h1>

              <p className="text-[10px] lg:text-base text-white/50 leading-relaxed font-medium mb-8 lg:mb-14 max-w-xl border-l-2 border-brand-secondary/40 pl-6 lg:pl-10">
                Architecting visibility for brands that demand the spotlight. From national OOH blitzes to precision digital scaling.
              </p>

              {/* Interactive Search Bar Overlay */}
              <div className="w-full max-w-xl relative group">
                <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 text-xl group-focus-within:text-brand-secondary transition-colors" />
                <input
                  type="text"
                  placeholder="Search by brand, category, or impact..."
                  className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-16 py-6 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-secondary/50 focus:ring-4 focus:ring-brand-secondary/5 transition-all backdrop-blur-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </motion.div>

            {/* Right Media Column - Editorial Layered Grid */}
            <motion.div
              className="lg:col-span-5 relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-square">
                {/* Layer 1 - Main Background Image */}
                <div className="absolute top-0 right-0 w-[80%] aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl rotate-3">
                  <img src={projects[0].image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Portfolio Highlight" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent"></div>
                </div>

                {/* Layer 2 - Overlapping Secondary Image */}
                <div className="absolute bottom-10 left-0 w-[60%] aspect-square rounded-[2.5rem] overflow-hidden border border-white/20 shadow-3xl -rotate-6 transition-transform hover:rotate-0 duration-700">
                  <img src={projects[1].image} className="w-full h-full object-cover" alt="Campaign Impact" />
                  <div className="absolute inset-0 bg-brand-secondary/20 mix-blend-overlay"></div>
                </div>

                {/* Layer 3 - Floating Decorative Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/10 backdrop-blur-md flex items-center justify-center rotate-12 bg-white/5">
                  <div className="text-center">
                    <p className="text-[8px] font-black text-white/40 uppercase tracking-[0.3em]">Marketing</p>
                    <p className="text-xl font-serif italic text-brand-secondary">Architecture</p>
                    {/* <p className="text-[8px] font-black text-white/40 uppercase tracking-[0.3em]">2024</p> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
                className="group relative bg-white rounded-[3.5rem] overflow-hidden shadow-glass hover:shadow-premium transition-all duration-700"
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
      <section className="section-padding min-h-[90vh] lg:min-h-[95vh] py-12 lg:py-24 relative overflow-hidden flex items-center bg-brand-primary">
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
