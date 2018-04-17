import React from 'react';
import { Layout, Sider, Footer, Header, Content } from 'components/Layout';

import Menu from 'components/menu';
import Icon from 'components/icon';
import menuData, {getMenuPath} from './getMenuData';
import './dashboard.less';

const SubMenu = Menu.SubMenu;
const defaultOpenMenu = menuData[0].path;

export default class Dashboard extends React.Component {
  state = {
    current: 'platform',
    defaultOpenKeys: [defaultOpenMenu]
  }
  handleClick = (e) => {
    const currentPath = getMenuPath(e.keyPath[1], e.keyPath[0]);
    // console.log('currentPath', currentPath);
    this.props.history.push(currentPath);
    this.setState({
      current: e.key,
    });
  }

	render() {
    const submenu = menuData.map((menu) => {
      return (
        <SubMenu key={menu.path} title={<span><Icon type={menu.icon} />{menu.name}</span>}>
          {
            menu.children.map((item) => (
              <Menu.Item key={item.path}>{item.name}</Menu.Item>
              )
            )
          }
        </SubMenu>
              )
    });
    const {current, defaultOpenKeys} = this.state;
		return (
  <div className='dashboard'>
    <Layout>
      <Sider toggle foldSpan={{fold: '1', unfold: '19'}} onCollapse={onCollapse}>
        <Menu
          theme={'light'}
          onClick={this.handleClick}
          defaultOpenKeys={defaultOpenKeys}
          selectedKeys={[current]}
          mode='inline'
          >
          {submenu}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#eee' }} />
        <Content />
        <Footer style={{ background: '#eee' }} />
      </Layout>
    </Layout>
  </div>
		);
	}
}

function onCollapse() {
  console.log('toggle sider')
}
