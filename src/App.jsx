import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Collapse from './templates/collapse'
import Progress from './templates/progress'
import Select from './templates/select'
import Layout from './templates/layout'

import './App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/collapse' component={Collapse} />
      <Route exact path='/progress' component={Progress} />
      <Route exact path='/select' component={Select} />
      <Route exact path='/layout' component={Layout} />
    </div>
  </Router>
)
export default App;
