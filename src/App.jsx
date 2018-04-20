import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import DboxRouter from './DboxRouter';
import Login from 'container/login';
import Dashboard from 'container/dashboard';
import NotFound from 'container/NotFound';
// import './App.css';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        <DboxRouter />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)
export default App;
