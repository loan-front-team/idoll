import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Layout, Sider, Header, Content, Footer } from '../components/layout'
// import Button from '../components/button/button.jsx'
import Icon from '../components/icon/index.jsx'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Icon type='home' />,
  document.getElementById('root'));
registerServiceWorker();
