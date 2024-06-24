import React from 'react';

const authToken = localStorage.getItem('authToken'); // Retrieve JWT token from localStorage

const JoinMailingListButton = ({ onDelete }) => {
    const handleJoinMailingList = async () => {
        try {
            const response = await fetch('/api/user/delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authToken
                }
            });
            if (!response.ok) {
                throw new Error('Failed to join mailing list');
            }
        } catch (error) {
            console.error('Join mailing list error:', error.message);
            // Handle error, show a message, or redirect to an error page
        }
    };

    return (
        <button onClick={handleJoinMailingList}>Join Mailing List</button>
    );
};

export default JoinMailingListButton;