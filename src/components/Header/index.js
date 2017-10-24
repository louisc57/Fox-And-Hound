import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import logo from '../images/foxandhound-logo.png';
import './header.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {} ,
      dot: {}
    };
    this.bloodyMary = this.bloodyMary.bind(this);
  }

  bloodyMary() {
    this.setState({
      style: {
        backgroundColor: 'black',
        color: 'red'
      },
      dot: {
        backgroundColor: 'red',
      },
      bloodytext: {
        color: 'white'
      },
      classmain: 'bloodystyle',
      classmobile: 'bloodystylemobile'
    });
  }
  other() {
    this.setState({
      style: { backgroundColor: 'white' },
      dot: {backgroundColor: 'black'},
      bloodytext: {color: 'black'},
      classmain: 'tabs',
      classmobile: 'style'
    });
  }
  render () {
    return(
      <div>
        <div className='header' style={this.state.style}>
          <div className='tabs' style={this.state.style}>
            <div className='logo-container'>
              <Link to='/' onClick={this.other}><img src={logo}/></Link>
            </div>
          </div>
          <li className='tabs' style={this.state.style}><NavLink to='/'     onClick={this.other} exact={true} className={this.state.classmain} activeClassName='selected'>Home</NavLink></li>
          <li className='tabs' style={this.state.style}><NavLink to='/team' onClick={this.other} className={this.state.classmain}  activeClassName='selected'>Team</NavLink></li>

          <div className='dropdown'>
            <div className='tabs' style={this.state.style}><NavLink to='/projects/' className={this.state.classmain} id="deadlink" activeClassName='project-bloody-selected'>Projects</NavLink></div>
            <div className='dropdown-content' style={this.state.style}>
              <a>
                <p className='dropdown-li' style={this.state.dot} >
                </p>
                <NavLink to='/projects/bloodymary' onClick={this.bloodyMary} exact={true} activeClassName='bloodyselected' style={this.state.bloodytext} className='dropdown-entry'>
                  Bloody Mary
                </NavLink>
              </a>
            </div>
          </div>

          <li className='tabs' style={this.state.style}><NavLink to='/contact' onClick={this.other} className='style' className={this.state.classmain} activeClassName='selected'>Contact Us</NavLink></li>
        </div>

        <div className='header-mobile' style={this.state.style}>
          <div className='mheader1'>
            <div className='mheaderline'></div>
            <div className='mlogo-container'><NavLink to='/' onClick={this.other}><img src={logo} activeClassName='m-selected'/></NavLink></div>
            <div className='mheaderline'></div>
          </div>
          <div className='mheader2' style={this.state.style}>
            <div className='mtabs '><NavLink to='/' onClick={this.other} exact={true} className={this.state.classmobile} activeClassName='selected'>Home</NavLink></div>
            <div className='mtabs ' style={this.state.style}><NavLink to='/team' onClick={this.other} className={this.state.classmobile} activeClassName='selected'>Team</NavLink></div>

              <div className='dropdown'>
                <div className='mtabs'>
                  <NavLink to='/projects/' onClick='return none' class="disabled" className='style projectstab' activeClassName='selected'>
                    <a href="javascript:void(0);" className={this.state.classmobile}>Projects
                    </a>
                  </NavLink>
                </div>
                  <div className='dropdown-content' style={this.state.style}>
                    <div>
                      <a>
                        <div className='dropdown-li' style={this.state.dot}>
                        </div>
                        <NavLink to='/projects/bloodymary' onClick={this.bloodyMary} exact={true} style={this.state.bloodytext} activeClassName='bloodyselected' className='dropdown-entry'>
                          Bloody Mary
                        </NavLink>
                      </a>
                    </div>
                  </div>
              </div>

            <div className='mtabs '><NavLink to='/contact' className={this.state.classmobile} onClick={this.other} activeClassName='selected'>Contact Us</NavLink></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
