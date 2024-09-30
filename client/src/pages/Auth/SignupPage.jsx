import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import Signup from '../../components/Auth/Signup';

const SignupPage = () => {
  const { isAuthenticated, setUser, setSignupError, signupError } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      toast.success('You are already logged in! Redirecting to dashboard...');
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (signupError) {
      toast.error(`Signup failed: ${signupError}`);
    }
  }, [signupError]);

  const handleSignup = async (userData) => {
    try {
      setUser(userData);
      setSignupError(null);
      toast.success('Signup successful! Redirecting to dashboard...');
      navigate('/dashboard');
    } catch (error) {
      setSignupError(error.message || 'Signup failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-teal-600">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Create an Account</h2>
        <Signup onSuccess={handleSignup} />
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline font-semibold">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
