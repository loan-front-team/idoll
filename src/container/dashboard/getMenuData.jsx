const menuData = [{
  name: '业务管理',
  icon: 'home',
  path: 'business',
  children: [{
    name: '版本管理',
    path: 'version-manage',
  }, {
    name: '需求管理',
    path: 'demand-manage',
  }, {
    name: '场景管理',
    path: 'scenario-manage',
  }, {
    name: '用例管理',
    path: 'user-case-manage',
  }, {
    name: '业务树',
    path: 'business-tree',
    // hideInMenu: true,
  }],
}, {
  name: '任务管理',
  icon: 'appstore-o',
  path: 'tasks',
  children: [{
    name: '执行机管理',
    path: 'server-list',
  }, {
    name: '任务管理',
    path: 'task-list',
  }],
}, {
  name: '系统管理',
  icon: 'edit',
  path: 'system',
  children: [{
    name: '用户管理',
    path: 'user-list',
  }, {
    name: '字典管理',
    path: 'basic-list',
  }],
}, {
  name: '日志管理',
  icon: 'copy',
  path: 'logo',
  authority: 'guest',
  children: [{
    name: '场景统计图',
    path: 'scenario-chart',
  }, {
    name: '用例统计图',
    path: 'user-case-chart',
  }, {
    name: '任务日志查询',
    path: 'task-logo-search',
  }, {
    name: '检查点日志',
    path: 'check-log',
  }],
}];

export function getMenuPath(parentPath = '', selfPath) {
  // console.log(`${parentPath}/${selfPath}`);
    return `${parentPath}/${selfPath}`
}


export default menuData;



