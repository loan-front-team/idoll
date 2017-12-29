import React from 'react';
import Alert from '../../components/alert/index';

const onClose = function (e) {
  console.log(e, 'I was closed.');
};

export default class AlertView extends React.Component {
  render() {
    return (
      <div id="main-container">
        <Alert
        message="warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
        type="warning"
        closable
        onClose={onClose}
        />
        <Alert 
          message="Error Text"
          description="Error Description Error Description Error Description Error Description Error Description Error Description"
          type="error"
          closeable
          onClose={onClose}
        />
      </div>
    )
  }
}