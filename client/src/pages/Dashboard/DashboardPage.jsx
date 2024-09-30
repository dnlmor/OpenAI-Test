import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Sidebar from '../../components/Dashboard/Sidebar';
import DashboardContent from '../../components/Dashboard/DashboardContent';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const DashboardPage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      toast.error('You must be logged in to access the dashboard.');
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar logout={logout} />
      <div className="flex-1 p-6 bg-white shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome, {user?.name}</h1>
        <p className="text-gray-600 mb-4">
          Welcome to our AI Language Learning Center, where we utilize AI as your training partner.
          Please select your language and section to begin training or simulation.
        </p>
        <DashboardContent />
      </div>
    </div>
  );
};

export default DashboardPage;
