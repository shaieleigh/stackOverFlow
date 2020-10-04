import React from 'react';

import NavBar from '../components/NavBar'
import './LandingPage.css'

function LandingPage(){

    return (
      <>
        <NavBar />
        <div className="yellowContainer">
            <div className="wordsContainer">
                <h1 className="boldHeading">We &lt;3 heart people who snack</h1>
                <p className="boldSubheading">
                    We are an informational website that answers any questions you have about snacks, so 
                    grab a snack and ask a question -- the answer will be delicious!
                </p>

            </div>
          <div className="divForButtons"></div>
        </div>
      </>
    );
}

export default LandingPage;