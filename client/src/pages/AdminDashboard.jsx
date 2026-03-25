import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FiLogOut, FiTrash2, FiClock, FiCheckCircle } from 'react-icons/fi';

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

    if (token === 'mock_token_for_UI') {
      setEnquiries([
        { _id: '1', name: 'Ramesh Singh', phone: '9876543210', serviceInterested: 'Outdoor Branding', budget: '1L-5L', status: 'new', createdAt: new Date().toISOString() },
        { _id: '2', name: 'Priya Sharma', phone: '8765432109', serviceInterested: 'Digital Marketing', budget: 'Under 50k', status: 'contacted', createdAt: new Date(Date.now() - 86400000).toISOString() },
      ]);
      setLoading(false);
      return;
    }

    const fetchEnquiries = async () => {
      try {
        const res = await axios.get('/api/admin/enquiries', {
          headers: { Authorization: `Bearer ${token}` }
        });
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
      await axios.patch(`/api/admin/enquiries/${id}`, { status: newStatus }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
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
      await axios.delete(`/api/admin/enquiries/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setEnquiries(enquiries.filter(e => e._id !== id));
      toast.success('Enquiry deleted');
    } catch (err) {
      toast.error('Failed to delete');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <Helmet><title>Dashboard | Agency Portal</title></Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-2xl font-bold text-brand-text">Leads Dashboard</h1>
            <p className="text-sm text-gray-500">Manage incoming business enquiries</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-100 transition-colors"
          >
            <FiLogOut /> Logout
          </button>
        </div>

        {loading ? (
          <div className="text-center py-20"><div className="animate-spin w-10 h-10 border-4 border-brand-blue border-t-white rounded-full mx-auto"></div></div>
        ) : enquiries.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl text-center shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-400">No enquiries yet</h3>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Client Info</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Service & Budget</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {enquiries.map((enq) => (
                    <tr key={enq._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(enq.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-gray-900">{enq.name}</div>
                        <div className="text-sm text-gray-500">{enq.phone}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-brand-blue">{enq.serviceInterested}</div>
                        <div className="text-xs text-brand-orange mt-1">{enq.budget}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold
                          ${enq.status === 'new' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                        `}>
                          {enq.status === 'new' ? <FiClock /> : <FiCheckCircle />}
                          {enq.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex items-center gap-3">
                        {enq.status === 'new' && (
                          <button onClick={() => updateStatus(enq._id, 'contacted')} className="text-brand-blue hover:text-blue-900 bg-blue-50 px-3 py-1 rounded-lg">Mark Contacted</button>
                        )}
                        <button onClick={() => deleteEnquiry(enq._id)} className="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded-lg">
                          <FiTrash2 />
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
