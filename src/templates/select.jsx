import React from 'react'

import Select from '../../components/select'
const Option = Select.Option;

const select = () => (
  <div>
    <h1>普通下拉框</h1>
    <Select defaultValue='jane' style={{ width: 120, margin: 30 }}>
      <Option value='jane'>jane</Option>
      <Option value='mick'>mick</Option>
    </Select>
    <br />
    <h1>搜索下拉框</h1>
    <Select showSearch style={{ width: 160, margin: 30 }} placeholder='Select a person' >
      <Option value='jane'>jane</Option>
      <Option value='mick' disabled >mick</Option>
    </Select>
    <br />
    <h1>多选下拉框</h1>
    <Select multiple style={{ width: 160, margin: 30 }} placeholder='Select a person' >
      <Option value='jane'>jane</Option>
      <Option value='jack'>jack</Option>
      <Option value='mick' >mick</Option>
    </Select>
  </div>
)

export default select;
