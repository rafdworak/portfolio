import React from 'react';
import './App.css';
import './override.css';
import ReactFullpage from '@fullpage/react-fullpage';

import linkedin from './img/linkedin.svg';
import github from './img/github.svg';
import youtube from './img/youtube.svg';



const anchors = ['Portfolio', 'About-me', 'Contact', 'Other-projects'];


function App() {
  return (
    <div className='portfolio'>

      <div className='header'>
        <div className="container-navi">
          <div className='link'><a href="#section-portfolio">Portfolio</a></div>
          <div className='link'><a href="#section-about">About me</a></div>
          <div className='link'><a href="#section-contact">Contact</a></div>
          <div className='link'><a href="#section-other">Other projects</a></div>
        </div>
      </div>
      <div className='footer'>
        <div className='container-icons'>
          <div className='logo'><a href='https://www.linkedin.com/in/rdworak/'><img src={linkedin}></img></a></div>
          <div className='logo'><a href='https://github.com/rafdworak'><img src={github}></img></a></div>
          <div className='logo'><a href=''><img src={youtube}></img></a></div>

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
                <div class="slide" id='kodflix'><h3>Kodflix</h3>
                  <h2>A full stack project simulating the production of Netflix.</h2>
                </div>
                <div class="slide" id='carrate'><h3>Carrate</h3> </div>
              </div>
              <div className="section" id='section-about'>
                <h3>About me</h3>
              </div>
              <div className="section" id='section-contact'>
                <h3>Contact</h3>
              </div>
              <div className="section" id='section-other'>
                <h3>Other projects</h3>
              </div>
            </ReactFullpage.Wrapper>

          );
        }}
      />
    </div>
  );
}

export default App;


