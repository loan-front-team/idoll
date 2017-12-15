import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Layout, Sider, Header, Content, Footer } from '../components/layout'
import Button from '../components/button/button.jsx'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Button type='primary'>Primary</Button>
    <Button>Default</Button>
    <Button type='dashed'>Dashed</Button>
    <Button type='danger'>Danger</Button>
    <br />
    <Button type='primary' ghost>Primary</Button>
    <Button ghost>Default</Button>
    <Button type='dashed' ghost>Dashed</Button>
    <Button type='danger' ghost>Danger</Button>
  </div>
  , document.getElementById('root'));
registerServiceWorker();
