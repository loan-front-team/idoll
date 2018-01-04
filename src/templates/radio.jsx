import React from 'react';

import Radio from '../../components/radio';
import Button from '../../components/button';

export default class RadioView extends React.Component {
  state = {
    disabled: true
  }
  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled
    });
  }
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>通用单选框</h1>
        <Radio />  世界很大
        <h1 className='h1'>禁用单选框</h1>
        <div>
          <Radio defaultChecked={false} disabled={true}>Disabled</Radio>
          <br />
          <Radio disabled={this.state.disabled}>Disabled</Radio>
          <div style={{ marginTop: 20 }}>
            <Button type='primary' onClick={this.toggleDisabled}>
              Toggle disabled
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

