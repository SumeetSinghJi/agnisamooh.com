import React from 'react';
import { useNavigate } from 'react-router-dom';

const authToken = localStorage.getItem('authToken'); // Retrieve JWT token from localStorage

const DeleteAccountButton = ({ onDelete }) => {
    const navigate = useNavigate(); // Initialize useNavigate hook for navigation
    const handleDelete = async () => {
        try {
            const response = await fetch('/api/user/delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authToken
                }
            });
            if (!response.ok) {
                throw new Error('Failed to delete account');
            }
            onDelete(); // Optional: Implement a callback to handle UI changes after deletion
            navigate('/account');
        } catch (error) {
            console.error('Delete account error:', error.message);
            // Handle error, show a message, or redirect to an error page
        }
    };

    return (
        <button onClick={handleDelete}>Delete Account</button>
    );
};

export default DeleteAccountButton;