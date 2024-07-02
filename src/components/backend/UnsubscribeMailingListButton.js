import React, { useState } from 'react';
import axios from 'axios';

const UnsubscribeMailingListButton = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleUnsubscribeMailingList = async () => {
        try {
            const authToken = localStorage.getItem('authToken');
            const response = await axios.put('http://localhost:5001/unsubscribe-mailing-list', null, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });

            if (response.status === 200) {
                setFormSubmitted(true);
                setErrorMessage('');
            } else {
                throw new Error('Failed to unsubscribe from mailing list');
            }
        } catch (error) {
            console.error('Unsubscribe mailing list error:', error.message);
            setErrorMessage('Failed to unsubscribe from mailing list');
        }
    };

    return (
        <div>
            <button onClick={handleUnsubscribeMailingList}>Unsubscribe from Mailing List</button>
            {formSubmitted && <p className="success-message">Successfully unsubscribed!</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default UnsubscribeMailingListButton;
