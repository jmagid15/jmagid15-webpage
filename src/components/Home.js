import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';
import bgImage from '../images/bgImage.jpg';


const insideStyles = {
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)'
};

const containerStyle = {
  display: 'flex',
  height:800
};

class Home extends Component {
  render() {
    return (
      <div>
        <Parallax bgImage={bgImage} strength={200}>
          <div style={containerStyle}>
            <div style={insideStyles}>
              <div className = "welcome-text">
                <h1>Jake Magid</h1>
                <h4>Software Engineer</h4>
                <div className="social-links">
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/jake-magid/">
                        <FaLinkedin size={20} color={'grey'}/>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/jmagid15">
                        <FaGithub size={20} color={'grey'}/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
        <h1>| | |</h1>
      </div>
    )
  }
}


export default Home;
