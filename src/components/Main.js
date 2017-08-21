import React, { PropTypes } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import TeamPage from './TeamPage';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/team' component={TeamPage}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)
export default Main;
