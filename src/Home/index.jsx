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
      <div className='widget-item'>
        <NavLink className='widget-wrap' to='/switch'>
          <div className='name'>switch开关</div>
          <div className='info'>switch</div>
        </NavLink>
      </div>
      <div className='widget-item'>
        <NavLink className='widget-wrap' to='/input'>
          <div className='name'>输入框</div>
          <div className='info'>input</div>
        </NavLink>
      </div>
      <div className='widget-item' >
        <NavLink className='widget-wrap' to='/icon'>
          <div className='name'>图标</div>
          <div className='info'>Icon</div>
        </NavLink>
      </div>
      <div className='widget-item' >
        <NavLink className='widget-wrap' to='/pagination'>
          <div className='name'>分页</div>
          <div className='info'>Pagination</div>
        </NavLink>
      </div>
      <div className='widget-item' >
        <NavLink className='widget-wrap' to='/tag'>
          <div className='name'>Tag标签</div>
          <div className='info'>tag</div>
        </NavLink>
      </div>
      <div>
        <NavLink className='widget-wrap' to='/modal'>
          <div className='name'>对话框</div>
          <div className='info'>Modal</div>
        </NavLink>
      </div>
      <div>
        <NavLink className='widget-wrap' to='/checkbox'>
          <div className='name'>多选按钮</div>
          <div className='info'>checkbox</div>
        </NavLink>
      </div>
    </div>
  );
}
export default Home;
