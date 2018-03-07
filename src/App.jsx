import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Dropdown from 'templates/dropdown'
import Checkbox from 'templates/checkbox'
import Collapse from 'templates/collapse'
import Progress from 'templates/progress'
import Select from 'templates/select'
import Switch from 'templates/switch'
import Alert from 'templates/alert'
import Button from 'templates/button'
import Input from 'templates/input'
import message from 'templates/message'
import Layout from 'templates/layout'
import Radio from 'templates/radio'
import Icon from 'templates/icon'
import Modal from 'templates/modal'
import Breadcrumb from 'templates/breadcrumb'
import Index from './HomeIndex'
import Tag from 'templates/tag';
import TimePicker from 'templates/timepicker';
import DatePicker from 'templates/date-picker';
import Tooltip from 'templates/tooltip';
import AutoComplete from 'templates/auto-complete';
import Spin from 'templates/spin';
import Popover from 'templates/popover';
import Divider from 'templates/divider';
import Badge from 'templates/badge';


import './App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Index} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/collapse' component={Collapse} />
      <Route exact path='/progress' component={Progress} />
      <Route exact path='/select' component={Select} />
      <Route exact path='/switch' component={Switch} />
      <Route exact path='/alert' component={Alert} />
      <Route exact path='/button' component={Button} />
      <Route exact path='/input' component={Input} />
      <Route exact path='/message' component={message} />
      <Route exact path='/layout' component={Layout} />
      <Route exact path='/radio' component={Radio} />
      <Route exact path='/icon' component={Icon} />
      <Route exact path='/dropdown' component={Dropdown} />
      <Route exact path='/tag' component={Tag} />
      <Route exact path='/modal' component={Modal} />
      <Route exact path='/checkbox' component={Checkbox} />
      <Route exact path='/breadcrumb' component={Breadcrumb} />
      <Route exact path='/tooltip' component={Tooltip} />
      <Route exact path='/timepicker' component={TimePicker} />
      <Route exact path='/datepicker' component={DatePicker} />
      <Route exact path='/autocomplete' component={AutoComplete} />
      <Route exact path='/spin' component={Spin} />
      <Route exact path='/popover' component={Popover} />
      <Route exact path='/divider' component={Divider} />
      <Route exact path='/badge' component={Badge} />
    </div>
  </Router>
)
export default App;
