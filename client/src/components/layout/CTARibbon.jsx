import { Link } from 'react-router-dom';
import { FiMessageCircle, FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function CTARibbon() {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: 'spring', stiffness: 120 }}
      className="fixed bottom-0 left-0 w-full z-50 lg:hidden"
    >
      <div className="bg-white/80 backdrop-blur-xl border-t border-white/40 px-4 py-3 pb-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="flex justify-between items-center max-w-lg mx-auto gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.2em] leading-none mb-1.5 opacity-80">Elevate Your Brand</p>
            <h4 className="text-[14px] font-black text-brand-primary leading-tight truncate">Advertising shuru karein!</h4>
          </div>
          
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link 
              to="/contact" 
              className="bg-brand-primary text-white h-11 px-5 rounded-2xl flex items-center gap-2 shadow-lg shadow-brand-primary/20 active:scale-95 transition-all"
            >
              <FiPhone className="text-brand-secondary" />
              <span className="font-bold text-sm">Call</span>
            </Link>
            
            <a 
              href="https://wa.me/917310688048" 
              target="_blank" 
              rel="noreferrer" 
              className="w-11 h-11 bg-[#25D366] text-white rounded-2xl flex items-center justify-center text-xl shadow-lg shadow-[#25D366]/20 active:scale-95 transition-all relative"
            >
              <FiMessageCircle />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-secondary rounded-full border-2 border-white animate-ping"></span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
