import React from 'react';
import Login from '../../components/Auth/Login';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Welcome Back!</h2>
        <Login />  {/* Login component handles the login logic */}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline font-semibold">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
