import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Layout, Sider, Header, Content, Footer } from '../components/layout'
// import Button from '../components/button/button.jsx'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Layout>
    <Sider />
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  </Layout>,
  document.getElementById('root'));
registerServiceWorker();
