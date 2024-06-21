import React from 'react';

const Account = () => {
  const authToken = localStorage.getItem('authToken'); // Retrieve JWT token from localStorage
  const username = authToken ? JSON.parse(atob(authToken.split('.')[1])).username : ''; // Decode token to extract username

  return (
    <div>
      <div className="main">
        <div className="column1">
          {/* Content for left column (column1) */}
        </div>
        <div className="column2">
          <div style={{ textAlign: 'center' }}>
            <h1>Account</h1>
          </div>
          <br />
          <p>
            Welcome, {username}! {/* Display the username */}
          </p>
          <p>
            Modify your account details below
          </p>
        </div>
        <div className="column3">
          {/* Content for right column (column3) */}
        </div>
      </div>
    </div>
  );
};

export default Account;
