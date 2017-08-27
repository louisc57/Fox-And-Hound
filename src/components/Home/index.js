import React, { PropTypes } from 'react';
import { Switch, Route } from 'react-router-dom';
import stripes from '../images/stripes.png';
import foxandhound from '../images/foxandhound.png';
import './home.css'

class main extends React.Component {
  render () {
    return(
      <div>
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
        <div className='mobile-main-container'>
          Hi I am main
        </div>
      </div>
    )
  }
}

export default main;
