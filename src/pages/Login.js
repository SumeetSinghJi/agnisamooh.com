import React from 'react';
import LoginForm from '../components/backend/LoginForm'

const Login = () => {
    return (
        <div>
            <div className="main">
                <div className="column1">
                    {/* Content for left column (column1) */}
                </div>
                <div className="column2">
                    <div style={{ textAlign: 'center' }}>
                        <h1>Login</h1>
                    </div>
                    <br />
                    <p>
                        Login to your account below
                    </p>
                    <LoginForm />
                </div>
                <div className="column3">
                    {/* Content for right column (column3) */}
                </div>
            </div>
        </div>
    );
};

export default Login;
