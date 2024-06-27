// src/pages/SignUp.js

import React from 'react';
import SignUpForm from '../components/backend/SignUpForm'

const SignUp = () => {
    return (
        <div>
            <div className="main">
                <div className="column1">
                    {/* Content for left column (column1) */}
                </div>
                <div className="column2">
                    <div style={{ textAlign: 'center' }}>
                        <h1>Sign Up</h1>
                    </div>
                    <br />
                    <p>
                        Sign up using the form below
                    </p>
                    <SignUpForm />
                </div>
                <div className="column3">
                    {/* Content for right column (column3) */}
                </div>
            </div>
        </div>
    );
};

export default SignUp;
