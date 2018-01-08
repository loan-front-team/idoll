import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Collapse from './templates/collapse'
import Progress from './templates/progress'
import Select from './templates/select'
import Switch from './templates/switch';
import Alert from './templates/alert'
import Button from './templates/button'
import message from './templates/message'
import Layout from './templates/layout'
import Radio from './templates/radio'

import './App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/collapse' component={Collapse} />
      <Route exact path='/progress' component={Progress} />
      <Route exact path='/select' component={Select} />
      <Route exact path='/switch' component={Switch} />
      <Route exact path='/alert' component={Alert} />
      <Route exact path='/button' component={Button} />
      <Route exact path='/message' component={message} />
      <Route exact path='/layout' component={Layout} />
      <Route exact path='/radio' component={Radio} />
    </div>
  </Router>
)
export default App;
