import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'

import './App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
    </div>
  </Router>
  )
export default App;
