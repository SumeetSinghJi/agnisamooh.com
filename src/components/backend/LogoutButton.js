import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const authToken = localStorage.getItem('authToken');

    const handleLogout = async () => {
        try {
            const response = await axios.delete('http://localhost:5001/logout', {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });
            if (response.status === 200) {
                localStorage.removeItem('authToken');
                navigate('/');
            } else {
                throw new Error('Failed to logout');
            }
        } catch (error) {
            console.error('Logout error:', error.message);
            setErrorMessage('Failed to logout');
        }
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default LogoutButton;
