import React from 'react';
import AutoComplete from 'components/auto-complete/index';

const Option = AutoComplete.Option;

export default class Complete extends React.Component {
  state = {
    result: [],
  }

  handleSearch = (value) => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({ result });
  }

  render() {
    const { result } = this.state;
    const children = result.map((email) => {
      return <Option style={{ width: 240 }} key={email}>{email}</Option>;
    });
    return (
      <div id='main-container'>
        <h1 className='h1'>自动完成</h1>
        <AutoComplete
          style={{ width: 200 }}
          onSearch={this.handleSearch}
          placeholder='input here'
        >
          {children}
        </AutoComplete>
      </div>
    );
  }
}
