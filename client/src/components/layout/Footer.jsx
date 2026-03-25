import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-brand text-white pt-16 pb-24 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 bg-white/10 w-fit p-3 rounded-xl backdrop-blur-sm border border-white/20">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-brand-blue font-bold text-lg leading-none">
                DH
              </div>
              <div>
                <h2 className="text-xl font-bold leading-tight font-poppins">Digital Honest</h2>
                <p className="text-[9px] uppercase tracking-wider text-brand-yellow font-semibold">& Shri Media</p>
              </div>
            </Link>
            <p className="text-sm text-blue-100/80 leading-relaxed max-w-xs">
              Complete advertising solutions from offline hoardings to digital performance marketing. Most trusted agency in Dehradun.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors"><FiFacebook /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors"><FiInstagram /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors"><FiTwitter /></a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h3 className="text-lg font-semibold font-poppins mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-blue-100/80 hover:text-white flex items-center gap-2 group text-sm">
                    <FiArrowRight className="text-brand-orange opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h3 className="text-lg font-semibold font-poppins mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm text-blue-100/80">
              <li className="hover:text-white transition-colors cursor-pointer">Transit Branding</li>
              <li className="hover:text-white transition-colors cursor-pointer">Highway Hoardings</li>
              <li className="hover:text-white transition-colors cursor-pointer">Event Management</li>
              <li className="hover:text-white transition-colors cursor-pointer">Digital Marketing</li>
              <li className="hover:text-white transition-colors cursor-pointer">Lead Generation</li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-lg font-semibold font-poppins mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-blue-100/80">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-brand-orange shrink-0" />
                <span>ISBT Road, Dehradun,<br/>Uttarakhand 248001, India</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-brand-orange shrink-0" />
                <a href="tel:+917310688048" className="hover:text-white transition-colors">+91 73106 88048</a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-brand-orange shrink-0" />
                <a href="mailto:hello@digitalhonest.in" className="hover:text-white transition-colors">hello@digitalhonest.in</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-100/60">
          <p>&copy; {currentYear} Digital Honest & Shri Media. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/admin/login" className="hover:text-white transition-colors">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
