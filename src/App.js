import React from 'react';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';



function App() {
  return (
    <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section" id='section-portfolio'>
            <p>Portfolio:</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section"id='section-about'>
              <p>About me</p>
          </div>
          <div className="section" id='section-contact'>
            <p>Contact</p>
          </div>
          <div className="section" id='section-other'>
            <p>Other projects</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
  );
}

export default App;