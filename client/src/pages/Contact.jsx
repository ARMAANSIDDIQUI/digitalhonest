import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import axios from 'axios';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Convert FormData to JSON
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // API call to the backend
      await axios.post('/api/enquiries', data);
      toast.success('Enquiry sent successfully! We will contact you soon.');
      e.target.reset();
    } catch (error) {
      toast.error('Failed to send enquiry. Please call us directly.');
      // Keep it working even if backend isn't up yet for frontend testing
      console.log("Mock submission:", data);
      toast.success('Mock Submission Successful (Backend not connected yet)');
      e.target.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16 pb-24 bg-brand-bg min-h-screen">
      <Helmet>
        <title>Contact Us | Digital Honest</title>
      </Helmet>

      <div className="section-padding !py-12">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-4xl lg:text-6xl mb-6">Let's Grow Your <span className="premium-gradient-text italic">Brand</span></h1>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full mb-8"></div>
          <p className="text-brand-text-muted text-xl font-medium leading-relaxed">Send us a message or request a specific media audit to discuss your branding dominance.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-[3rem] shadow-premium overflow-hidden border border-white">

          {/* Contact Info (Left) */}
          <div className="bg-brand-text-main p-12 lg:p-16 text-white relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8 font-display">Contact Details</h2>
              <p className="text-brand-text-muted mb-12 text-lg font-medium leading-relaxed">
                Offline ho ya Online – Brand Sab Jagah! Book your high-impact advertising spots or performance digital campaigns today.
              </p>

              <div className="space-y-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-brand-secondary group-hover:border-transparent transition-all duration-300">
                    <FiPhone className="text-2xl text-brand-secondary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-brand-text-muted mb-1">24/7 Hotline</p>
                    <a href="tel:+917310688048" className="text-2xl font-bold hover:text-brand-secondary transition-colors font-display">+91 73106 88048</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-brand-primary group-hover:border-transparent transition-all duration-300">
                    <FiMail className="text-2xl text-brand-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-brand-text-muted mb-1">Support Email</p>
                    <a href="mailto:digitalhonest@gmail.com" className="text-xl font-bold hover:text-brand-primary transition-colors">digitalhonest@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shrink-0 group-hover:bg-brand-blue group-hover:border-transparent transition-all duration-300">
                    <FiMapPin className="text-2xl text-brand-blue group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-brand-text-muted mb-1">Agency HQ</p>
                    <p className="text-lg font-bold font-display">ISBT Road Mandi, Dehradun, Uttarakhand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form (Right) */}
          <div className="p-10 lg:p-16 bg-brand-bg/30">
            <h3 className="text-2xl font-bold text-brand-text-main mb-10 font-display">Project Enquiry</h3>

            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted">Full Name *</label>
                  <input type="text" name="name" required className="w-full bg-white border border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary shadow-sm transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted">Phone Number *</label>
                  <input type="tel" name="phone" required pattern="[0-9]{10}" title="10 digit phone number" className="w-full bg-white border border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary shadow-sm transition-all" placeholder="9876543210" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted">Business Type</label>
                  <input type="text" name="businessType" className="w-full bg-white border border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary shadow-sm transition-all" placeholder="Real Estate, Retail..." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted">Service Interested *</label>
                  <select name="serviceInterested" required className="w-full bg-white border border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary shadow-sm transition-all appearance-none cursor-pointer">
                    <option value="Outdoor Branding">Outdoor / Highway Branding</option>
                    <option value="Transit Branding">Transit Branding (Auto/Bus)</option>
                    <option value="Digital Marketing">Digital Performance Ads</option>
                    <option value="Full 360 Campaign">Full 360 Marketing Bundle</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted">Project Message</label>
                <textarea name="message" rows="4" className="w-full bg-white border border-transparent rounded-3xl px-6 py-4 focus:outline-none focus:border-brand-primary shadow-sm transition-all resize-none" placeholder="Tell us about your brand goals..."></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-conversion !py-5 shadow-2xl shadow-brand-secondary/20 disabled:scale-100 disabled:opacity-50"
              >
                {isSubmitting ? 'Architecting Strategy...' : <><FiSend /> Launch Your Campaign</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
