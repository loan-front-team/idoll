import React from 'react'
import { Layout, Sider, Footer, Header, Content } from '../../components/Layout'

import './layout.css'

const MainLayout = () => (
  // <div>
  //   <Layout>
  //     <Sider />
  //     <Layout>
  //       <Header />
  //       <Content />
  //       <Footer />
  //     </Layout>
  //   </Layout>
  // </div>
  <div>
    <h1>排版1</h1>
    <div className='layout_temp'>
      <Layout>
        <Sider />
        <Layout>
          <Header />
          <Content />
          <Footer />
        </Layout>
      </Layout>
    </div>
    <br />
    <h1>排版2</h1>
    <div className='layout_temp'>
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </div>
    <br />
    <h1>排版3 左菜单栏可缩进</h1>
    <div className='layout_temp'>
      <Layout>
        <Sider toogle={1} />
        <Layout>
          <Header />
          <Content />
          <Footer />
        </Layout>
      </Layout>
    </div>
  </div>
)

export default MainLayout;
