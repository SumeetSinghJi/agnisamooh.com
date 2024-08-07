import React, { useState, useEffect } from "react";
import axios from 'axios';

function AccountForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [authToken, setAuthToken] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false); // State for subscription status

    useEffect(() => {
        // Retrieve JWT token from localStorage on component mount
        const token = localStorage.getItem('authToken');
        if (token) {
            setAuthToken(token);
            getAccountDetails(token); // Call getAccountDetails with token
        }
    }, []); // Empty dependency array ensures this runs only on mount

    const getAccountDetails = async () => {
        try {
            const authToken = localStorage.getItem('authToken');
            setAuthToken(authToken);

            const response = await axios.get("http://localhost:5001/get-account-details", {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });

            setUsername(response.data.username);
            setEmail(response.data.email);
            setIsSubscribed(response.data.onMailingList); // Update subscription status
            setErrorMessage('');
        } catch (error) {
            console.error("Failed to get account details", error);
            setErrorMessage("Failed to get account details");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:5001/update-account", {
                username,
                email,
                password,
                onMailingList: isSubscribed // Include subscription status in update request
            }, {
                headers: {
                    "Authorization": `Bearer ${authToken}`
                }
            });

            if (!response.ok) {
                throw new Error("Failed to update account data");
            }

            setFormSubmitted(true);
            setErrorMessage('');
            getAccountDetails(); // Call to update the Account form labels
        } catch (error) {
            console.error("Failed to update account data", error);
            setErrorMessage("Failed to update account data");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubscriptionToggle = async () => {
        setIsSubscribed(!isSubscribed); // Toggle subscription state locally
        // Update subscription status on the server
        try {
            await axios.put("http://localhost:5001/subscribe-mailing-list", null, {
                headers: {
                    "Authorization": `Bearer ${authToken}`
                }
            });
        } catch (error) {
            console.error("Failed to update subscription status", error);
            setErrorMessage("Failed to update subscription status");
            // Rollback state change if API call fails
            setIsSubscribed(!isSubscribed);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username: {username} </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter new username"
                />
            </div>
            <div>
                <label htmlFor="email">Email: {email} </label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter new email"
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                />
                <button type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? 'Hide' : 'Show'}
                </button>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={isSubscribed}
                        onChange={handleSubscriptionToggle}
                    />
                    Subscribe to mailing list
                </label>
            </div>
            <button type="submit">Update</button>
            {formSubmitted && <p className="success-message">Account details updated</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
    );
}

export default AccountForm;
