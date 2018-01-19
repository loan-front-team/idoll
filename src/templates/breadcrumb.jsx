import React from 'react';
import Breadcrumb from 'components/breadcrumb/index';
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import Icon from 'components/icon/index';
import Alert from 'components/alert/index';
import 'components/breadcrumb/style/index'

export default class BreadcrumBreadcrumView extends React.Component {
  render() {
    const Apps = () => (
      <ul className='app-list'>
        <li>
          <Link to='/apps/1'>Application1</Link>：<Link to='/apps/1/detail'>Detail</Link>
        </li>
        <li>
          <Link to='/apps/2'>Application2</Link>：<Link to='/apps/2/detail'>Detail</Link>
        </li>
      </ul>
    );

    const breadcrumbNameMap = {
      '/apps': 'Application List',
      '/apps/1': 'Application1',
      '/apps/2': 'Application2',
      '/apps/1/detail': 'Detail',
      '/apps/2/detail': 'Detail'
    };

    const Home = withRouter((props) => {
      const { location } = props;
      const pathSnippets = location.pathname.split('/').filter(i => i);
      const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
          <Breadcrumb.Item key={url}>
            <Link to={url}>
              {breadcrumbNameMap[url]}
            </Link>
          </Breadcrumb.Item>
        );
      });
      const breadcrumbItems = [(
        <Breadcrumb.Item key='home'>
          <Link to='/'>Home</Link>
        </Breadcrumb.Item>
      )].concat(extraBreadcrumbItems);
      return (
        <div className='demo'>
          <div className='demo-nav'>
            <Link to='/'>Home</Link>
            <Link to='/apps'>Application List</Link>
          </div>
          <Switch>
            <Route path='/apps' component={Apps} />
            <Route render={() => <span>Home Page</span>} />
          </Switch>
          <Alert style={{ margin: '16px 0' }} message='Click the navigation above to switch:' />
          <Breadcrumb>
            {breadcrumbItems}
          </Breadcrumb>
        </div>
      );
    });
    return (
      <div id='main-container'>
        <h1 className='h1'>基本的面包屑</h1>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item><a href='#'>Application Center</a></Breadcrumb.Item>
          <Breadcrumb.Item><a href='#'>Application List</a></Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className='h1'>带图标的面包屑</h1>
        <Breadcrumb>
          <Breadcrumb.Item href=''>
            <Icon type='home' />
          </Breadcrumb.Item>
          <Breadcrumb.Item href=''>
            <Icon type='user' />
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
              Application
          </Breadcrumb.Item>
        </Breadcrumb>
        <h1 className='h1'>react-router@4面包屑</h1>
        <Router>
          <Home />
        </Router>
      </div>
    )
  }
}
