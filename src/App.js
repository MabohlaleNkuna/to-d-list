import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Logout from './pages/Logout';
import './styles.css'; 

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log('Checking local storage for auth status');
    const auth = localStorage.getItem('auth');
    setIsAuthenticated(!!auth);
  }, []);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <div className="app-container">
        <Routes>
          {/* Redirect root path to register page */}
          <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/home" element={isAuthenticated ? <Home /> :<Logout/>} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
