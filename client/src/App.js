import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                <DashboardPage /> {/* Pass DashboardPage as child */}
              </PrivateRoute>
            } 
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
