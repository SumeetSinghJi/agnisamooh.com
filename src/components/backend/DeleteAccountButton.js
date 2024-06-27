// src/components/backend/DeleteAccountButton.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const authToken = localStorage.getItem('authToken'); // Retrieve JWT token from localStorage

const DeleteAccountButton = ({ onDelete }) => {
    const navigate = useNavigate(); // Initialize useNavigate hook for navigation
    const [errorMessage, setErrorMessage] = useState(null); // State for error message

    const handleDelete = async () => {
        const confirmed = window.confirm(`Are you sure you want to delete your account?
            Deleting an account is not recoverable.`);

        if (!confirmed) {
            return;
        }

        try {
            const response = await axios.post('http://localhost:5001/delete-account', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}` // Include 'Bearer' prefix for JWT
                }
            });
            if (!response.ok) {
                throw new Error('Failed to delete account');
            }
            onDelete(); // Optional: Implement a callback to handle UI changes after deletion
            navigate('/');
        } catch (error) {
            console.error('Delete account error:', error.message);
            setErrorMessage('Failed to delete account');
        }
    };

    return (
        <div>
            <p>Click this button to delete your account. 
                Please understand that deleted accounts cannot be recovered.</p>
            <button onClick={handleDelete}>Delete Account</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default DeleteAccountButton;
