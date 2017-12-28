import React from 'react';

import Collapse from '../../components/collapse';


const Panel = Collapse.Panel;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden'
};

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export default class CollapseView extends React.Component {
	render() {
		return (
  <div id='main-container'>
    <h1 className='h1'>折叠面板</h1>
    <Collapse defaultActiveKey={['1']} onChange={callback}>
      <Panel header='This is panel header 1' key='1' >
        <p>{text}</p>
      </Panel>
      <Panel header='This is panel header 2' key='2'>
        <p>{text}</p>
      </Panel>
      <Panel header='This is panel header 3' key='3' disabled>
        <p>{text}</p>
      </Panel>
    </Collapse>
    <h1 className='h1'>简洁风格</h1>
    <Collapse defaultActiveKey={['1']} bordered={false}>
      <Panel header='This is panel header 1' key='1'>
        {text}
      </Panel>
      <Panel header='This is panel header 2' key='2'>
        {text}
      </Panel>
      <Panel header='This is panel header 3' key='3'>
        {text}
      </Panel>
    </Collapse>
    <h1 className='h1'>自定义</h1>
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header='This is panel header 1' key='1' style={customPanelStyle}>
        <p>{text}</p>
      </Panel>
      <Panel header='This is panel header 2' key='2' style={customPanelStyle}>
        <p>{text}</p>
      </Panel>
      <Panel header='This is panel header 3' key='3' style={customPanelStyle}>
        <p>{text}</p>
      </Panel>
    </Collapse>
  </div>
			)
		}
}


