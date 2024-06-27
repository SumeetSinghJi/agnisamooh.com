// src/components/backend/SubscribeMailingListButton.js

import React, { useState } from 'react';
import axios from 'axios';

const authToken = localStorage.getItem('authToken'); // Retrieve JWT token from localStorage

const SubscribeMailingListButton = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null); // State for error message

    const handleSubscribeMailingList = async () => {
        try {
            const response = await axios.put('/Subscribe-mailing-list', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to Subscribe mailing list');
            }
            setFormSubmitted(true);
            setErrorMessage('');
        } catch (error) {
            console.error('Subscribe mailing list error:', error.message);
            setErrorMessage('Failed to Subscribe mailing list');
        }
    };

    return (
        <div>
            <p>Click here to subscribe/unsubscribe to promotional marketing material
            which includes exclusive sales, events, news and more</p>
            <button onClick={handleSubscribeMailingList}>Subscribe Mailing List</button>
            {formSubmitted && <p className="success-message">Succesfully subscribed!</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default SubscribeMailingListButton;
