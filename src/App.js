import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="row">
          <div className="column1"></div>
          <div className="column2">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/account" element={<Account />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/games" element={<Games />} />
              <Route path="/login" element={<Login />} />
              <Route path="/news" element={<News />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/contactus" element={<ContactUs />} />
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
