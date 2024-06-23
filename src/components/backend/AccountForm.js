import React, { useState } from "react";

function AccountForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = "";
            setFormSubmitted(true);
            setErrorMessage("");
        }
        catch(error) {
            console.error("Failed to update account data", error);
            setErrorMessage("Failed to update account data", error);
        }
    };

    const togglePasswordVisibility = () => {

    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=""
            />
            <input
                type="text"
                value={password}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=""
            />
            <button type="button" onSubmit={togglePasswordVisibility}></button>
            <input>
            </input>
            <button type="submit">Update</button>
            {formSubmitted && <p className="success-message">Account details updated</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
    )
};

export default AccountForm;