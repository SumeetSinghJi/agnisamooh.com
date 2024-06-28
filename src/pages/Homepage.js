// src/pages/Homepage.js

import React from 'react';
import SampleGame from '../components/SampleGame';

const Homepage = () => {
    return (
        <div>
            <div className="main">
                <div className="column1">
                    {/* Content for left column (column1) */}
                </div>
                <div className="column2">
                    <div style={{ textAlign: 'center' }}>
                        <h1>Calling all Gamers</h1>
                    </div>
                    <br />
                    <p>
                        Welcome to the home of niche gaming developers!
                    </p>
                    <p>
                        Meet Agnisamooh, your gateway to discovering unique and innovative games that may not be in the spotlight yet.
                    </p>
                    <p>
                        Agnisamooh is dedicated to bridging the gap between niche game developers and a broader audience. Whether you're into indie adventures, artistic puzzles, or experimental simulations, Agnisamooh brings you curated selections that promise fresh experiences.
                    </p>
                    <p>
                        Explore our catalog to find hidden gems, support up-and-coming developers, and expand your gaming horizons.
                    </p>
                    <div style={{ textAlign: 'center' }}>
                        <SampleGame />
                        <br />
                        <a href="https://www.agnisamooh.com/games" className="btn-primary">Discover More</a>
                    </div>
                </div>
                <div className="column3">
                    {/* Content for right column (column3) */}
                </div>
            </div>
        </div>
    );
};

export default Homepage;
