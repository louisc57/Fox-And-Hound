import React, { PropTypes } from 'react';
import './index.css'

class main extends React.Component {
  render () {
    return(
      <div>
        <div className='header'>
          <div className='logo-container'>
            <div className='headerlogo'>
            </div>
          </div>
          <div className='tab-container'>
            <div className='tabs'>Home</div>
            <div className='tabs'>About</div>
            <div className='tabs'>Games</div>
            <div className='tabs'>Contact</div>
          </div>
        </div>
        <div className='main'>
          <div className='main-container'>
            <div className='game-list'>
              <div className='game-container'>
                <div className='game-image'>
                </div>
                <div className='game-title'>
                  <div>Game Title</div>
                </div>
              </div>
              <div className='game-container'>
                <div className='game-image'>
                </div>
                <div className='game-title'>
                  <div>Game Title</div>
                </div>
              </div>
              <div className='game-container'>
                <div className='game-image'>
                </div>
                <div className='game-title'>
                  <div>Game Title</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer'>
        </div>
      </div>
    )
  }
}

export default main;
