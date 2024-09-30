import React from 'react';

const Button = ({ onClick, children, type = 'button', variant = 'primary', className }) => {
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
    danger: 'bg-red-500 hover:bg-red-700 text-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
