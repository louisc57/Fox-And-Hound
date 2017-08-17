import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import TeamPage from './components/TeamPage';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
      <div>
        <TeamPage/>
      </div>
    );
  }
}

export default App;
