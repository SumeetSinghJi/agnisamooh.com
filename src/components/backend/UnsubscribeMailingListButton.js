// src/components/backend/UnsubscribeMailingListButton.js

import React, { useState } from 'react';
import axios from 'axios';

const authToken = localStorage.getItem('authToken'); // Retrieve JWT token from localStorage

const UnsubscribeMailingListButton = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null); // State for error message

    const handleUnsubscribeMailingList = async () => {
        try {
            const response = await axios.put('/Unsubscribe-mailing-list', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to Unsubscribe mailing list');
            }
            setFormSubmitted(true);
            setErrorMessage('');
        } catch (error) {
            console.error('Unsubscribe mailing list error:', error.message);
            setErrorMessage('Failed to Unsubscribe mailing list');
        }
    };

    return (
        <div>
            <button onClick={handleUnsubscribeMailingList}>Unsubscribe Mailing List</button>
            {formSubmitted && <p className="success-message">Unsuccesfully subscribed!</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default UnsubscribeMailingListButton;
