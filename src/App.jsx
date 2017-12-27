import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
<<<<<<< HEAD:src/App.jsx
import Collapse from './templates/collapse'
=======
import Select from '../templates/select'
>>>>>>> 52086fcd2c0f561473814a30e6b63fa212263a14:src/App.js

import './App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
<<<<<<< HEAD:src/App.jsx
      <Route exact path='/collapse' component={Collapse} />
=======
      <Route exact path='/select' component={Select} />
>>>>>>> 52086fcd2c0f561473814a30e6b63fa212263a14:src/App.js
    </div>
  </Router>
  )
export default App;
