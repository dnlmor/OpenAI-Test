import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import Login from '../../components/Auth/Login';
import { loginUser } from '../../api/authApi';

const LoginPage = () => {
  const { isAuthenticated, setUser, setLoginError, loginError } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      toast.success('Login successful! Redirecting to dashboard...');
      navigate('/dashboard');
    }

    if (loginError) {
      toast.error(`Login failed: ${loginError}`);
    }
  }, [isAuthenticated, loginError, navigate]);

  const handleLogin = async (userData) => {
    try {
      const user = await loginUser(userData);
      setUser(user);
      setLoginError(null);
      toast.success('Login successful! Redirecting to dashboard...');
      navigate('/dashboard');
    } catch (error) {
      setLoginError(error.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Welcome Back!</h2>
        <Login onSuccess={handleLogin} />
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline font-semibold">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
