// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Games from './pages/Games';
import Login from './pages/Login';
import News from './pages/News';
import SignUp from './pages/SignUp';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null); // Clear authToken state
    return <Navigate to="/" replace />;
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Header authToken={authToken} handleLogout={handleLogout} />
        <div className="row">
          <div className="column1"></div>
          <div className="column2">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/games" element={<Games />} />
              <Route path="/news" element={<News />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/signup" element={<SignUp />} />
              {!authToken ? (
                <Route path="/login" element={<Login />} />
              ) : (
                <>
                  <Route path="/account" element={<Account />} />
                  <Route path="/logout" element={<Navigate to="/" replace />} />
                </>
              )}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <div className="column3"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
