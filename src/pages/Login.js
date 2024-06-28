// src/pages/Login.js

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
                    <p>NOTE: Because this is a Learning Project and not a real/live business the Database
                        which would normally be an AWS RDS DB is turned off to save money. 
                        Possibly in the future a Lambda for start/stopping DB will be triggered by LogOn/Token expire/Logoff
                        but for now for a demonstration on how it would act you can see a local server code here:
                        <a href = "https://github.com/SumeetSinghJi/agnisamooh.com/blob/main/src/components/backend/Server.js">https://github.com/SumeetSinghJi/agnisamooh.com/blob/main/src/components/backend/Server.js</a>
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
