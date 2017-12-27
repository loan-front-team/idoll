import React from 'react';
import Progress from '../../components/progress';

export default class ProgressView extends React.Component {
  render() {
    return (
      <div>
        <Progress type='line' percent={30} />
        <Progress type='line' percent={50} status='active' />
        <Progress type='line' percent={70} status='exception' />
        <Progress type='line' percent={100} />
        <Progress type='line' percent={30} showInfo={false} />
        <Progress type='circle' percent={50} status='active' />
        <Progress type='circle' percent={70} status='exception' />
        <Progress type='circle' percent={100} />
      </div>
    )
  }
}

