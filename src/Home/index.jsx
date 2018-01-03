import React from 'react'
import { NavLink } from 'react-router-dom'

import './style'

function Home() {
  	return (
    <div className='widget-list'>
      <div className='header'><h1>Dbox UI</h1></div>
      <div className='widget-item'>
        <NavLink className='widget-wrap' to='/layout'>
          <div className='name'>布局</div>
          <div className='info'>layout</div>
        </NavLink>
      </div>
      <div className='widget-item'>
        <NavLink className='widget-wrap' to='/collapse'>
          <div className='name'>折叠面板</div>
          <div className='info'>collapse</div>
        </NavLink>
      </div>
      <div className='widget-item'>
        <NavLink className='widget-wrap' to='/select'>
          <div className='name'>选择器</div>
          <div className='info'>select</div>
        </NavLink>
      </div>
      <div className='widget-item'>
        <NavLink className='widget-wrap' to='/button'>
          <div className='name'>按钮</div>
          <div className='info'>button</div>
        </NavLink>
      </div>
      <div className='widget-item'>
        <NavLink className='widget-wrap' to='/input'>
          <div className='name'>输入框</div>
          <div className='info'>input</div>
        </NavLink>
      </div>
    </div>
  			);
}
export default Home;
