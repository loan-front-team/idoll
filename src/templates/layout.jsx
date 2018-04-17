import React from 'react'
import { Layout, Sider, Footer, Header, Content } from 'components/Layout'

import style from './layout.css'

function onCollapse() {
  console.log('toggle sider')
  console.log(style)
}

const MainLayout = () => (
  <div id='main-container'>
    <h1 className='h1'>排版1</h1>
    <div className={style.layout_temp}>
      <Layout>
        <Sider />
        <Layout>
          <Header style={{ background: '#eee' }} />
          <Content />
          <Footer style={{ background: '#eee' }} />
        </Layout>
      </Layout>
    </div>
    <br />
    <h1 className='h1'>排版2</h1>
    <div className={style.layout_temp}>
      <Layout>
        <Header style={{ background: '#eee' }} />
        <Content />
        <Footer style={{ background: '#eee' }} />
      </Layout>
    </div>
    <br />
    <h1 className='h1'>排版3 左菜单栏可缩进</h1>
    <div className={style.layout_temp} style={{width: '900px', height: '800px'}} >
      <Layout>
        <Sider toggle foldSpan={{fold: '44', unfold: '19'}} onCollapse={onCollapse} />
        <Layout>
          <Header style={{ background: '#eee' }} />
          <Content />
          <Footer style={{ background: '#eee' }} />
        </Layout>
      </Layout>
    </div>
  </div>
)

export default MainLayout;
