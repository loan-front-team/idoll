import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Layout, Sider, Header, Content, Footer } from '../components/layout'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Layout>
    <Sider span={4} toggle={1} />
    <Layout>
      <Header headerType='seat' />
      <Content />
      <Footer />
    </Layout>
  </Layout>,
  document.getElementById('root'));
registerServiceWorker();
