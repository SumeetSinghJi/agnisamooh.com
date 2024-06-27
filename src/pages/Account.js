// src/pages/Account.js

import React from 'react';
import AccountForm from '../components/backend/AccountForm';
import DeleteAccountButton from '../components/backend/DeleteAccountButton';
import JoinMailingList from '../components/backend/JoinMailingList';

const Account = () => {
  const authToken = localStorage.getItem('authToken');
  const username = authToken ? JSON.parse(atob(authToken.split('.')[1])).username : '';

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
            Welcome, {username}!
          </p>
          {/* Render account details form, join mailing list, delete account button */}
          <AccountForm />
          <JoinMailingList />
          <DeleteAccountButton />
        </div>
        <div className="column3">
          {/* Content for right column (column3) */}
        </div>
      </div>
    </div>
  );
};

export default Account;
