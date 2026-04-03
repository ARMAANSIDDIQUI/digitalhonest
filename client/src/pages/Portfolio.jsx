import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, heroImages } from '../constants/projects';
import { operationalStates } from '../constants/services';
import { FiExternalLink, FiSearch, FiArrowRight, FiMapPin, FiDownload, FiX } from 'react-icons/fi';
import TestimonialSection from '../components/common/Testimonials';

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImg, setSelectedImg] = useState(null);
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.client?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImg]);

  return (
    <div className="bg-white min-h-screen">
      <Helmet><title>Portfolio | Our Best Campaigns | Digital Honest</title></Helmet>

      {/* Hero Section - High-Fidelity Architectural Monolith */}
      <section className="relative min-h-screen w-full flex items-center pt-32 pb-12 lg:py-24 overflow-hidden bg-brand-primary">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-secondary/10 rounded-full blur-[140px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

        <div className="section-padding relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-4 px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6 lg:mb-10 shadow-2xl group">
                <span className="w-2.5 h-2.5 bg-brand-secondary rounded-full"></span>
                <span className="text-[10px] uppercase tracking-[0.5em] font-black text-white/50 group-hover:text-brand-secondary transition-colors">Proven Impact Portfolio</span>
              </div>

              <h1 className="text-4xl lg:text-[6rem] mb-8 lg:mb-10 leading-[1] lg:leading-[1.1] tracking-tighter text-white font-bold font-display">
                Success <br />
                <span className="premium-gradient-text italic font-serif block mt-3 tracking-tighter">Stories</span>
              </h1>

              <p className="text-[10px] lg:text-base text-white/50 leading-relaxed font-medium mb-8 lg:mb-14 max-w-xl border-brand-secondary/40 lg:border-l-2 pl-0 lg:pl-10">
                Architecting visibility for brands that demand the spotlight. From national OOH blitzes to precision digital scaling.
              </p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-xl relative group"
              >
                <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 text-xl group-focus-within:text-brand-secondary transition-colors" />
                <input
                  type="text"
                  placeholder="Search by brand, category, or impact..."
                  className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-16 py-6 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-secondary/50 focus:ring-4 focus:ring-brand-secondary/5 transition-all backdrop-blur-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </motion.div>

              <motion.div 
                 className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.8 }}
               >
                 <a 
                   href="/documents/Client_Result.pdf" 
                   download="Digital_Honest_Impact_Results.pdf"
                   className="btn-conversion !bg-white/10 !border-white/20 !backdrop-blur-md overflow-hidden group flex items-center justify-center gap-3 !py-6 !px-10"
                 >
                   Download Proven Results <FiDownload className="group-hover:translate-y-1 transition-transform" />
                 </a>
               </motion.div>
             </motion.div>

            <motion.div
              className="lg:col-span-5 relative mt-16 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-square">
                <div className="absolute top-0 right-0 w-[80%] aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl rotate-3">
                  <img src={heroImages.billboard} className="w-full h-full object-cover transition-all duration-700 hover:scale-105" alt="Portfolio Highlight" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent"></div>
                </div>

                <div className="absolute bottom-10 left-0 w-[60%] aspect-square rounded-[2.5rem] overflow-hidden border border-white/20 shadow-3xl -rotate-6 transition-transform hover:rotate-0 duration-700">
                  <img src={heroImages.hoarding} className="w-full h-full object-cover" alt="Campaign Impact" />
                  <div className="absolute inset-0 bg-brand-secondary/20 mix-blend-overlay"></div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/10 backdrop-blur-md flex items-center justify-center rotate-12 bg-white/5">
                  <div className="text-center">
                    <p className="text-[8px] font-black text-white/40 uppercase tracking-[0.3em]">Marketing</p>
                    <p className="text-xl font-serif italic text-brand-secondary">Architecture</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-padding !py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.slice(0, visibleCount).map((project, i) => (
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
                  <div 
                    className="absolute inset-0 bg-brand-text-main/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center cursor-pointer"
                    onClick={() => setSelectedImg(project.image)}
                  >
                    <span className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-black text-[10px] uppercase tracking-widest border border-white/30">See Detailed Image</span>
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

        {filteredProjects.length > visibleCount && (
          <div className="mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(filteredProjects.length)}
              className="px-12 py-5 rounded-full border-2 border-brand-primary text-brand-primary font-black text-[12px] uppercase tracking-[0.3em] hover:bg-brand-primary hover:text-white transition-all duration-500 shadow-xl"
            >
              Show All {filteredProjects.length} Campaigns
            </motion.button>
          </div>
        )}

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

      {/* Testimonials - Client Success Stories */}
      <TestimonialSection />

      {/* Strategic Footprint - Full Width Dark */}
      <section className="bg-brand-primary py-24 lg:py-32 relative overflow-hidden flex items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-secondary/5 rounded-full blur-[120px] -z-10"></div>

        <div className="section-padding w-full relative z-10">
          <div className="glass-card !bg-white/5 backdrop-blur-3xl !p-12 md:!p-20 !rounded-[4rem] border border-white/10 shadow-4xl">
            <div className="text-center mb-16">
              <p className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-secondary mb-4">Market Presence</p>
              <h2 className="text-4xl md:text-7xl tracking-tighter font-display leading-tight text-white font-bold">
                Live in <br/>
                <span className="premium-gradient-text italic font-serif">8+ Operational States</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
              {operationalStates.map((item, idx) => (
                <div key={idx} className="p-10 rounded-[3rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 group">
                  <div className="w-14 h-14 rounded-2xl bg-brand-secondary/20 flex items-center justify-center text-brand-secondary mb-8 group-hover:scale-110 transition-transform">
                    <FiMapPin size={28} />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white uppercase tracking-tighter">{item.region}</h4>
                  <p className="text-white/40 text-sm font-medium leading-relaxed group-hover:text-white/60 transition-colors uppercase tracking-widest">{item.states}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* High-Fidelity Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] flex items-center justify-center p-4 md:p-10 bg-brand-primary/95 backdrop-blur-3xl overflow-y-auto"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button 
              className="fixed top-8 right-8 z-[510] text-white/40 hover:text-white bg-white/10 p-4 rounded-full backdrop-blur-md transition-all border border-white/10"
              onClick={() => setSelectedImg(null)}
              whileHover={{ rotate: 90, scale: 1.1 }}
            >
              <FiX size={32} />
            </motion.button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl h-fit flex items-center justify-center pointer-events-none p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImg} 
                alt="Detailed Campaign View" 
                className="max-w-full max-h-[85vh] object-contain rounded-[2rem] shadow-4xl border border-white/10 pointer-events-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
