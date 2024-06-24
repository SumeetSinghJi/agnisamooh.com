import React, { useState } from 'react';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Sending the registration data to the API endpoint
        fetch("API_URL_GOES_HERE", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error: Backend signup server response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Success: Registered successfully: ", data);
            alert("Success: Registration successful");
            // Redirect user to account page if registration successful
            // window.location.href = "account.html";
        })
        .catch(error => {
            console.error("Error: ", error);
            alert("Error: Registration failed. Contact support@agnisamooh.com");
        });
    };

    const togglePasswordVisibility = (e) => {
        const input = e.target.previousSibling;
        input.type = input.type === 'password' ? 'text' : 'password';
    };

    return (
        <form id="SignUpForm" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label><br />
            <input type="text" name="username" value={formData.username} onChange={handleInputChange} maxLength="20" required /><br />
            <label htmlFor="email">Email:</label><br />
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} maxLength="50" required /><br />
            <label htmlFor="password">Password:</label><br />
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} maxLength="30" required /><br />
            <input type="checkbox" onClick={togglePasswordVisibility} />Show Password
            <br />
            <button type="submit">Register</button>
            <button type="reset">Reset</button>
        </form>
    );
};

export default SignUpForm;