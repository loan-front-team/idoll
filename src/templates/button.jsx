import React from 'react';

import Button from 'components/button';

export default () => (
  <div id='main-container'>
    <h1 className='h1'>通用按钮</h1>
    <Button type='primary'>Primary</Button>
    <h1 className='h1'>次要按钮</h1>
    <Button>Default</Button>
    <Button disabled>Default</Button>
    <Button type='dashed'>Dashed</Button>
    <Button type='danger'>Danger</Button>
    <h1 className='h1'>图标按钮</h1>
    <Button icon='search'>Search</Button>
    <h1 className='h1'>文字按钮</h1>
    <Button shape='circle' icon='plus' /><a href='#'>文字按钮</a>
    <h1 className='h1'>特定按钮</h1>
    <h1 className='h1'>幽灵按钮</h1>
    <div className='youling'>
      <Button type='primary' ghost>Primary</Button>
      <Button ghost>Default</Button>
      <Button type='dashed' ghost>Dashed</Button>
      <Button type='danger' ghost>danger</Button>
    </div>
  </div>
	)
