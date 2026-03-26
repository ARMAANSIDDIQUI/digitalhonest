import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
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
      const res = await axios.post('/api/admin/login', { email, password });
      localStorage.setItem('token', res.data.token);
      toast.success('Login Successful');
      navigate('/admin/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.msg || 'Invalid Credentials');
      
      // Fallback for UI testing before backend is ready
      if (email === 'admin@dh' && password === 'admin123') {
        localStorage.setItem('token', 'mock_token_for_UI');
        toast.success('[MOCK] Login bypass for testing');
        navigate('/admin/dashboard');
      }
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
        <div className="bg-white py-10 px-6 shadow-premium sm:rounded-[2.5rem] sm:px-12 border border-white">
          <form className="space-y-8" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted">Security Identifier</label>
              <div className="mt-1">
                <input name="email" type="email" required className="w-full bg-brand-bg/50 border border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary shadow-sm transition-all" placeholder="admin@digitalhonest.in" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted">Access Key</label>
              <div className="mt-1">
                <input name="password" type="password" required className="w-full bg-brand-bg/50 border border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary shadow-sm transition-all" placeholder="••••••••" />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-conversion !py-5 shadow-2xl shadow-brand-secondary/20 disabled:scale-100 disabled:opacity-50"
              >
                {loading ? 'Validating Link...' : 'Enter Studio Domain'}
              </button>
            </div>
            <p className="text-center text-[10px] font-bold text-brand-orange mt-6 bg-brand-orange/5 p-3 rounded-lg border border-brand-orange/10">Verification Note: Secure tunnel required for live access.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
