import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMaximize2, FiArrowRight, FiX } from 'react-icons/fi';
import { projects } from '../../constants/projects';

export default function ImpactRail() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  return (
    <section className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-secondary mb-6">Impact <span className="text-brand-secondary">Rail.</span></p>
            <h2 className="text-5xl lg:text-7xl tracking-tighter leading-[0.9] text-brand-primary">
              Global <span className="premium-gradient-text italic font-serif">Wins</span> <br/>
              <span className="text-brand-text-muted/30 italic font-serif">Architected.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-8 md:items-end">
            <p className="text-lg text-brand-text-muted font-medium max-w-sm leading-relaxed border-brand-secondary/30 lg:border-l-2 pl-0 lg:pl-10 text-left">
              Verifiable proof of our market-dominating capabilities delivered with architectural precision across global markets.
            </p>
            <Link to="/portfolio" className="text-brand-primary text-xs font-black uppercase tracking-[0.3em] flex items-center gap-4 hover:text-brand-secondary transition-colors group">
               Full Architectural Index <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full overflow-hidden">
        <motion.div
          className="flex gap-12 px-8"
          animate={{
            x: [0, -3000], 
          }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Using full portfolio data for maximum diversity and authenticity */}
          {[...projects, ...projects].map((project, idx) => (
            <div key={idx} className="flex-none w-[85vw] md:w-[600px] h-fit group relative">
              <div className="aspect-[16/10] overflow-hidden mb-8 rounded-[2.5rem] bg-gray-900 relative shadow-4xl group-hover:shadow-brand-secondary/20 transition-all duration-700">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  src={project.image}
                  alt={project.title}
                />
                
                {/* View Detail Overlay */}
                <div className="absolute inset-0 bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[4px] flex items-center justify-center p-8 z-20">
                   <button 
                     onClick={(e) => {
                       e.stopPropagation();
                       setSelectedImage(project.image);
                     }}
                     className="flex flex-col items-center gap-4 text-white"
                   >
                     <div className="w-16 h-16 rounded-full bg-brand-secondary flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                        <FiMaximize2 className="text-2xl" />
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-[0.4em]">Visual Detail</span>
                   </button>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-[#000613] via-transparent to-transparent opacity-80 z-10">
                  <div className="absolute top-10 left-10 py-1.5 px-4 rounded-full border border-white/10 backdrop-blur-md bg-white/5">
                     <p className="text-[8px] font-black text-brand-secondary uppercase tracking-widest">{project.category}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 px-2">
                <h4 className="text-4xl text-brand-secondary font-bold tracking-tight group-hover:text-brand-primary transition-colors">{project.title}</h4>
                <p className="text-brand-text-muted text-lg font-medium max-w-md italic leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10 lg:p-20 bg-brand-primary/95 backdrop-blur-3xl"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              className="fixed top-8 right-8 z-[1010] text-white/40 hover:text-white bg-white/10 p-4 rounded-full backdrop-blur-md transition-all border border-white/10"
              whileHover={{ rotate: 90, scale: 1.1 }}
            >
              <FiX size={32} />
            </motion.button>
            
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              className="max-w-full max-h-full object-contain rounded-[2rem] shadow-4xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
