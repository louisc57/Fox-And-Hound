import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import './bloody.css';
import { ReactCSSTransitionGroup } from 'react-transition-group'; // ES6
import logo from '../images/BloodyMarylogo.png';
import scroll from '../images/Contact/scrollup.png';
import graphic from '../images/graphic.png';
import slide1 from '../images/mobile-mary/slide1.png';
import slide2 from '../images/mobile-mary/slide2.png';
import slide3 from '../images/mobile-mary/slide3.png';
import slide4 from '../images/mobile-mary/slide4.png';
import google from '../images/mobile-mary/Googleplay.png';
import ios from '../images/mobile-mary/ios_store.png';

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

class BloodyM extends React.Component {
  render(){
    return(
      <div>
        <div className='bloody-main'>
          <div className='logo-class'><img src={logo}/></div>
          <div className='app'>AVAILABLE NOW IN APP STORES</div>
          <iframe className="video" src="https://www.youtube.com/embed/Z1pzX78u--8"></iframe>
          <div className="app-description">
            <div className="general">
              <div className="main-title">
                BLOODY MARY: THE HUDSON HOUSE
              </div>
              <div className="main-app">
                AVAILABLE NOW IN APP STORES
              </div>
              <p className="main-description">
                From Fox & Hound Studios comes an immersive story experience that intertwines gorgeous artwork, riveting music, and a compelling storyline to keep you on the edge of your seat.<br/><br/>

                Evoking the nostalgia of Pick-Your-Own-Adventure Interactive Fiction stories of the past, comes a modern twist, perfectly set in the medium of mobile phones.<br/><br/>

                Escape from The Hudson House, a desecrated dwelling with a chilling, bloody history in its past. Read along to unravel the mystery of the house as your choices determine your fate, for better or for worse. As you progress in the game, graphic illustrations and stunning animations help paint the mysterious past and the eerie present. Emotional, stirring music helps the story come alive while poignant, descriptive writing make sure you can’t tear your eyes away. This trifecta combines to create an edge-of-your seat horror mystery game like no other.<br/><br/>

                Will you be able to escape the wrath of Bloody Mary and uncover clues that shine a light into the dark, dirty house? Or will you be forever trapped, to be added to the menagerie of the Hudson House?
              </p>
            </div>
          </div>
        </div>

        <div className='bloody-mobile'>
          <iframe className="mobile-video" width="270px" height="460px" src="https://www.youtube.com/embed/Z1pzX78u--8"></iframe>
          <img className="mobile-bloodylogo" src={logo}></img>
          <div className='mobile-app'>AVAILABLE NOW IN APP STORES</div>
          <div className="mobile-graphic"><u>BLOODY MARY</u></div>
          <div className="mobile-description">
            From Fox & Hound Studios comes an immersive story experience that intertwines gorgeous artwork, riveting music, and a compelling storyline to keep you on the edge of your seat.<br/><br/>

            Evoking the nostalgia of Pick-Your-Own-Adventure Interactive Fiction stories of the past, comes a modern twist, perfectly set in the medium of mobile phones.<br/><br/>

            Escape from The Hudson House, a desecrated dwelling with a chilling, bloody history in its past. Read along to unravel the mystery of the house as your choices determine your fate, for better or for worse. As you progress in the game, graphic illustrations and stunning animations help paint the mysterious past and the eerie present. Emotional, stirring music helps the story come alive while poignant, descriptive writing make sure you can’t tear your eyes away. This trifecta combines to create an edge-of-your seat horror mystery game like no other.<br/><br/>

            Will you be able to escape the wrath of Bloody Mary and uncover clues that shine a light into the dark, dirty house? Or will you be forever trapped, to be added to the menagerie of the Hudson House?
          </div>
          <div className="mobile-storelinks">
            <img className="stores" src={ios}></img>
            <img className="stores" src={google}></img>
          </div>
          <div className="mobile-adventure">CHOOSE YOUR OWN ADVENTURE</div>
          <img className="mobile-slides" src={slide1}></img>
          <img className="mobile-slides" src={slide2}></img>
          <img className="mobile-slides" src={slide3}></img>
          <img className="mobile-slides" src={slide4}></img>
          <div className="mobile-storelinks">
            <img className="stores" src={ios}></img>
            <img className="stores" src={google}></img>
          </div>
          <div className='friendly-bar'></div>
          <div className='adventure-bar'>
            <ScrollButton scrollStepInPx="80" delayInMs="17"/>
          </div>
        </div>
      </div>
    )
    document.getElementById('tId').style.width = "30%";
  }
}

export default BloodyM;
