import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import api from '../utils/api';
import logo from '../assets/logo.png';

export default function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // If already logged in, redirect
    if (localStorage.getItem('token')) {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const res = await api.post('/admin/login', { email, password });
      localStorage.setItem('token', res.data.token);
      toast.success('Access Granted');
      navigate('/admin/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.msg || 'Invalid Credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-24 bg-brand-bg flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Helmet><title>Admin Login | Digital Honest</title></Helmet>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="w-20 h-20 bg-white rounded-3xl mx-auto flex items-center justify-center shadow-premium border border-white/50 p-3">
          <img src={logo} alt="Digital Honest" className="w-full h-full object-contain" />
        </div>
        <h2 className="mt-8 text-center text-4xl font-display font-bold text-brand-text-main">
          Agency Portal
        </h2>
        <p className="mt-4 text-center text-xs uppercase tracking-widest font-black text-brand-text-muted">
          Authorized Studio Personnel Only
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="glass-card !bg-white/80 backdrop-blur-xl py-10 px-6 shadow-premium sm:rounded-[3rem] sm:px-12 border border-white">
          <form className="space-y-8" onSubmit={handleLogin}>
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted">Security Identifier</label>
              <input name="email" type="email" required className="luxury-input" placeholder="ADMIN ID" />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted">Access Key</label>
              <input name="password" type="password" required className="luxury-input" placeholder="••••••••••••" />
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-conversion !py-6 shadow-2xl shadow-brand-secondary/20 disabled:scale-100 disabled:opacity-50"
              >
                {loading ? 'Authenticating...' : 'Sign In to Studio'}
              </button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-100 text-center">
              <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-text-muted opacity-50">© 2026 Digital Honest Studio Portal</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
