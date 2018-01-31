import React from 'react';
import Dropdown from 'components/dropdown';
import Menu, { MenuItem, SubMenu } from 'rc-menu';
import Button from 'components/button'
// import Icon from 'components/icon'
import './dropdown.less'
const DropdownButton = Dropdown.Button;

function handleButtonClick(e) {
  console.info('click left button', e);
}

function handleMenu1Click(e) {
  console.info('click', e);
}

const menu = (
  <Menu onClick={handleMenu1Click}>
    <MenuItem key='1'>第一个选项111111</MenuItem>
    <MenuItem key='2'>第二个选项222222</MenuItem>
    <MenuItem key='3'>第三个选项333333</MenuItem>
  </Menu>
)
const menu1 = (
  <Menu onClick={handleMenu1Click}>
    <MenuItem key='1.1'>第一个选项</MenuItem>
    <MenuItem key='1.2'>第二个选项</MenuItem>
    <SubMenu title='子菜单'>
      <MenuItem key='1.3'>第三个选项</MenuItem>
      <MenuItem key='1.4'>第四个选项</MenuItem>
    </SubMenu>
  </Menu>
)


export default class DropView extends React.Component {
  state = {
    visible: false
  };
  handleMenuClick = (e) => {
    if (e.key === '2.3') {
      this.setState({
        visible: false
      });
    }
  }
  handleVisibleChange = (flag) => {
    this.setState({
      visible: flag
    });
  }
  render() {
    const menu2 = (
      <Menu onClick={this.handleMenuClick}>
        <MenuItem key='2.1'>Clicking me will not close the menu.</MenuItem>
        <MenuItem key='2.2'>Clicking me will not close the menu also.</MenuItem>
        <MenuItem key='2.3'>Clicking me will close the menu</MenuItem>
      </Menu>
    );
    return (
      <div id='main-container'>
        <h1 className='h1'>鼠标点击，显示菜单</h1>
        <Dropdown overlay={menu} trigger={['click']} onClick={handleButtonClick}>
          <Button className='button-default'>
            按钮
          </Button>
        </Dropdown>
        <br />
        <br />
        <br />
        <br />
        <h1 className='h1'>鼠标移入，显示菜单</h1>
        <DropdownButton overlay={menu1}>
          功能按钮
        </DropdownButton>
        <br />
        <br />
        <br />
        <br />
        <h1 className='h1'>在下拉列表中点击内容关闭菜单</h1>
        <Dropdown overlay={menu2} onVisibleChange={this.handleVisibleChange} visible={this.state.visible} >
          <span className='dropdown-span'>
            <a href='#' className='dropdown-a'>
              Hover me
            </a>
          </span>
        </Dropdown>
        <br />
        <br />
        <br />
        <br />
        <h1 className='h1'>下拉菜单展示位置</h1>
        <Dropdown overlay={menu} placement='bottomLeft'>
          <Button>botLeft</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement='bottomCenter'>
          <Button>botCenter</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement='bottomRight'>
          <Button>botRight</Button>
        </Dropdown>
        <br />
        <Dropdown overlay={menu} placement='topLeft'>
          <Button>topLeft</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement='topCenter'>
          <Button>topCenter</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement='topRight'>
          <Button>topRight</Button>
        </Dropdown>
      </div>
    )
  }
}