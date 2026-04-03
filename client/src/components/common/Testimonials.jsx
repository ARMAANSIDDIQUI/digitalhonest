import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrendingUp, FiX, FiCheckCircle, FiPlus } from 'react-icons/fi';
import { testimonials, brandLogos } from '../../constants/testimonials';

const BrandMarquee = () => {
  return (
    <div className="w-full overflow-hidden py-10 bg-white/5 backdrop-blur-sm border-y border-white/10 mb-20">
      <motion.div 
        className="flex gap-20 items-center whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...brandLogos, ...brandLogos, ...brandLogos].map((logo, idx) => (
          <img 
            key={idx} 
            src={logo} 
            className="h-12 md:h-16 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-500" 
            alt="Trusted Brand" 
          />
        ))}
      </motion.div>
    </div>
  );
};

export default function TestimonialSection() {
  const [selectedSnapshot, setSelectedSnapshot] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Initial display count
  const initialCount = 6;
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, initialCount);

  // Lock scroll when modal is open
  React.useEffect(() => {
    if (selectedSnapshot) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedSnapshot]);

  return (
    <section id="trusted-by" className="py-32 bg-brand-primary relative overflow-hidden">
      {/* Background Architectural Depth */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-secondary/5 rounded-full blur-[160px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -z-10 -translate-x-1/3 translate-y-1/3"></div>
      
      <BrandMarquee />

      <div className="section-padding">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-secondary mb-6">Social Architecture & Proof</p>
          <h2 className="text-4xl lg:text-7xl tracking-tighter leading-tight text-white font-bold">
            Trusted by <br/>
            <span className="premium-gradient-text italic font-serif block mt-2">Premier Brands</span>
          </h2>
          <p className="text-white/50 mt-8 font-medium text-lg leading-relaxed border-brand-secondary/40 lg:border-l-2 pl-0 lg:pl-10 text-center lg:text-left mx-auto lg:mx-0 max-w-2xl">
            We let our client's growth metrics do the talking. High-fidelity visibility engineered for market dominance and undeniable ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((t, idx) => (
              <motion.div 
                key={t.id}
                layout
                className="glass-card !bg-white/5 !rounded-[3.5rem] !p-12 h-full flex flex-col justify-between group hover:!bg-white/10 transition-all duration-700 border border-white/10 shadow-3xl overflow-hidden relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-secondary/5 rounded-full blur-3xl group-hover:bg-brand-secondary/10 transition-colors"></div>

                <div>
                  <div className="flex items-center gap-5 mb-10">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-brand-secondary/50 ring-4 bg-white p-2 shadow-2xl shrink-0">
                      <img src={t.image} alt={t.client} className="w-full h-full object-contain group-hover:scale-105 transition-all duration-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl leading-tight text-white group-hover:text-brand-secondary transition-colors">{t.client}</h4>
                      <p className="text-[9px] uppercase font-black tracking-widest text-brand-secondary/70 mt-1.5">{t.author}</p>
                    </div>
                  </div>
                  
                  <p className="text-xl font-serif italic text-white/80 leading-relaxed mb-12 group-hover:scale-[1.02] transition-transform origin-top-left">
                    "{t.text}"
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-10 mt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-secondary/20 flex items-center justify-center">
                      <FiTrendingUp className="text-brand-secondary text-sm" />
                    </div>
                    <span className="text-xs font-black text-brand-secondary uppercase tracking-widest">{t.stats}</span>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedSnapshot(t)}
                    className="flex items-center gap-2 group/btn"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover/btn:text-white transition-colors">Impact Snapshot</span>
                    <div className="w-5 h-5 rounded-md border border-white/20 flex items-center justify-center group-hover/btn:bg-brand-secondary group-hover/btn:border-brand-secondary transition-all">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {testimonials.length > initialCount && !showAll && (
          <div className="mt-20 text-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(true)}
              className="px-12 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-black text-[10px] uppercase tracking-[0.4em] hover:bg-brand-secondary hover:border-brand-secondary transition-all flex items-center gap-4 mx-auto"
            >
              Architect More Proof <FiPlus />
            </motion.button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedSnapshot && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-start justify-center p-4 md:p-10 lg:p-20 bg-brand-primary/95 backdrop-blur-3xl overflow-y-auto pt-10 md:pt-20 custom-scrollbar"
            onClick={() => setSelectedSnapshot(null)}
          >
            <div className="absolute inset-0 z-0"></div>

            <motion.button 
              className="fixed top-8 right-8 z-[210] text-white/40 hover:text-white bg-white/10 p-4 rounded-full backdrop-blur-md transition-all border border-white/10"
              onClick={() => setSelectedSnapshot(null)}
              whileHover={{ rotate: 90, scale: 1.1 }}
            >
              <FiX size={32} />
            </motion.button>
            
            <motion.div 
              initial={{ scale: 0.95, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 50, opacity: 0 }}
              className="relative z-[205] w-full max-w-6xl bg-white rounded-[3rem] md:rounded-[4rem] border border-white/10 overflow-hidden shadow-4xl grid md:grid-cols-2 mb-10 min-h-fit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Side - Shows CAMPAIGN SNAPSHOT, not Logo */}
              <div className="aspect-[4/5] md:aspect-auto h-full relative group bg-brand-bg">
                <img 
                  src={selectedSnapshot.snapshotImage} 
                  alt="Field Proof Snapshot" 
                  className="w-full h-full object-cover transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-secondary mb-2">Verified Architectural Proof</p>
                  <h3 className="text-3xl font-bold font-display uppercase tracking-widest">{selectedSnapshot.stats}</h3>
                </div>
              </div>

              {/* Data Side */}
              <div className="p-10 md:p-16 flex flex-col justify-center bg-white">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-secondary/10 rounded-full border border-brand-secondary/20 mb-8 w-fit">
                  <FiCheckCircle className="text-brand-secondary" />
                  <span className="text-[10px] uppercase font-black tracking-widest text-brand-secondary">Case Verification Complete</span>
                </div>
                
                <h2 className="text-4xl text-brand-primary font-display font-bold leading-tight mb-8">
                  Architecting Growth for <br/>
                  <span className="premium-gradient-text italic font-serif text-5xl md:text-6xl mt-2 block">{selectedSnapshot.client}</span>
                </h2>

                <div className="space-y-8 mb-12">
                   <div className="flex gap-6">
                      <div className="w-1.5 bg-brand-secondary h-auto rounded-full shrink-0"></div>
                      <p className="text-xl text-brand-text-muted italic font-serif leading-relaxed">
                        "{selectedSnapshot.text}"
                      </p>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-8 border-t border-brand-bg pt-10">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted/40 mb-2">Primary KPI</p>
                    <p className="text-2xl font-bold text-brand-secondary">{selectedSnapshot.stats}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted/40 mb-2">Verification</p>
                    <p className="text-2xl font-bold text-brand-primary">Certified</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
