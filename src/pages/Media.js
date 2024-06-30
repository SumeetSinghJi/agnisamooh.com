// src/pages/Media.js

import React from 'react';
import LogoAppExample from '../assets/graphics/logos/example_logo.jpg';
import LogoApp from '../assets/graphics/logos/Logo-PNG-4097px.png';
import LogoDefault from '../assets/graphics/logos/FireGroup_Logo_PNG_ 4097px.png';

const Media = () => {
  return (
    <div>
      <div className='main'>
        <div className="column1"></div>
        <div className="column2">
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
          <h1>Media</h1>
          </div>
          <br />
          <h3>Free promotional images</h3>
          <p>
            You may freely use the image below to promote/discuss the agnisamooh brand.
          </p>
          <br />
          <img src={LogoAppExample} alt="Agnisamooh app logo Example" className="logo" />
          <br />
          <img src={LogoApp} alt="Agnisamooh app logo" className="logo" />
          <br />
          <img src={LogoDefault} alt="Agnisamooh default logo" className="logo" />
          <br />
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};

export default Media;
