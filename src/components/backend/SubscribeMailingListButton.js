// src/components/backend/SubscribeMailingListButton.js

import React, { useState } from 'react';
import axios from 'axios';

const SubscribeMailingListButton = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubscribeMailingList = async () => {
        try {
            const authToken = localStorage.getItem('authToken');
            const response = await axios.put('http://localhost:5001/subscribe-mailing-list', null, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });

            if (response.status === 200) {
                setFormSubmitted(true);
                setErrorMessage('');
            } else {
                throw new Error('Failed to subscribe to mailing list');
            }
        } catch (error) {
            console.error('Subscribe mailing list error:', error.message);
            setErrorMessage('Failed to subscribe to mailing list');
        }
    };

    return (
        <div>
            <button onClick={handleSubscribeMailingList}>Subscribe to Mailing List</button>
            {formSubmitted && <p className="success-message">Successfully subscribed!</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default SubscribeMailingListButton;
