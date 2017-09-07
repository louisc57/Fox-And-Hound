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



class Contact extends React.Component {

  constructor(props){
    super(props);
    this.state={
      email: '',
      subject: '',
      message: ''
    };


  }

  updateName (evt){
    this.setState({
      name: evt.target.value
    })
  }

  handleEmail(){

  }

  handleMessage(){

  }

  handleSubmit(){
    alert('Testing Submit button and name ' + this.state.name);
  }

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
                placeholder='Email'
                className='email-email'
                value={this.state.email}/>
              <input
                type="text"
                name="subject"
                placeholder='Subject'
                className='email-subject'
                value={this.state.subject}/>
              <input
                type="text"
                name="message"
                placeholder='Message'
                className='email-message'
                value={this.state.message}/>
              <button
                type="submit"
                value="Submit"
                className='email-submit'
                />


            </div>
          </div>
        </div>

        <div className='mobile-contact'>

          <div className='mobile-header'>
            <div className='mobile-header2'>
              <div className='gps'></div>
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
          </div>

          //start here

          <div className='friendly-bar'></div>
          <div className='adventure-bar'>
            <div className='up-button'>

            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Contact;
