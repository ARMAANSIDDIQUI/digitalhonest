import { Link } from 'react-router-dom';
import { FiMessageCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function CTARibbon() {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: 'spring', stiffness: 120 }}
      className="fixed bottom-0 left-0 w-full z-40 lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
    >
      <div className="bg-brand-yellow py-3 px-4 relative overflow-hidden">
        {/* Torn paper texture effect at top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjMiPgo8cGF0aCBkPSJNMCAzdjJIMHYtMmgxdjFIMnYyaDN2LTJoMnYyaDFWMHoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4=')] opacity-50 block rotate-180"></div>
        
        <div className="flex justify-between items-center max-w-sm mx-auto">
          <div>
            <p className="text-[11px] font-bold text-red-600 uppercase tracking-widest leading-none mb-1">Apne Brand Ki</p>
            <h4 className="text-[15px] font-black text-gray-900 leading-tight">Advertising shuru karein!</h4>
          </div>
          
          <div className="flex items-center gap-2">
            <Link to="/contact" className="bg-gray-900 text-white font-bold text-sm px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-black transition-colors">
              <span className="text-brand-yellow font-black">Call</span>
            </Link>
            <a href="https://wa.me/917310688048" target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center text-xl shadow-lg border-2 border-white animate-pulse">
              <FiMessageCircle />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
