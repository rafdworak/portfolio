import React from 'react';
import './App.css';
import './override.css';
import ReactFullpage from '@fullpage/react-fullpage';


const anchors = ['Portfolio', 'About-me', 'Contact', 'Other-projects'];


function App() {
  return (
    <div className='portfolio'>
      <div className='header'>
        <div className="container">
          <div className='link'><a href="#section-portfolio">Portfolio</a></div>
          <div className='link'><a href="#section-about">About me</a></div>
          <div className='link'><a href="#section-contact">Contact</a></div>
          <div className='link'><a href="#section-other">Other projects</a></div>
        </div>
      </div>
      <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        anchors={anchors}
        navigation
        navigationTooltips={anchors}

        render={({ state, fullpageApi }) => {
          return (

            <ReactFullpage.Wrapper>
              <div className="section" id='section-portfolio'>
                <div class="slide" id='kodflix'> Slide 1 </div>
                <div class="slide"> Slide 2 </div>
              </div>
              <div className="section" id='section-about'>
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
    </div>
  );
}

export default App;

