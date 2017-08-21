import React, { PropTypes } from 'react'
import './contact.css'
import email from '../images/Contact/email.png';
import facebook from '../images/Contact/facebook.png';
import frame from '../images/Contact/frame.png';
import instagram from '../images/Contact/instagram.png';
import pintrest from '../images/Contact/pintrest.png';
import send from '../images/Contact/send.png';
import soundcloud from '../images/Contact/soundcloud.png';
import twitter from '../images/Contact/twitter.png';
import youtube from '../images/Contact/youtube.png';


class Contact extends React.Component {
  render () {
    return(
      <div className='main'>
        <div className='frame'>
          <div className='box1'>
            <div className='contact'>CONTACT US</div>
            <div className='updates'>STAY TUNED FOR UPDATES</div>
            <div className='list'>
              <img className='icon' src={twitter}/>
              <img className='icon' src={facebook}/>
              <img className='icon' src={instagram}/>
              <img className='icon' src={soundcloud}/>
              <img className='icon' src={youtube}/>
              <img className='icon' src={twitter}/>
            </div>
          </div>
          <div className='box2'>
            <div className='email'>REACH US BY
              <div className='orange'> EMAIL</div>
              <img className='emblem' src={email}/>
            </div>
            <div className='sample'>
              foxandhoundstudios.cya@gmail.com
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
