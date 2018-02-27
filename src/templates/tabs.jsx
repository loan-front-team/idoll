import React from 'react';

import Tabs from 'components/tabs';
const TabPane = Tabs.TabPane;

export default class TabsView extends React.Component {
  callBack = (key) => {
    console.info(key);
  }
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>通用标签页</h1>
        <Tabs defaultActiveKey='2' onChange={this.callBack}>
          <TabPane tab='Tab 1' key='1'>Content of Tab Pane 1</TabPane>
          <TabPane tab='Tab 2' key='2'>Content of Tab Pane 2</TabPane>
          <TabPane tab='Tab 3' key='3'>Content of Tab Pane 3</TabPane>
        </Tabs>
        <br />
        <br />
        <h1 className='h1'>卡片式标签页</h1>
        <Tabs type='card' onChange={this.callBack}>
          <TabPane tab='Tab 1' key='1'>Content of Tab Pane 1</TabPane>
          <TabPane tab='Tab 2' key='2'>Content of Tab Pane 2</TabPane>
          <TabPane tab='Tab 3' key='3'>Content of Tab Pane 3</TabPane>
        </Tabs>
        <br />
        <br />
        <h1 className='h1'>卡片式标签页容器</h1>
        <Tabs type='card'>
          <TabPane tab='Tab Title 1' key='1'>
            <p>Content of Tab Pane 1</p>
            <p>Content of Tab Pane 1</p>
            <p>Content of Tab Pane 1</p>
          </TabPane>
          <TabPane tab='Tab Title 2' key='2'>
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
          </TabPane>
          <TabPane tab='Tab Title 3' key='3'>
            <p>Content of Tab Pane 3</p>
            <p>Content of Tab Pane 3</p>
            <p>Content of Tab Pane 3</p>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
