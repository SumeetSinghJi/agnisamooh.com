import React from 'react';
import AccountForm from '../components/backend/AccountForm';
import DeleteAccountButton from '../components/backend/DeleteAccountButton';
import JoinMailingList from '../components/backend/JoinMailingList';

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
          <AccountForm />
          <p>You can delete your account by clicking the Delete Account button below.
            < br />
            Please note there is no method to recover a deleted account. 
            Once deleted it is gone forever.
          </p>
          <DeleteAccountButton />
          <p>Click the Join Mailing list button below to recieve ongoing marketing promotional
            emails regarding AgniSamooh, and keep up to date with the latest events, discounts, promotions
            and news!
          </p>
          <JoinMailingList />
        </div>
        <div className="column3">
          {/* Content for right column (column3) */}
        </div>
      </div>
    </div>
  );
};

export default Account;
