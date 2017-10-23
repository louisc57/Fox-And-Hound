import React, { PropTypes } from 'react';
import { Switch, Route } from 'react-router-dom';
import stripes from '../images/stripes.png';
import foxandhound from '../images/foxandhound.png';
import mobilestripes from '../images/mobile-stripes.png';
import animals from '../images/animals.png';
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
              <div className='slogan2'>CREATIVE CONTENT CREATORS</div>
            </div>
          </div>
          <div className='stripes-box'>
            <div className='bar8'></div>
            <div className='bar7'></div>
            <div className='bar6'></div>
            <div className='bar5'></div>
            <div className='bar4'></div>
            <div className='bar3'></div>
            <div className='bar2'></div>
            <div className='bar1'></div>
          </div>
        </div>


        <div className='mobile-main-container'>
          <div className='slogan1'>WE ARE <span className='orange'>FOX AND HOUND STUDIOS</span></div>
          <div className='slogan2'>CREATIVE CONTENT CREATORS</div>
          <div className='mbackground'>
              <img className='mobile-logo' src={animals}/>
              <div className='bar8'></div>
              <div className='bar7'></div>
              <div className='bar6'></div>
              <div className='bar5'></div>
              <div className='bar4'></div>
              <div className='bar3'></div>
              <div className='bar2'></div>
              <div className='bar1'></div>
          </div>
        </div>


      </div>
    )
  }
}

export default main;
