import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Layout, Sider, Header, Content, Footer } from '../components/layout'
import Button from '../components/button/button.jsx'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Button className='btn' type='primary' size='small'>按钮</Button>,
  document.getElementById('root'));
registerServiceWorker();
