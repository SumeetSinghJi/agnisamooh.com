import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });
      const token = response.data.token; // Retrieve the JWT token from localStorage
      localStorage.setItem('authToken', token); // Store the token in localStorage
      setFormSubmitted(true);
      setErrorMessage('');  // Clear any previous error messages
      navigate('/account'); // Navigate to Account page
    } catch (error) {
      console.error('Login failed', error);
      setErrorMessage('Login failed. Please check your username and password and try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <div>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
      <button type="submit">Login</button>
      {formSubmitted && <p className="success-message">Login successful!</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
}

export default LoginForm;
