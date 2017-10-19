import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import './bloody.css';
import { ReactCSSTransitionGroup } from 'react-transition-group'; // ES6
var $ = require('jquery');



class BloodyM extends React.Component {

  render(){
    return(
      <div>
        <div className='bloody-main'>
          <a className='section1'>
            Bloody Mary
          </a>
          <div className='section2'>Coming Soon</div>

        </div>
        

        <div className='bloody-mobile'>
        </div>
      </div>
    )
    document.getElementById('tId').style.width = "30%";
  }
}

export default BloodyM;
