import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import MainLayout from './templates/layout'
import Collapse from './templates/collapse'
import Select from './templates/select'
import Alert from './templates/alert'
import Button from './templates/button'
import message from './templates/message'

import './App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/layout' component={MainLayout} />
      <Route exact path='/collapse' component={Collapse} />
      <Route exact path='/select' component={Select} />
      <Route exact path='/alert' component={Alert} />
      <Route exact path='/button' component={Button} />
      <Route exact path='/message' component={message} />
    </div>
  </Router>
  )
export default App;
