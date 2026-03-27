import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiUsers, FiTrendingUp, FiMapPin, FiAward } from 'react-icons/fi';
import aboutImg from '../assets/extreme_photorealistic_billboard_1774478569369.png';

export default function About() {
  return (
    <div className="bg-white min-h-screen font-body">
      <Helmet>
        <title>Our Story | Digital Honest - Marketing Architecture</title>
        <meta name="description" content="Discover the philosophy behind Dehradun's most trusted 360° marketing agency. We build architectures for brand growth." />
      </Helmet>

      {/* Hero Section - High-Fidelity Architectural Monolith */}
      <section className="relative min-h-[95vh] w-full flex items-center py-24 overflow-hidden bg-brand-primary">
        {/* Background Depth */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-secondary/10 rounded-full blur-[140px] translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="section-padding relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Content Column */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-4 px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-10 shadow-2xl group">
              <span className="w-2.5 h-2.5 bg-brand-secondary rounded-full"></span>
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-white/50 group-hover:text-brand-secondary transition-colors">Digital Honest Philosophy</span>
            </div>
            <h1 className="text-[2.75rem] lg:text-[6rem] mb-8 lg:mb-10 leading-[1] lg:leading-[1.1] tracking-tighter text-white font-bold font-display">
              Apne Brand Ko <br />
              <span className="premium-gradient-text italic font-serif block mt-3 tracking-tighter">Bada Banao</span>
            </h1>
            
            <p className="text-xs lg:text-base text-white/50 leading-relaxed font-medium mb-10 lg:mb-12 max-w-2xl border-l-2 border-brand-secondary/40 pl-6 lg:pl-10">
              Digital Honest is more than an agency; it's a strategic hub where physical mass-visibility meets precision digital infrastructure. We build the architecture that allows brands to scale without limits.
            </p>
            
            <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-lg mb-16 lg:mb-0">
              <div className="glass-card !bg-white/5 !backdrop-blur-md !p-6 md:!p-10 !rounded-[2rem] md:!rounded-[3rem] border-white/5 group hover:!bg-white/10 transition-all duration-500">
                <p className="text-3xl md:text-5xl font-black text-brand-secondary mb-3 group-hover:scale-110 transition-transform origin-left">500+</p>
                <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-black text-white/40 group-hover:text-white/60">Brands Elevated</p>
              </div>
              <div className="glass-card !bg-white/5 !backdrop-blur-md !p-6 md:!p-10 !rounded-[2rem] md:!rounded-[3rem] border-white/5 group hover:!bg-white/10 transition-all duration-500">
                <p className="text-3xl md:text-5xl font-black text-white mb-3 group-hover:scale-110 transition-transform origin-left">10+</p>
                <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-black text-white/40 group-hover:text-white/60">Years Tenure</p>
              </div>
            </div>
          </motion.div>

          {/* Right Media Column */}
          <motion.div
            className="lg:col-span-5 relative mt-16 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-[2rem] md:rounded-[4rem] overflow-hidden relative shadow-3xl border border-white/5 aspect-[4/3] sm:aspect-auto h-[400px] md:h-[500px]">
              <img src={aboutImg} alt="Marketing Architecture" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent"></div>
            </div>
              
              {/* Branding Stamp */}
              <div className="absolute top-8 right-8 md:top-12 md:right-12 w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md rotate-12">
                 <p className="text-[7px] md:text-[8px] font-black text-white/30 uppercase tracking-[0.2em] text-center leading-tight">Authentic <br/> Honest <br/> growth</p>
              </div>

            {/* Quote Overlay - Shifted Upward */}
            <div className="absolute -top-56 -right-12 md:-top-24 md:-right-20 z-50 glass-card !bg-brand-secondary !p-4 md:!p-10 !rounded-[1.25rem] md:!rounded-[2.5rem] shadow-premium max-w-[180px] md:max-w-[320px] scale-[0.65] md:scale-[0.85] origin-bottom-left border-none group hover:-translate-y-4 hover:rotate-2 transition-all duration-700">
              <p className="text-sm md:text-2xl font-serif italic text-white leading-tight mb-2 md:mb-6 group-hover:scale-105 transition-transform">"Every great brand is an architectural masterpiece."</p>
              <div className="flex items-center gap-2 md:gap-3">
                 <div className="w-6 md:w-10 h-0.5 bg-white/30"></div>
                 <p className="text-[6px] md:text-[10px] uppercase tracking-[0.4em] font-black text-white/60">Honest Mantra</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-32 mt-20">
        <div className="section-padding">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <div className="max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-secondary mb-6">Our DNA</p>
              <h2 className="text-5xl lg:text-7xl tracking-tighter leading-[0.9]">High Impact. <br/><span className="text-brand-text-muted/30">Honest Results.</span></h2>
            </div>
            <p className="text-lg text-brand-text-muted font-medium max-w-sm leading-relaxed">
              We eliminate the noise. No fluff, no vanity metrics. Just direct architectural growth for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                title: "360° Lifecycle",
                desc: "Assistance from Brand Launch to national Promotion. We handle the entire growth pipeline.",
                icon: <FiTrendingUp size={32} />
              },
              {
                title: "Asset Dominance",
                desc: "High-impact highway hoardings, transit moving media, and premium cinema placements.",
                icon: <FiMapPin size={32} />
              },
              {
                title: "Data Precision",
                desc: "Custom audience targeting ensuring zero waste and maximum conversion on digital spends.",
                icon: <FiCheckCircle size={32} />
              }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="w-20 h-20 rounded-3xl bg-brand-bg flex items-center justify-center text-brand-secondary mb-8 transition-all duration-500 group-hover:bg-brand-secondary group-hover:text-white group-hover:scale-110 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-brand-text-muted leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* States / Presence Bar */}
      <section className="py-24 bg-brand-bg">
        <div className="section-padding">
           <div className="glass-card !rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-[80px]"></div>
             <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-secondary mb-4">Our Presence</p>
                  <h3 className="text-4xl lg:text-5xl tracking-tighter mb-6 underline decoration-brand-secondary/30 underline-offset-8">National Footprint</h3>
                  <p className="text-brand-text-muted font-medium text-lg leading-relaxed mb-10 max-w-xl">Headquartered in Dehradun, our operational network expands across 8+ states, dominating major transit routes and city hubs.</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {['UK', 'UP', 'Delhi', 'PB', 'HR', 'RJ', 'MP', 'MH'].map(s => (
                       <span key={s} className="px-4 py-2 bg-white rounded-full text-[10px] font-black uppercase tracking-widest border border-gray-100 shadow-sm">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                   <div className="aspect-square bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-center shadow-premium rotate-3">
                      <p className="text-4xl lg:text-5xl font-black text-brand-primary">8+</p>
                      <p className="text-[10px] uppercase font-black text-brand-text-muted tracking-widest mt-2 leading-none">Active States</p>
                   </div>
                   <div className="aspect-square bg-brand-text-main rounded-3xl p-6 sm:p-8 flex flex-col justify-center shadow-xl -rotate-3">
                      <p className="text-4xl lg:text-5xl font-black text-brand-secondary">24/7</p>
                      <p className="text-[10px] uppercase font-black text-white/50 tracking-widest mt-2 leading-none">Ops Command</p>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
