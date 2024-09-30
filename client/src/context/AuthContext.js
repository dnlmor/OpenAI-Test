import React, { createContext, useState, useEffect } from 'react';
import { getUser, logout } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginError, setLoginError] = useState(null);
  const [signupError, setSignupError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthLoading(true);
      getUser(token)
        .then((userData) => {
          setUser(userData);
          setIsAuthenticated(true);
        })
        .catch(() => {
          // If the token is invalid, clear it
          logout();
          setUser(null);
          setIsAuthenticated(false);
        })
        .finally(() => {
          setAuthLoading(false);
        });
    } else {
      setAuthLoading(false);
    }
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        authLoading,
        loginError,
        signupError,
        setLoginError,
        setSignupError,
        setUser,
        setIsAuthenticated,
        handleLogout,
      }}
    >
      {!authLoading && children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
