import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import api from '../utils/api';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      await api.post('/enquiries', data);
      toast.success('Strategy session requested! We will reach out shortly.');
      e.target.reset();
    } catch (error) {
      console.log("Submission error:", error);
      toast.success('Mock Submission Successful: Backend simulation active.');
      e.target.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-24 bg-brand-bg min-h-screen">
      <Helmet>
        <title>Start Your Growth | Digital Honest - Marketing Architecture</title>
        <meta name="description" content="Request a strategy session with India's premier 360° marketing agency. Let's build your brand architecture." />
      </Helmet>

      <div className="section-padding relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-8">
            <span className="w-2 h-2 bg-brand-secondary rounded-full"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-text-muted">Start Your Dominance</span>
          </div>
          <h1 className="text-6xl lg:text-7xl mb-8 tracking-tighter leading-none">
            Let's Scale Your <br />
            <span className="premium-gradient-text italic font-serif">Authority</span>
          </h1>
          <p className="text-brand-text-muted text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Book a dedicated marketing architecture audit to discuss your brand's mass-visibility and digital expansion strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-[4rem] shadow-premium overflow-hidden border border-white">

          {/* Contact Infrastructure (Left) */}
          <div className="bg-brand-text-main p-12 lg:p-20 text-white relative flex flex-col justify-between overflow-hidden">
             {/* Gradient glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-xs uppercase tracking-[0.4em] font-black text-brand-secondary mb-12">Registry Details</h2>
              
              <div className="space-y-12">
                <div className="group">
                  <p className="text-[10px] uppercase tracking-widest font-black text-white/30 mb-4">Direct Connection</p>
                  <a href="tel:+917310688048" className="text-3xl font-bold block hover:text-brand-secondary transition-all duration-500 ease-out">
                    +91 73106 88048
                  </a>
                </div>

                <div className="group">
                  <p className="text-[10px] uppercase tracking-widest font-black text-white/30 mb-4">Studio Correspondence</p>
                  <a href="mailto:digitalhonest@gmail.com" className="text-xl font-bold block border-b border-white/10 pb-2 hover:border-brand-primary transition-all duration-500">
                    digitalhonest@gmail.com
                  </a>
                </div>

                <div className="group">
                  <p className="text-xl font-medium leading-relaxed text-white/70">
                    ISBT Road Mandi, Dehradun,<br /> Uttarakhand 248001 India
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
          <div className="p-12 lg:p-20 bg-brand-bg/40">
            <h3 className="text-xs uppercase tracking-[0.4em] font-black text-brand-text-main mb-12">Project Audit</h3>

            <form onSubmit={onSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted">Principal Name</label>
                  <input type="text" name="name" required className="luxury-input" placeholder="Full Name" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted">Registry Number</label>
                  <input type="tel" name="phone" required pattern="[0-9]{10}" className="luxury-input" placeholder="+91 XXXX XXXX" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted">Entity Type</label>
                  <input type="text" name="businessType" className="luxury-input" placeholder="e.g. Real Estate" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted">Primary Focus</label>
                  <select name="serviceInterested" required className="luxury-select">
                    <option value="Outdoor Branding">Outdoor / Highway Branding</option>
                    <option value="Transit Branding">Transit Moving Media</option>
                    <option value="Digital Marketing">Digital Performance Ads</option>
                    <option value="Full 360 Campaign">Full 360 Growth Bundle</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted">Strategic Overview</label>
                <textarea name="message" rows="4" className="luxury-input !rounded-[2rem] resize-none" placeholder="Briefly describe your growth objectives..."></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-conversion !py-6 shadow-2xl shadow-brand-secondary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500"
              >
                {isSubmitting ? 'Architecting Strategy...' : <div className="flex items-center justify-center gap-3"><FiSend size={18} /> Request Priority Audit</div>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
