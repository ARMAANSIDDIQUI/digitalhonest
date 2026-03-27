import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CurtainLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading/initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-brand-text-main flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated Branding */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-24 h-24 mb-8 mx-auto relative group">
              {/* Rotating Flare Layer 1 */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-r-2 border-brand-secondary rounded-full blur-[2px] opacity-60"
              />
              {/* Rotating Flare Layer 2 */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-8px] border-l-[1px] border-white/20 rounded-full blur-[1px]"
              />
              {/* Central Logo Container */}
              <div className="absolute inset-2 bg-white/5 rounded-full backdrop-blur-xl border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
                <img 
                  src="/logo.png" 
                  alt="Digital Honest" 
                  className="w-full h-full object-cover brightness-110 contrast-125"
                />
              </div>
            </div>
            
            <h1 className="text-white text-2xl font-display font-black tracking-[0.8em] md:tracking-[1.2em] uppercase mb-4 translate-x-[0.4em] md:translate-x-[0.6em]">
              Digital Honest
            </h1>
            <p className="text-white/30 text-[8px] md:text-[10px] uppercase tracking-[1em] md:tracking-[1.5em] font-black translate-x-[0.5em] md:translate-x-[0.75em]">
              Architecting Visibility
            </p>
          </motion.div>

          {/* Progress Bar Background */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-full bg-brand-secondary shadow-[0_0_10px_rgba(234,88,12,0.5)]"
            />
          </div>

          {/* Abstract Curtains for depth */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CurtainLoader;
