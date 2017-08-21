import React, { PropTypes } from 'react'
import alex from '../images/Team_Alex.png';
import christian from '../images/Team_Christian.png';
import dawon from '../images/Team_Dawon.png';
import triangle from '../images/triangle.png';
import './team.css';

class team extends React.Component {
  render () {
    return(
      <div>
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

          <div className='box'>
            <div className='logo'>
              <img src={alex}/>
            </div>
            <div className='detail'>
              <div className='title'>
                <div className='name'>ALEX WANG</div>
                <div className='alex-line'></div>
              </div>
              <div className='creator'>DIRECTOR / WRITER</div>
              <div className='description'>
                Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60' populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten
              </div>
            </div>
          </div>

          <div className='box'>
            <div className='right-detail'>
              <div className='title'>
                <div className='christian-line'></div>
                <div className='name'>CHRISTIAN QUINONES</div>
              </div>
              <div className='creator'>COMPOSER / SOUND ENGINEER</div>
              <div className='right-description'>
                Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60' populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten
              </div>
            </div>
            <div className='logo'>
              <img src={christian}/>
            </div>
          </div>

          <div className='box'>
            <div className='logo'>
              <img src={dawon}/>
            </div>
            <div className='detail'>
              <div className='title'>
                <div className='name'>DAWON KIM</div>
                <div className='dawon-line'></div>
              </div>
              <div className='creator'>ILLUSTRATOR / GRAPHIC DESIGNER</div>
              <div className='description'>
                Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60' populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default team;
