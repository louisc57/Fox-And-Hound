import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../images/foxandhound-logo.png';
import './header.css';

class Header extends React.Component {
  render () {
    return(
      <div className='header'>
        <div className='tabs'>
          <div className='logo-container'>
            <img className='header-logo' src={logo}/>
          </div>
        </div>
        <li className='tabs'><NavLink to='/' exact={true} className='style' activeClassName='selected'>Home</NavLink></li>
        <li className='tabs'><NavLink to='/team' className='style' activeClassName='selected'>Team</NavLink></li>
        <div className='tabs' >Projects</div>
        <li className='tabs'><NavLink to='/contact' className='style' activeClassName='selected'>Contact Us</NavLink></li>
      </div>
    )
  }
}

export default Header;
