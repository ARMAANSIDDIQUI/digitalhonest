import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { services } from '../constants/services';
import { FiArrowLeft, FiArrowRight, FiCheckCircle, FiTrendingUp, FiMapPin, FiPhoneCall } from 'react-icons/fi';

const ServiceDetail = () => {
  const { id } = useParams();
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
            className="w-full h-full object-cover grayscale opacity-20 transition-transform duration-[3s] hover:scale-105"
            src={service.image}
            alt={service.title}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#f8f9fa] via-transparent to-[#f8f9fa]/40"></div>
          {/* Abstract Accents */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-secondary/5 rounded-full blur-[140px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
        </div>

        <div className="section-padding pt-40 pb-32 relative z-10 w-full grid grid-cols-12 gap-8 items-center">
          <motion.div variants={itemVariants} className="col-span-12 lg:col-span-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 text-brand-secondary font-black text-[10px] uppercase tracking-[0.3em] mb-6 group"
            >
              <FiArrowLeft className="group-hover:-translate-x-2 transition-transform" />
              360° Strategy Hub
            </Link>

            <h1 className="font-serif italic font-extrabold tracking-tight leading-none mb-12">
              <span
                className="inline-block bg-clip-text text-transparent text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.05] pb-2"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #ea580c 0%, #ea580c 35%, #0f172a 65%, #0f172a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {service.title.replace('\n', ' ')}
              </span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <p className="font-body text-xl md:text-2xl text-brand-text-muted max-w-xl leading-relaxed font-medium">
                {service.detailedDescription}
              </p>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
                <Link to="/contact" className="bg-[#ea580c] text-white px-12 py-6 font-display font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_20px_40px_-15px_rgba(234,88,12,0.3)]">
                  Launch Campaign
                </Link>
                <div className="flex flex-col border-l-4 border-[#ea580c] pl-6">
                  <span className="font-display font-bold text-[#001f3f] text-4xl">{service.roi}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted mt-1">Verified Performance</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Capability Audit (Asymmetric Grid) */}
      <section className="py-32 px-4 md:px-8 bg-white/50 backdrop-blur-sm relative z-20">
        <div className="section-padding !max-w-screen-2xl mx-auto">
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
        </div>
      </section>

      {/* Impact Rail (Full-Width Auto Carousel) */}
      <section className="py-24 bg-[#000613] overflow-hidden relative">
        <div className="mx-auto px-8 md:px-16 mb-16 flex justify-between items-end">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl text-white font-display">Impact Rail</h2>
            <p className="text-white/60 text-xl max-w-md font-medium">Global wins delivered with architectural precision.</p>
          </div>
        </div>

        <div className="relative">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -1904], // Approximate width of 3 items (600+32)*3
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[1, 2, 3, 1, 2, 3].map((item, idx) => (
              <div key={idx} className="flex-none w-[85vw] md:w-[600px] group">
                <div className="aspect-[16/10] overflow-hidden mb-8 rounded-[2rem] bg-gray-800 relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80"
                    src={service.image}
                    alt="Impact Case"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000613] to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div className="flex flex-col space-y-4">
                  <span className="text-[#ea580c] text-[10px] font-black uppercase tracking-[0.2em]">{service.tag}</span>
                  <h4 className="text-3xl text-white font-bold">Project: Visionary Scale</h4>
                  <p className="text-white/40 text-lg font-medium max-w-md italic">Re-architecting reach for market leaders.</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Deep Dive Case Study */}
      <section className="bg-white py-32 relative overflow-hidden">
        <div className="section-padding !max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
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
                className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-1000"
                src={service.image}
                alt="Case Study"
              />
            </div>
          </motion.div>
        </div>
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

          <div className="glass-card !bg-white !p-12 !rounded-[3rem] shadow-2xl relative">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#ea580c]/10 rounded-full blur-[60px]"></div>
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted">Direct Identity</label>
                <input
                  type="text"
                  placeholder="Johnathan Doe"
                  className="w-full bg-transparent border-b-2 border-gray-100 py-4 focus:border-[#ea580c] outline-none transition-all text-xl font-display"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted">Primary Channel</label>
                <select className="w-full bg-transparent border-b-2 border-gray-100 py-4 focus:border-[#ea580c] outline-none transition-all text-xl font-display appearance-none">
                  <option>{service.title}</option>
                  <option>Omnichannel Hybrid</option>
                  <option>360 Strategy Audit</option>
                </select>
              </div>
              <button className="w-full bg-[#001f3f] text-white py-6 rounded-2xl font-display font-bold text-xl hover:bg-[#ea580c] transition-all flex items-center justify-center gap-4 group">
                Request Strategic Briefing
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServiceDetail;
