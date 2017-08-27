import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../images/foxandhound-logo.png';
import './header.css';


class Header extends React.Component {

  getOverlayStyle() {
      return {
          display: 'none',
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          zIndex: '100'
      };
  };

  mouseOver() {
    // this.overlay.style.display = 'block';
  };
  mouseLeaves() {
    // this.overlay.style.display = 'none';
  };

  render () {
    return(
      <div>
        <div className='header'>
          <div className='tabs'>
            <div className='logo-container'>
              <Link to='/'><img src={logo}/></Link>
            </div>
          </div>
          <li className='tabs'><NavLink to='/' exact={true} className='style' activeClassName='selected'>Home</NavLink></li>
          <li className='tabs'><NavLink to='/team' className='style' activeClassName='selected'>Team</NavLink></li>
          <div className='tabs hover'  onMouseEnter={this.mouseOver} onMouseLeave={this.mouseLeaves}>
            Projects
            <p className='overlay' ref="overlay">
              <div className='games'>

              </div>
            </p>
          </div>
          <li className='tabs'><NavLink to='/contact' className='style' activeClassName='selected'>Contact Us</NavLink></li>
        </div>

        <div className='header-mobile'>
          <div className='mheader1'>
            <div className='mheaderline'></div>
            <div className='mlogo-container'><NavLink to='/'><img src={logo} activeClassName='m-selected'/></NavLink></div>
            <div className='mheaderline'></div>
          </div>
          <div className='mheader2'>
            <div className='mtabs '><NavLink to='/' exact={true} className='style' activeClassName='selected'>Home</NavLink></div>
            <div className='mtabs '><NavLink to='/team' className='style' activeClassName='selected'>Team</NavLink></div>
            <div className='mtabs '>Projects</div>
            <div className='mtabs '><NavLink to='/contact' className='style' activeClassName='selected'>Contact Us</NavLink></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;

//style={this.getOverlayStyle()}
