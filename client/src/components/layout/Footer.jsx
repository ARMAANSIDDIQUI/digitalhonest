import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';
import logo from '../../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-text-main text-white pt-24 pb-24 lg:pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Brand Col */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <img src={logo} alt="Digital Honest" className="w-16 h-16 object-contain bg-white rounded-2xl p-2 group-hover:scale-110 transition-transform duration-500" />
              <div>
                <h2 className="text-2xl font-bold leading-tight font-display tracking-tight text-white/90 group-hover:text-white transition-colors">Digital Honest</h2>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-secondary font-black">Advertising Agency</p>
              </div>
            </Link>
            <p className="text-brand-text-muted leading-relaxed max-w-xs font-medium">
              India's premier 360° marketing hub. Dominating the physical and digital landscape with "Full Support" strategy.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 border border-white/10"><FiFacebook /></a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-all duration-300 border border-white/10"><FiInstagram /></a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300 border border-white/10"><FiTwitter /></a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h3 className="text-xl font-bold mb-8 font-display text-white">Our Universe</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`} className="text-brand-text-muted hover:text-brand-secondary transition-colors inline-block font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h3 className="text-xl font-bold mb-8 font-display text-white">Capabilities</h3>
            <ul className="space-y-4 text-brand-text-muted font-medium">
              <li className="hover:text-white transition-colors cursor-pointer">Digital Marketing & Growth</li>
              <li className="hover:text-white transition-colors cursor-pointer">Outdoor (OOH) Branding</li>
              <li className="hover:text-white transition-colors cursor-pointer">Transit Moving Media</li>
              <li className="hover:text-white transition-colors cursor-pointer">Hyper-Local Marketing</li>
              <li className="hover:text-white transition-colors cursor-pointer">Event & Launch Management</li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-xl font-bold mb-8 font-display text-white">Get In Touch</h3>
            <ul className="space-y-6 text-brand-text-muted font-medium">
              <li className="flex items-start gap-3 text-white font-bold">
                Primary Hub: Dehradun, Uttarakhand
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-brand-secondary shrink-0" />
                <span>ISBT Road Mandi, Dehradun,<br />Uttarakhand 248001 India</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-brand-secondary shrink-0" />
                <a href="tel:+917310688048" className="hover:text-white transition-colors">+91 73106 88048</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-black text-brand-text-muted">
          <p>&copy; {currentYear} Digital Honest. Architecture-First Marketing.</p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/admin/login" className="hover:text-white transition-colors">Studio Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
