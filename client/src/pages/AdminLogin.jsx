import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen pt-32 pb-24 bg-brand-bg flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Helmet><title>Admin Login | Digital Honest</title></Helmet>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="w-16 h-16 bg-brand-blue rounded-2xl mx-auto flex items-center justify-center text-white font-bold text-2xl shadow-lg">
          DH
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-brand-text">
          Agency Portal
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Authorized personnel only
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-2xl sm:px-10 border border-gray-100">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="mt-1">
                <input name="email" type="email" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:border-brand-blue" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1">
                <input name="password" type="password" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:border-brand-blue" />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-brand-blue hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-colors"
              >
                {loading ? 'Authenticating...' : 'Sign in'}
              </button>
            </div>
            <p className="text-center text-xs text-brand-orange mt-4">(Hint: use admin@dh / admin123 to bypass UI testing for now)</p>
          </form>
        </div>
      </div>
    </div>
  );
}
