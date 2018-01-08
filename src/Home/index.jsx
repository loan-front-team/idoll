import React from 'react'
import { NavLink } from 'react-router-dom'

import './style'

function Home() {
  	return (
    <div>
      <NavLink className='nav' to='/layout' activeStyle={{ fontWeight: 'bold', color: 'red' }}>layout</NavLink>
      <NavLink className='nav' to='/collapse' activeStyle={{ fontWeight: 'bold', color: 'red' }}>collapse</NavLink>
      <NavLink className='nav' to='/select' activeStyle={{ fontWeight: 'bold', color: 'red' }}>select</NavLink>
      <NavLink className='nav' to='/button' activeStyle={{ fontWeight: 'bold', color: 'red' }}>button</NavLink>
      <NavLink className='nav' to='/alert' activeStyle={{ fontWeight: 'bold', color: 'red' }}>alert</NavLink>
      <NavLink className='nav' to='/radio' activeStyle={{ fontWeight: 'bold', color: 'red' }}>radio</NavLink>
      <NavLink className='nav' to='/progress' activeStyle={{ fontWeight: 'bold', color: 'red' }}>progress</NavLink>
      <NavLink className='nav' to='/message' activeStyle={{ fontWeight: 'bold', color: 'red' }}>message</NavLink>
    </div>
  	);
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
        <NavLink className='widget-wrap' to='/alert'>
          <div className='name'>警示框</div>
          <div className='info'>alert</div>
        </NavLink>
      </div>
      <div className='widget-item'>
        <NavLink className='widget-wrap' to='/radio' activeStyle={{ fontWeight: 'bold', color: 'red' }}>
          <div className='name'>单选框</div>
          <div className='info'>radio</div>
        </NavLink>
      </div>
      <div className='widget-item'>
        <NavLink className='widget-wrap' to='/progress'>
          <div className='name'>进度条</div>
          <div className='info'>progress</div>
        </NavLink>
      </div>
    <div className='widget-item'>
        <NavLink className='widget-wrap' to='/message'>
          <div className='name'>信息提示</div>
          <div className='info'>message</div>
        </NavLink>
      </div>
    </div>
);
}
export default Home;
