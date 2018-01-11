import React from 'react';
import Dropdown from '../../components/dropdown';
import Menu, { MenuItem } from 'rc-menu';
const DropdownButton = Dropdown.Button;

function handleButtonClick(e) {
  console.info('click left button', e);
}

function handleMenuClick(e){
  console.info('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <MenuItem>
      <span>第一个选项</span>
    </MenuItem>
    <MenuItem>
      <span>第二个选项</span>
    </MenuItem>
    <MenuItem>
      <span>第三个选项</span>
    </MenuItem>
  </Menu>
)

export default class DropView extends React.Component {
  render() {
    return (
      <div>
        <Dropdown overlay={menu}>
          <a href='#'>下拉菜单</a>
        </Dropdown>
        <DropdownButton onClick={handleButtonClick} overlay={menu} type='ghost'>
          <span>功能按钮</span>
        </DropdownButton>
      </div>
    )
  }
}
