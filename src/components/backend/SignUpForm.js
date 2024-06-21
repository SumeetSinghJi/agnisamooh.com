import React, { useState } from 'react';

const SignUpForm = () => {

    const validateForm = () => {

    };

    const handleInputChange = () => {

    };

    const handleSubmit = () => {

    };

    return (
        <form
            onSubmit={handleSubmit}
            action='http://AWSPIGOESHERE'
            method='POST'>

            <div className="form-group">
                <label htmlFor="email">Your email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                {formErrors.email && <span className="error">{formErrors.email}</span>}
            </div>


            <div className="form-group">
                <label htmlFor="password">Password</label>
                <textarea
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                {formErrors.password && <span className="error">{formErrors.password}</span>}
            </div>

            <button type="submit">Send</button>

            {formSubmitted && <p className="success-password">Thank you for your password!</p>}
        </form>
    );
};

export default SignUpForm;
