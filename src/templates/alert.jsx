import React from 'react';
import Alert from '../../components/alert/index';

const onClose = function (e) {
  console.log(e, 'I was closed.');
};

export default class AlertView extends React.Component {
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>带有关闭按钮的警告提示</h1>
        <Alert
          message='Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text'
          type='warning'
          closable
          onClose={onClose}
        />
        <Alert
          message='Error Text'
          description='Error Description Error Description Error Description Error Description Error Description Error Description'
          type='error'
          closable
          onClose={onClose}
        />
        <h1 className='h1'>带有图标的警告提示</h1>
        <Alert
          message='Warning'
          description='This is a warning notice about copywriting.'
          type='warning'
          showIcon
        />
        <Alert
          message='Informational Notes'
          description='Additional description and informations about copywriting.'
          type='info'
          showIcon
        />
        <Alert
          message='Error'
          description='This is an error message about copywriting.'
          type='error'
          showIcon
        />
        <h1 className='h1'>含有輔助性文字的警告提示</h1>
        <Alert
          message='Info Text'
          description='Info Description Info Description Info Description Info Description'
          type='info'
        />
        <Alert
          message='Warning Text'
          description='Warning Description Warning Description Warning Description Warning Description'
          type='warning'
        />
      </div>
    )
  }
}
