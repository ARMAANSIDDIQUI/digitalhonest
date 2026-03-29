import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';
import { FiPhone, FiMail, FiMapPin, FiSend, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../constants/services';
import api from '../utils/api';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeService, setActiveService] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({ code: '+91', iso: 'IN', digits: 10, label: 'India' });
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const countries = [
    { code: '+91', iso: 'IN', digits: 10, label: 'India' },
    { code: '+1', iso: 'US', digits: 10, label: 'USA/Canada' },
    { code: '+44', iso: 'GB', digits: 10, label: 'UK' },
    { code: '+971', iso: 'AE', digits: 9, label: 'UAE' },
    { code: '+61', iso: 'AU', digits: 9, label: 'Australia' },
    { code: '+65', iso: 'SG', digits: 8, label: 'Singapore' },
  ];

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Validation: Check phone digits according to country rules
    if (data.phone.length !== selectedCountry.digits) {
      toast.error(`Invalid Number: ${selectedCountry.label} requires exactly ${selectedCountry.digits} digits.`);
      setIsSubmitting(false);
      return;
    }

    // Combine prefix and number for database
    data.phone = `${data.phonePrefix}${data.phone}`;
    delete data.phonePrefix;

    try {
      await api.post('/enquiries', data);
      toast.success('Strategy session requested! Our team will reach out within 24 hours.');
      e.target.reset();
      setActiveService("");
    } catch (error) {
      console.error("Submission error:", error);
      const errorDetail = error.response?.data?.error || error.response?.data?.details || error.message;
      toast.error(`Submission Failed: ${errorDetail}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Start Your Growth | Digital Honest - Marketing Architecture</title>
        <meta name="description" content="Request a strategy session with India's premier 360° marketing agency. Let's build your brand architecture." />
      </Helmet>

      {/* Hero Section - High-Fidelity Architectural Monolith */}
      <section className="relative min-h-screen w-full flex items-center py-12 lg:py-24 overflow-hidden bg-brand-primary text-center">
        {/* Background Depth & Animated Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-secondary/10 rounded-full blur-[140px] -z-10 translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

        <div className="section-padding relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-4 px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6 lg:mb-10 shadow-2xl group mx-auto">
              <span className="w-2.5 h-2.5 bg-brand-secondary rounded-full"></span>
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] font-black text-white/50 group-hover:text-brand-secondary transition-colors">Strategic Consultation</span>
            </div>

            <h1 className="text-4xl lg:text-[6rem] mb-8 lg:mb-10 leading-[1] lg:leading-[1.1] tracking-tighter text-white font-bold font-display">
              Start Your <br />
              <span className="premium-gradient-text italic font-serif block mt-3 tracking-tighter">Growth Audit</span>
            </h1>

            <p className="text-[10px] lg:text-base text-white/50 leading-relaxed font-medium mb-8 lg:mb-14 max-w-2xl mx-auto border-t border-brand-secondary/30 pt-8 lg:pt-10">
              Request a priority strategy session to engineer your brand's mass-visibility and digital expansion architecture.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-padding -mt-16 md:-mt-32 relative z-20 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-[3rem] sm:rounded-[4rem] shadow-premium border border-white/10 bg-brand-text-main relative z-30">
            {/* Contact Infrastructure (Left) */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-20 text-white relative flex flex-col justify-between overflow-hidden rounded-t-[3rem] sm:rounded-t-[4rem] lg:rounded-l-[4rem] lg:rounded-tr-none">
              {/* Gradient glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px]"></div>


              <div className="relative z-10">
                <h2 className="text-xs uppercase tracking-[0.4em] font-black text-brand-secondary mb-12">Registry Details</h2>

                <div className="space-y-12">
                  <div className="group">
                    <p className="text-[10px] uppercase tracking-widest font-black text-white/30 mb-4">Direct Connection</p>
                    <div className="space-y-4">
                      <a href="tel:+919412246080" className="text-3xl font-bold block hover:text-brand-secondary transition-all duration-500 ease-out">
                        +91 94122 46080
                      </a>
                      <a href="tel:+917310688048" className="text-3xl font-bold block hover:text-brand-secondary transition-all duration-500 ease-out">
                        +91 73106 88048
                      </a>
                    </div>
                  </div>

                  <div className="group">
                    <p className="text-[10px] uppercase tracking-widest font-black text-white/30 mb-4">Studio Correspondence</p>
                    <a href="mailto:digitalhonest@gmail.com" className="text-xl font-bold block border-b border-white/10 pb-2 hover:border-brand-primary transition-all duration-500">
                      digitalhonest@gmail.com
                    </a>
                  </div>

                  <div className="group">
                    <p className="text-xl font-medium leading-relaxed text-white/70">
                      17/17, Opposite Gandhi Park,<br />
                      Near Chayadeep Cinema,<br />
                      Rajpur Road, Dehradun-248001
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-20 relative z-10">
                  <div className="p-8 glass-card !bg-white/5 border-white/10 !rounded-[2.5rem]">
                    <p className="text-sm italic font-serif text-white/60 leading-relaxed mb-1">"Offline ho ya Online — Brand Sab Jagah!"</p>
                    <p className="text-[9px] uppercase tracking-widest font-black text-brand-secondary">Agency Creed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submission Portal (Right) */}
            <div className="lg:col-span-7 p-12 lg:p-20 bg-white rounded-b-[3rem] sm:rounded-b-[4rem] lg:rounded-r-[4rem] lg:rounded-bl-none">
              <h3 className="text-xs uppercase tracking-[0.4em] font-black text-brand-text-main mb-12">Growth Audit Request</h3>

              <form onSubmit={onSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted">Principal Name</label>
                    <input type="text" name="name" required className="luxury-input !border-b !border-gray-100 focus:!border-brand-secondary" placeholder="Full Name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted">Registry Number</label>
                    <div className="flex gap-2 relative">
                      {/* Country Code Selection Container */}
                      <div className="relative group/country">
                        <button
                          type="button"
                          onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                          className="luxury-input !border-b !border-gray-100 focus:!border-brand-secondary flex items-center gap-2 px-4 transition-all duration-300 hover:bg-gray-50/50"
                        >
                          <span className="font-bold text-brand-text-main/70">{selectedCountry.iso}</span>
                          <span className="text-brand-secondary font-black">{selectedCountry.code}</span>
                          <FiChevronDown className={`transition-transform duration-500 text-brand-secondary/40 ${isCountryDropdownOpen ? 'rotate-180' : ''}`} size={14} />
                        </button>

                        <AnimatePresence>
                          {isCountryDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              className="absolute z-[110] top-[calc(100%+8px)] left-0 min-w-[180px] bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden p-2"
                            >
                              <div className="max-h-[220px] overflow-y-auto custom-scrollbar space-y-1">
                                {countries.map((country) => (
                                  <button
                                    key={country.iso}
                                    type="button"
                                    onClick={() => {
                                      setSelectedCountry(country);
                                      setIsCountryDropdownOpen(false);
                                    }}
                                    className={`w-full text-left px-5 py-3.5 rounded-2xl flex items-center justify-between group transition-all duration-300 ${selectedCountry.iso === country.iso ? 'bg-brand-secondary/10' : 'hover:bg-brand-text-main/5'}`}
                                  >
                                    <div className="flex flex-col">
                                      <span className="text-[10px] uppercase tracking-widest font-black text-brand-text-main/80">{country.label}</span>
                                      <span className="text-xs font-medium text-brand-text-muted">{country.iso}</span>
                                    </div>
                                    <span className={`text-xs font-black transition-colors ${selectedCountry.iso === country.iso ? 'text-brand-secondary' : 'text-brand-text-muted/40 group-hover:text-brand-secondary'}`}>
                                      {country.code}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        pattern={`[0-9]{${selectedCountry.digits}}`}
                        title={`Phone number must be exactly ${selectedCountry.digits} digits for ${selectedCountry.label}`}
                        className="luxury-input !border-b !border-gray-100 focus:!border-brand-secondary flex-1" 
                        placeholder={`${selectedCountry.digits} Digits Number`} 
                      />
                      <input type="hidden" name="phonePrefix" value={selectedCountry.code} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted">Entity Type</label>
                    <input type="text" name="businessType" className="luxury-input !border-b !border-gray-100 focus:!border-brand-secondary" placeholder="e.g. Real Estate" />
                  </div>
                  <div className="space-y-3 relative">
                    <label className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted">Primary Focus</label>
                    <div className="relative group">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="luxury-input flex items-center justify-between text-left focus:!border-brand-secondary transition-all duration-300"
                      >
                        <span className={activeService ? 'text-brand-text-main' : 'text-brand-text-muted/40'}>
                          {activeService ? services.find(s => s.id === activeService)?.title.replace('\n', ' ') : "Select Expertise..."}
                        </span>
                        <FiChevronDown className={`transition-transform duration-500 text-brand-secondary ${isDropdownOpen ? 'rotate-180' : ''}`} size={20} />
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute z-[100] top-full left-0 w-full mt-4 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden"
                          >
                            <div className="max-h-[280px] overflow-y-auto custom-scrollbar p-4 space-y-2">
                            {/* Dynamic Service Options from Constants */}
                            {services.map((service) => (
                              <button
                                key={service.id}
                                type="button"
                                onClick={() => {
                                  setActiveService(service.id);
                                  setIsDropdownOpen(false);
                                }}
                                className={`w-full text-left px-8 py-5 rounded-3xl transition-all duration-300 font-bold text-[11px] uppercase tracking-widest leading-relaxed ${activeService === service.id
                                    ? 'bg-brand-secondary text-white shadow-lg shadow-brand-secondary/20'
                                    : 'hover:bg-brand-secondary/5 text-brand-text-main/70 hover:text-brand-secondary'
                                  }`}
                              >
                                {service.title.replace('\n', ' ')}
                              </button>
                            ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <input type="hidden" name="serviceInterested" value={activeService} required />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted">Strategic Overview</label>
                  <textarea name="message" rows="4" className="luxury-input !rounded-[2rem] !border !border-gray-100 focus:!border-brand-secondary resize-none" placeholder="Briefly describe your growth objectives..."></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-conversion !py-6 shadow-2xl shadow-brand-secondary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 text-lg"
                >
                  {isSubmitting ? 'Architecting Strategy...' : <div className="flex items-center justify-center gap-3 font-black uppercase tracking-widest text-[11px]"><FiSend size={18} /> Request Priority Audit</div>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Location Map Section */}
      <section className="pb-32 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="rounded-[3rem] sm:rounded-[4rem] overflow-hidden border border-gray-100 shadow-premium aspect-[21/9] min-h-[400px]"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3443.7857416075053!2d78.04133467556467!3d30.328611674781634!2m3!1f0!2f0!3f0!3m2!i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDE5JzQzLjAiTiA3OMKwMDInMzguMSJF!5e0!3m2!1sen!2sin!4v1774782545559!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
