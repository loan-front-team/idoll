import React from 'react';

import Input from '../../components/input';

// const InputGroup = Input.Group
const Textarea = Input.Textarea

export default () => (
  <div id='main-container'>
    <h1 className='h1'>基本使用输入框</h1>
    <Input type='text' placeholder='Basic usage' />
    <h1 className='h1'>前置／后置</h1>
    <Input type='text' addonBefore='姓名' placeholder='黄晓明' addonAfter='你好' />
    <h1 className='h1'>前缀／后缀</h1>
    <h1 className='h1'>文本框</h1>
    <Textarea />
    <h1 className='h1'>高度可变文本框(设置高度范围为2-6)</h1>
    <Textarea autosize={{minRows: 2, maxRows: 6}} />
  </div>
	)
