import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Layout, Sider, Header, Content, Footer } from '../components/layout'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Layout>
    <Sider span={10} toggle={1} />
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  </Layout>,
  document.getElementById('root'));
registerServiceWorker();
