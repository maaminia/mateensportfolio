import logo from './ucsc_logo.png';
import selfie from './selfie.JPG';
import sammy from './sammySlug.png';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const text = 'Mateen Aminian \n Full Stack Developer \n';
    const major = "Bachelor's of Science \n Computer Science: Computer Game Design \n"
    const about = "About Me: \n I am a 21 year old aspiring full stack developer \n with a passion for game development. I graduated from the \n University of California, Santa Cruz and I am \ncurrently looking for a full-time job opportunity. \nPlease feel free to check out my Linkedin, Github, and Resume";
  return (
      <div className="App-header">
          <div className="App-NavBackground">
              <child>
              <a
                  className="App-logo"
                  href=""
              >
                  <img className="logo" src={logo} alt="logo" />
                  <img className="sammy" src={sammy} alt="sammy" />
                  </a>
                  </child>
              <child className="major"> {major}</child>
              <child className="bioText"> {text}</child>
              <child className="About"> {about}</child>
          </div>
          
          <img className="headshot" src={selfie} alt="selfie" />
          <div>
          
          <button
              className="linkedin"
              target="_blank"
                  type="button"
                  onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'https://www.linkedin.com/in/mateen-aminian-042bb6187/';
                  }}
              
          >
              LinkedIn 
                  </button>
                
          <button
              className="github"
                  type="button"
                  onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'https://github.com/maaminia';
                  }}
          >
               Github 
          </button>
          <button className="resume" href="file:///C:/Users/matee/Dropbox/My%20PC%20(DESKTOP-1PKDDLV)/Documents/resume_april2022.pdf" target="_blank">
               Resume 
              </button>
              </div>
      </div>

      
  );
}

export default App;
