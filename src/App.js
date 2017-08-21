import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main.js';

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;
