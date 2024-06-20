import React from 'react';

const NotFound = () => {
  return (
    <div>
      <div className='main'>
        <div className="column1"></div>
        <div className="column2">
          <br />
          <br />
          <p>
            <div style={{ textAlign: 'center' }}>
              <h1>Page not found</h1>
            </div>
            <br />
            <p>Error 404: The page you are looking for doesn't exist. Use the search bar to navigate elsewhere.</p>
            <p>Email: kurta.kursi@gmail.com for any questions</p>
          </p>
        </div>
        <div className="column3">
        </div>
      </div>
    </div>
  );
};

export default NotFound;