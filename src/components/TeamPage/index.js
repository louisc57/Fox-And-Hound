import React, { PropTypes } from 'react'
import logo from '../images/logo_placerholder.png';
import dog from '../images/teamdog.png';
import fox from '../images/teamfox.png';
import triangle from '../images/triangle.png';
import './team.css';

class team extends React.Component {
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

        <div className='team-container'>
          <div className='team-box'>
            <div className='color'>
              <img src={triangle}/>
            </div>
            <div className='team-header'>
              <div className='header1'>MEET <span className='orange'>THE TEAM</span></div>
              <div className='adjuster'>
                <div className='line1'></div>
                <div className='line2'></div>
              </div>
              <div className='header2'>CREATIVITY CONTENT CREATOR</div>
            </div>
            <div className='team-text'>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren 60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.</div>
          </div>

          <div className='alex-box'>Alex Box
            <div className='dog-container'>
              <img />
            </div>
            <div className='alex-detail'>
              <div className='alex-title'>
                <div className='alex-name'></div>
                <div className='alex-line'></div>
              </div>
              <div className='creator'></div>
              <div className='description'></div>
            </div>
          </div>

          <div className='dawon-box'>Dawon Box</div>
        </div>
      </div>
    )
  }
}

export default team;
