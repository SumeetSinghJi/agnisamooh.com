import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../assets/graphics/logos/Logo-PNG-4097px.png';

const Header = ({ authToken, handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/'); // Navigate to home page after logout
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={logoImage} alt="Agnisamooh logo" className="logo" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/games">Games</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/contactus">Contact us</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        {!authToken ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/account">Account</Link></li>
            <li><Link to="/logout" onClick={handleLogoutClick}>Logout</Link></li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Header;
