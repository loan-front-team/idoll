import React from 'react';
import Progress from '../../components/progress';

export default class ProgressView extends React.Component {
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>线条型进度条</h1>
        <Progress type='line' percent={30} />
        <Progress type='line' percent={50} status='active' />
        <Progress type='line' percent={70} status='exception' />
        <Progress type='line' percent={100} />
        <Progress type='line' percent={30} showInfo={false} />
        <h1 className='h1'>圆形型进度条</h1>
        <Progress type='circle' percent={50} status='active' gapPosition='bottom' />
        <Progress type='circle' percent={70} status='exception' gapPosition='bottom' />
        <Progress type='circle' percent={100} gapPosition='left' />
        <h1 className='h1'>仪表盘型进度条</h1>
        <Progress type='dashboard' percent={100} status='active' gapPosition='top' />
        <Progress type='dashboard' percent={100} status='exception' gapPosition='bottom' />
        <Progress type='dashboard' percent={100} gapPosition='left' />
      </div>
    )
  }
}

