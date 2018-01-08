import React from 'react';
import Button from '../../components/button';
import message from '../../components/message/index';

const info = () => {
  message.info('This is a normal message');
};

const success = () => {
  message.success('This is a message of success');
};

const warning = () => {
  message.success('This is a message of warning');
};

const loading = () => {
  const hide = message.loading('Action in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

export default class messageView extends React.Component {
  render() {
    return (
      <div id='main-container'>
        <Button type='primary' onClick={info}>Customized display duration</Button>
        <h1 className='h1'>
          <Button type='default' onClick={success}>Success</Button>
        </h1>
        <h1 className='h1'>
          <Button type='dashed' onClick={warning}>Warning</Button>
        </h1>
        <h1 className='h1'>
          <Button type='danger' onClick={loading}>Display a loading indicator</Button>
        </h1>
      </div>
    )
  }
}
