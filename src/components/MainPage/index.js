import React, { PropTypes } from 'react';
import TeamPage from '../TeamPage';
import stripes from '../images/stripes.png';
import foxandhound from '../images/foxandhound.png';
import logo from '../images/logo_placerholder.png';
import './main.css'

class main extends React.Component {
  render () {
    return(
      <div>
        <div className='header'>
          <div className='tabs'>
            <div className='logo-container'>
              <img className='header-logo' src={logo}/>
            </div>
          </div>
          <div className='tabs' >Home </div>
          <div className='tabs' >Team</div>
          <div className='tabs' >Projects</div>
          <div className='tabs' >Contact Us</div>
        </div>
        <div className='main-container'>
          <div className='logo-box'><img className='main-logo' src={foxandhound}/></div>
          <div className='slogan-box'>
            <div>
              <div className='slogan1'>WE ARE <span className='orange'>FOX AND HOUND STUDIOS</span></div>
              <div className='slogan2'>CREATIVITY CONTENT CREATOR</div>
            </div>
          </div>
          <div className='stripes-box'><img className='main-stripes' src={stripes}/></div>
        </div>
      </div>
    )
  }
}

export default main;
