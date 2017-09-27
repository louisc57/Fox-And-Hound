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
import logo from '../images/foxandhound.png';
import pin from '../images/Contact/Contactpin.png';
import scroll from '../images/Contact/scrollup.png';

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render () {
      return <input type="image" src={scroll} alt="submit" id="myBtn" title='Back to top' className='scroll'
               onClick={ () => { this.scrollToTop(); }} />;
   }
}

class Contact extends React.Component {
  render () {
    return(
      <div>
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
                <img className='icon' src={pintrest}/>
              </div>
            </div>
            <div className='box2'>
              <div className='email'>REACH US BY
                <div className='orange'> EMAIL</div>
                <img className='emblem' src={email}/>
              </div>
              <div className='sample'>foxandhoundstudios.cya@gmail.com</div>
              <div className='thoughts'>Let us<span className='orange2'> know your thoughts</span></div>
              <input
                type="text"
                name="email"
                id='email'
                placeholder='Email'
                />
              <input
                type="text"
                name="subject"
                id='subject'
                placeholder='Subject'
                />
              <textarea
                type="text"
                name="message"
                id='message'
                placeholder='Message'
                className="email-message"
                />
              <input type="image" id="submit" onclick="topFunction()" src={send}/>


            </div>
          </div>
        </div>

        <div className='mobile-contact'>

          <div className='mobile-header'>
            <div className='mobile-header2'>
              <div className='gps'>
                <img  src={pin}/>
              </div>
              <div className='gps2'>
                <div className='contact'>CONTACT US</div>
                <div className='updates'>STAY TUNED FOR UPDATES</div>
              </div>
            </div>

            <div className='mobile-social'>
              <img className='icon' src={twitter}/>
              <img className='icon' src={facebook}/>
              <img className='icon' src={instagram}/>
              <img className='icon' src={soundcloud}/>
              <img className='icon' src={youtube}/>
              <img className='icon' src={pintrest}/>
            </div>

            <div className='mobile-logo'>
              <img src={logo}/>
            </div>

            <div className='email'>
              <div className='emblem'>
                <img className='emblem-2' src={email}/>
              </div>
              <div className='reach'>
                <div className='outreach'>REACH US BY<div className='m-contact-orange'> EMAIL</div></div>
                <div className='sample'>foxandhoundstudios.cya@gmail.com</div>
              </div>
            </div>

            <div className='thoughts'>Let us <span className='thoughts-orange'>know your thoughts</span></div>

            <input
              type="text"
              name="email"
              id='email'
              placeholder='Email'
              />
            <input
              type="text"
              name="subject"
              id='subject'
              placeholder='Subject'
              />
            <textarea
              type="text"
              name="message"
              id='message'
              placeholder='Message'
              className="email-message"
              />
            <input type="image" id="submit" onclick="topFunction()" src={send}/>


          </div>

          <div className='friendly-bar'></div>
          <div className='adventure-bar'>
            <ScrollButton scrollStepInPx="50" delayInMs="17"/>
          </div>

        </div>
      </div>
    )
  }
}

export default Contact;
