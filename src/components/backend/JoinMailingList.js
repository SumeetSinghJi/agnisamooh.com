import React, { useState } from 'react';

const authToken = localStorage.getItem('authToken'); // Retrieve JWT token from localStorage

const JoinMailingListButton = () => {
    const [errorMessage, setErrorMessage] = useState(null); // State for error message

    const handleJoinMailingList = async () => {
        try {
            const response = await fetch('/join-mailing-list', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to join mailing list');
            }
        } catch (error) {
            console.error('Join mailing list error:', error.message);
            setErrorMessage('Failed to join mailing list');
        }
    };

    return (
        <div>
            <button onClick={handleJoinMailingList}>Join Mailing List</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default JoinMailingListButton;
