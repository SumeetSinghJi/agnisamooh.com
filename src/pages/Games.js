import React from 'react';
import image1 from '../assets/graphics/BubbleUp1.png';
import image2 from '../assets/graphics/BubbleUp2.png';

const Games = () => {
  return (
    <div>
      <div className='main'>
        <div className="column1"></div>
        <div className="column2">
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
            <h1>Games</h1>
          </div>
          <br />
          <h3>BubbleUp</h3>
          <p>
            BubbleUP is a combined C++ 2D Game Engine with a built in feature-rich demonstration 2D game built ontop of the SDL Framework. It includes classes for constructing interactive Buttons and fields to create stunning GUI, Forms and HUD. Includes countless game entities and level editor to create unique stunning 2D games. Has built in scenes for achievements, leaderboards, multiplayer, and more. You can download and easily modify this open-source code to create your own game by following the instructions here.
          </p>
          <div style={{ textAlign: 'center' }}>
            <img src={image1} alt="BubbleUp" style={{ maxWidth: '100%', height: 'auto' }} />
            <br />
            <br />
            <img src={image2} alt="BubbleUp" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <br />
          <br />
          <h4>Purchase Links</h4>
          <p>
            Free version available on itch <a href="https://example.com" target="_blank" rel="noopener noreferrer">here</a>
          </p>
          <br />
          <br />
          <h4>System Requirements</h4>
          <ul>
            <li>OS:
              <ul>
                <li>Windows 10, 11</li>
                <li>MacOS 13 - 14</li>
                <li>Ubuntu 22.04 - 24.04</li>
              </ul>
            </li>
            <li>Processor: at least a Core i3 or AMD CPU equivalent</li>
            <li>RAM: 4 GB RAM</li>
            <li>Graphics: at least a HD compatible CPU/GPU</li>
            <li>Storage: 5 GB Free</li>
          </ul>
          <br />
          <br />
          <br />
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};

export default Games;
