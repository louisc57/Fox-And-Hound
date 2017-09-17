import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import './bloody.css'



class BloodyM extends React.Component {

  render () {
    return(
      <div>
        <div className='bloody-main'>
          <a className='section1'>
            Bloody Mary
          </a>
          <button>Toggle Color</button>
          <div></div>
        </div>

        <div className='bloody-mobile'>
        </div>
      </div>
    )
  }
}

export default BloodyM;
