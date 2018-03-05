import React from 'react';

import Tabs from 'components/tabs';
import Icon from 'components/icon';
import Radio from 'components/radio';
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.RadioGroup;
const RadioButton = Radio.RadioButton;

export default class TabsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top'
    }
  }
  callBack = (key) => {
    console.info(key);
  };
  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  };
  render() {
    const { mode } = this.state;
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
        <h1 className='h1'>有图标的标签</h1>
        <Tabs defaultActiveKey='2'>
          <TabPane tab={<span><Icon type='apple' />Tab 1</span>} key='1'>
            Tab 1
          </TabPane>
          <TabPane tab={<span><Icon type='android' />Tab 2</span>} key='2'>
            Tab 2
          </TabPane>
        </Tabs>
        <h1 className='h1'>tab页位置</h1>
        <Tabs tabPosition='left'>
          <TabPane tab='Tab 1' key='1'>Tab 1</TabPane>
          <TabPane tab='Tab 2' key='2'>Tab 2</TabPane>
          <TabPane tab='Tab 3' key='3'>Tab 3</TabPane>
        </Tabs>
        <h1 className='h1'>tab页上下，左右滑动</h1>
        <RadioGroup onChange={this.handleModeChange} value={mode} style={{marginBottom: 8}}>
          <RadioButton value='top'>Horizontal</RadioButton>
          <RadioButton value='left'>Vertical</RadioButton>
        </RadioGroup>
        <Tabs defaultActiveKey='1' tabPosition={mode} style={{height: 220}}>
          <TabPane tab='Tab 1' key='1'>Tab 1</TabPane>
          <TabPane tab='Tab 2' key='2'>Tab 2</TabPane>
          <TabPane tab='Tab 3' key='3'>Tab 3</TabPane>
          <TabPane tab='Tab 4' key='4'>Tab 4</TabPane>
          <TabPane tab='Tab 5' key='5'>Tab 5</TabPane>
          <TabPane tab='Tab 6' key='6'>Tab 6</TabPane>
          <TabPane tab='Tab 7' key='7'>Tab 7</TabPane>
          <TabPane tab='Tab 8' key='8'>Tab 8</TabPane>
          <TabPane tab='Tab 9' key='9'>Tab 9</TabPane>
          <TabPane tab='Tab 10' key='10'>Tab 10</TabPane>
          <TabPane tab='Tab 11' key='11'>Tab 11</TabPane>
          <TabPane tab='Tab 12' key='12'>Tab 12</TabPane>
          <TabPane tab='Tab 13' key='13'>Tab 13</TabPane>
          <TabPane tab='Tab 14' key='14'>Tab 14</TabPane>
        </Tabs>
      </div>
    )
  }
}
