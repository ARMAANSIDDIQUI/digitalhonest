import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { services } from '../constants/services';
import { projects } from '../constants/projects';
import ImpactRail from '../components/common/ImpactRail';
import { 
  FiArrowLeft, 
  FiArrowRight, 
  FiCheckCircle, 
  FiTrendingUp, 
  FiMapPin, 
  FiPhoneCall,
  FiX,
  FiMaximize2
} from 'react-icons/fi';

const ServiceDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center bg-surface">
        <h2 className="text-3xl font-display mb-4 text-primary">Service Not Found</h2>
        <Link to="/services" className="btn-primary flex items-center gap-2">
          <FiArrowLeft /> Back to Strategy Hub
        </Link>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-[#f8f9fa] min-h-screen font-body text-on-surface"
    >
      <Helmet>
        <title>{service.title} | Digital Honest 360° Strategy</title>
        <meta name="description" content={service.shortDesc} />
      </Helmet>

      {/* Massive Editorial Hero */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20 transition-transform duration-[3s] hover:scale-105"
            src={service.image}
            alt={service.title}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#f8f9fa] via-transparent to-[#f8f9fa]/40"></div>
          {/* Abstract Accents */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-secondary/5 rounded-full blur-[140px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
        </div>

        <div className="section-padding pt-24 md:pt-28 pb-16 md:pb-20 relative z-10 w-full grid grid-cols-12 gap-6 md:gap-8 items-center">
          <motion.div variants={itemVariants} className="col-span-12 lg:col-span-11 xl:col-span-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 text-brand-secondary font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-4 md:mb-6 group"
            >
              <FiArrowLeft className="group-hover:-translate-x-2 transition-transform" />
              360° Strategy Hub
            </Link>

            <h1 className="font-serif italic font-extrabold tracking-tight leading-none mb-8 md:mb-12">
              <span
                className="inline-block bg-clip-text text-transparent text-[clamp(2.5rem,12vw,5.5rem)] leading-[1.05] pb-2 text-left"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #ea580c 0%, #ea580c 45%, #0f172a 75%, #0f172a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {service.title.replace('\n', ' ')}
              </span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
              <p className="font-body text-lg md:text-2xl text-brand-text-muted max-w-xl leading-relaxed font-medium">
                {service.detailedDescription}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 md:gap-12">
                <Link to={`/contact?service=${service.id}`} className="bg-[#ea580c] text-white px-8 md:px-12 py-5 md:py-6 font-display font-bold text-base md:text-lg rounded-full hover:scale-105 transition-transform shadow-[0_20px_40px_-15px_rgba(234,88,12,0.3)] text-center">
                  Launch Campaign
                </Link>
                <div className="flex flex-row sm:flex-col border-l-4 sm:border-l-4 border-[#ea580c] pl-6 items-center sm:items-start gap-4 sm:gap-0">
                  <span className="font-display font-bold text-[#001f3f] text-3xl md:text-4xl">{service.roi}</span>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-brand-text-muted mt-1 whitespace-nowrap">Verified Performance</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Capability Audit (Asymmetric Grid) */}
      <section className="py-32 px-4 md:px-8 bg-white/50 backdrop-blur-sm relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-padding !max-w-screen-2xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-gray-100 pb-12">
            <h2 className="text-4xl lg:text-5xl text-[#000613] font-display">The Capability Audit</h2>
            <p className="max-w-md text-brand-text-muted text-lg mt-4 md:mt-0 font-medium">Our systematic approach to performance, decoded for the elite enterprise.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {service.methodology.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`flex flex-col space-y-8 ${idx === 1 ? 'md:mt-24' : ''}`}
              >
                <div className="w-16 h-1 bg-[#ea580c]"></div>
                <span className="font-display font-black text-7xl text-[#ea580c]/70 select-none">{item.id}</span>
                <h3 className="text-2xl text-[#000613] font-bold">{item.title}</h3>
                <p className="text-brand-text-muted leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <ImpactRail />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-brand-primary/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 lg:p-24"
            onClick={() => setSelectedImage(null)}
          >
            <button className="fixed top-8 right-8 text-white/50 hover:text-white transition-colors bg-white/10 p-4 rounded-full backdrop-blur-md border border-white/10 z-[1001]">
              <FiX size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              src={selectedImage} 
              className="max-w-full max-h-full object-contain rounded-2xl md:rounded-[3rem] shadow-4xl pointer-events-none"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Deep Dive Case Study */}
      <section className="bg-white py-32 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="section-padding !max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-12 order-2 lg:order-1">
            <span className="text-[#ea580c] text-[10px] font-black uppercase tracking-[0.4em]">Featured Blueprint</span>
            <h2 className="text-5xl lg:text-6xl text-[#000613] font-display leading-tight">{service.caseStudy.title}</h2>
            <p className="text-brand-text-muted text-xl leading-relaxed font-medium italic border-l-4 border-gray-100 pl-8">
              "{service.caseStudy.desc}"
            </p>

            <div className="grid grid-cols-2 gap-12">
              {service.caseStudy.stats.map((stat, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-[#ea580c] font-display font-bold text-5xl tracking-tighter">{stat.value}</h4>
                  <p className="text-brand-text-muted text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link to="/portfolio" className="flex items-center space-x-6 group text-[#000613] font-display font-bold text-xl hover:gap-8 transition-all">
              <span>View Case Study</span>
              <FiArrowRight className="text-[#ea580c] group-hover:scale-125 transition-transform" />
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="relative group order-1 lg:order-2">
            <div className="absolute -inset-8 bg-[#ea580c]/5 blur-[100px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>
            <div className="relative z-10 aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-premium">
              <img
                className="w-full h-full object-cover brightness-110 group-hover:scale-105 transition-all duration-1000"
                src={service.image}
                alt="Case Study"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Social Proof (Tonal Stats) */}
      <section className="py-32 px-4 md:px-8 bg-[#f2f4f6]">
        <div className="section-padding !max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Happy Brands', val: '500+', c: 'text-[#000613]' },
              { label: 'Revenue Managed', val: '₹5Cr+', c: 'text-[#ea580c]' },
              { label: 'Operational States', val: '8+', c: 'text-[#ea580c]' },
              { label: 'Years Excellence', val: '10+', c: 'text-[#000613]' }
            ].map((stat, i) => (
              <div key={i} className="glass-card !bg-white !p-12 text-center rounded-[2.5rem] shadow-sm hover:shadow-premium transition-all">
                <h5 className={`text-5xl font-display font-bold mb-3 ${stat.c}`}>{stat.val}</h5>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Strategy Lead (Conversion) */}
      <section className="py-40 bg-[#001f3f] relative overflow-hidden">
        <div className="section-padding !max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="space-y-12">
            <h2 className="text-6xl lg:text-7xl text-white font-display leading-[1.1]">
              Architect <br />
              <span className="text-[#ea580c] italic">Your Legacy.</span>
            </h2>
            <p className="text-white/60 text-xl font-medium max-w-md">
              We don't work with everyone. We partner with leaders who are ready to build something structural and significant.
            </p>

            <div className="grid gap-8 pt-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-all">
                  <FiMapPin />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold">National HQ</h4>
                  <p className="text-white/40 text-xs">Dehradun & Delhi NCR Operations</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group text-white decoration-brand-secondary">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-all">
                   <FiPhoneCall />
                </div>
                <a href="tel:+917310688048" className="hover:text-[#ea580c] transition-colors">
                  <h4 className="text-sm font-bold">+91 73106 88048</h4>
                  <p className="text-white/40 text-xs">Strategist Line</p>
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card !bg-white !p-12 !rounded-[3rem] shadow-2xl relative flex flex-col items-center justify-center text-center">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#ea580c]/10 rounded-full blur-[60px]"></div>
            <h3 className="text-3xl font-display font-bold text-brand-text-main mb-6">Request Strategic Briefing</h3>
            <p className="text-brand-text-muted mb-10 max-w-sm">
              Our growth architects are ready to audit your brand footprint. Let's build your market dominance.
            </p>
            <Link 
              to={`/contact?service=${service.id}`} 
              className="w-full bg-[#001f3f] text-white py-6 rounded-2xl font-display font-bold text-xl hover:bg-[#ea580c] transition-all flex items-center justify-center gap-4 group"
            >
               Request Strategic Briefing
               <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServiceDetail;
