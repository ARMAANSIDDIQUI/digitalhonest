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
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <Helmet>
        <title>Contact Us | Digital Honest Dehradun</title>
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-black text-brand-text mb-4">Let's Grow Your Brand</h1>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg">Send us a message or request a callback to discuss your advertising needs.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden shadow-brand-blue/5">
          
          {/* Contact Info (Left) */}
          <div className="bg-gradient-brand p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <p className="text-blue-100 mb-12 text-lg">
                Offline ho ya Online – Brand Sab Jagah! Book your advertising spots or digital campaigns with Dehradun's most trusted agency.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <FiPhone className="text-2xl text-brand-yellow" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Call for immediate response</p>
                    <a href="tel:+917310688048" className="text-2xl font-bold hover:text-brand-yellow transition-colors">+91 73106 88048</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <FiMail className="text-2xl text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Email Us</p>
                    <a href="mailto:hello@digitalhonest.in" className="text-xl font-bold hover:text-brand-orange transition-colors">hello@digitalhonest.in</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20 shrink-0">
                    <FiMapPin className="text-2xl text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Visit Agency HQ</p>
                    <p className="text-lg font-bold">ISBT Road, Dehradun,<br/>Uttarakhand 248001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form (Right) */}
          <div className="p-10 lg:p-12">
            <h3 className="text-2xl font-bold text-brand-text mb-8">Send an Enquiry</h3>
            
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" name="name" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input type="tel" name="phone" required pattern="[0-9]{10}" title="10 digit phone number" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue" placeholder="9876543210" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                  <input type="text" name="businessType" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue" placeholder="Real Estate, Retail, EdTech..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select name="budget" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue">
                    <option value="Under 50k">Under ₹50,000</option>
                    <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                    <option value="1L-5L">₹1,00,000 - ₹5,00,000</option>
                    <option value="5L+">₹5,00,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In *</label>
                <select name="serviceInterested" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue">
                  <option value="Events & Premium Branding">Events & Premium Branding</option>
                  <option value="Transit Branding">Transit Branding (Auto/Bus/Metro)</option>
                  <option value="Outdoor Branding">Outdoor Hoardings / Highway Boards</option>
                  <option value="Digital Marketing">Digital Marketing (Ads/SEO)</option>
                  <option value="Full 360 Campaign">Full 360 Marketing Campaign</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea name="message" rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue resize-none" placeholder="Tell us about your brand goals..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2 disabled:bg-opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Request...' : <><FiSend /> Book Advertising Now</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
