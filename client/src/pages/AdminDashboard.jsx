import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiUser, FiPhone, FiTag, FiClock, FiSearch, FiLogOut, FiLayout, FiInbox, FiSettings, FiTrash2, FiCheckCircle } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import api from '../utils/api';

export default function AdminDashboard() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    const fetchEnquiries = async () => {
      try {
        const res = await api.get('/admin/enquiries');
        setEnquiries(res.data);
      } catch (err) {
        if (err.response?.status === 401) {
          handleLogout();
        }
        toast.error('Failed to load enquiries');
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  const updateStatus = async (id, newStatus) => {
    if (localStorage.getItem('token') === 'mock_token_for_UI') {
      setEnquiries(enquiries.map(e => e._id === id ? { ...e, status: newStatus } : e));
      toast.success('Status updated');
      return;
    }

    try {
      await api.patch(`/admin/enquiries/${id}`, { status: newStatus });
      setEnquiries(enquiries.map(e => e._id === id ? { ...e, status: newStatus } : e));
      toast.success('Status updated');
    } catch (err) {
      toast.error('Failed to update status');
    }
  };

  const deleteEnquiry = async (id) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return;
    
    if (localStorage.getItem('token') === 'mock_token_for_UI') {
      setEnquiries(enquiries.filter(e => e._id !== id));
      toast.success('Enquiry deleted');
      return;
    }

    try {
      await api.delete(`/admin/enquiries/${id}`);
      setEnquiries(enquiries.filter(e => e._id !== id));
      toast.success('Enquiry deleted');
    } catch (err) {
      toast.error('Failed to delete');
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-brand-bg">
      <Helmet><title>Dashboard | Agency Portal</title></Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12 glass-card !p-8 !rounded-[2.5rem]">
          <div>
            <h1 className="text-3xl tracking-tighter">Leads <span className="premium-gradient-text italic font-serif">Inbox</span></h1>
            <p className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted mt-1">Operational Command Center</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 group text-brand-text-muted hover:text-red-500 transition-colors font-black text-[10px] uppercase tracking-widest"
          >
            <FiLogOut className="group-hover:-translate-x-1 transition-transform" /> Exit Portal
          </button>
        </div>

        {loading ? (
          <div className="text-center py-24"><div className="animate-spin w-12 h-12 border-4 border-brand-secondary border-t-transparent rounded-full mx-auto"></div></div>
        ) : enquiries.length === 0 ? (
          <div className="glass-card !p-12 !rounded-[3rem] text-center">
            <h3 className="text-xl font-bold text-brand-text-muted/40 italic">No incoming requests founded.</h3>
          </div>
        ) : (
          <div className="glass-card !p-0 !rounded-[3rem] overflow-hidden border border-white">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-100">
                <thead className="bg-gray-50/50">
                  <tr>
                    <th className="px-8 py-5 text-left text-[10px] font-black text-brand-text-muted uppercase tracking-widest">Date</th>
                    <th className="px-8 py-5 text-left text-[10px] font-black text-brand-text-muted uppercase tracking-widest">Strategic Partner</th>
                    <th className="px-8 py-5 text-left text-[10px] font-black text-brand-text-muted uppercase tracking-widest">Mission Scope</th>
                    <th className="px-8 py-5 text-left text-[10px] font-black text-brand-text-muted uppercase tracking-widest">Status</th>
                    <th className="px-8 py-5 text-left text-[10px] font-black text-brand-text-muted uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white/40 divide-y divide-gray-100 italic font-medium">
                  {enquiries.map((enq) => (
                    <tr key={enq._id} className="hover:bg-white/60 transition-colors">
                      <td className="px-8 py-6 whitespace-nowrap text-xs text-brand-text-muted">
                        {new Date(enq.createdAt).toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' })}
                      </td>
                      <td className="px-8 py-6">
                        <div className="text-sm font-bold text-brand-text-main">{enq.name}</div>
                        <div className="text-[10px] text-brand-text-muted mt-1 font-black">{enq.phone}</div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="text-sm font-bold text-brand-secondary">{enq.serviceInterested}</div>
                        <div className="text-[10px] text-brand-text-muted mt-1 uppercase tracking-widest opacity-60">Value: {enq.budget || 'N/A'}</div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase
                          ${enq.status === 'new' ? 'bg-orange-100 text-brand-secondary' : 'bg-gray-100 text-brand-text-muted'}
                        `}>
                          {enq.status === 'new' ? <FiClock /> : <FiCheckCircle />}
                          {enq.status}
                        </span>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap text-sm font-medium flex items-center gap-4">
                        {enq.status === 'new' && (
                          <button onClick={() => updateStatus(enq._id, 'contacted')} className="text-brand-secondary hover:text-brand-text-main font-black text-[9px] uppercase tracking-widest bg-orange-50 px-4 py-2 rounded-xl transition-all">Engage</button>
                        )}
                        <button onClick={() => deleteEnquiry(enq._id)} className="text-red-400 hover:text-red-600 transition-colors">
                          <FiTrash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
