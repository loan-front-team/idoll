import PropTypes from 'prop-types'
import React, { Component} from 'react'
// import Icon from '../icon'
import { Circle } from 'rc-progress'
import classNames from 'classnames'
import './style/index.js'

const statusColorMap = {
  normal: '#108ee9',
  exception: '#ff5500',
  success: '#87d068'
}

export default class Progress extends Component {
  static defaultProps = {
    type: 'line',
    percent: 0,
    showInfo: true,
    trailColor: '#f3f3f3',
    prefixCls: 'idoll-progress',
    size: 'default'
  };

  static propTypes = {
    status: PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
    type: PropTypes.oneOf(['line', 'circle', 'dashboard']),
    showInfo: PropTypes.bool,
    percent: PropTypes.number,
    width: PropTypes.number,
    strokeWidth: PropTypes.number,
    trailColor: PropTypes.string,
    format: PropTypes.func,
    gapDegree: PropTypes.number,
    default: PropTypes.oneOf(['default', 'small'])
  };
  render() {
    const props = this.props;
    const { prefixCls, className, percent = 0, status, trailColor, size, type, strokeWidth, width, showInfo,
      gapDegree = 0, gapPosition, ...restProps } = props;
    const progressStatus = parseInt(percent.toString(), 10) >= 100 && !('status' in props) ? 'success' : (status || 'normal');
    // let progressInfo;
    let progress;
    // const textFormatter = format || (percentNumber => `${percentNumber}%`);
    if (showInfo) {
      // let text;
      // const iconType = (type === 'circle' || type === 'dashboard') ? '' : '-circle';
      // if (progressStatus === 'exception') {
      //   text = format ? textFormatter(percent) : <Icon type={`cross${iconType}`} />;
      // } else if (progressStatus === 'success') {
      //   text = format ? textFormatter(percent) : <Icon type={`check${iconType}`} />
      // } else {
      //   text = textFormatter(percent);
      // }
      // progressInfo = <span className={`${prefixCls}-text`} >{text}</span>;
    }
    if (type === 'line') {
      const percentStyle = {
        width: `${percent}%`,
        height: strokeWidth || (size === 'small' ? 6 : 8)
      };
      progress = (<div>
        <div className={`${prefixCls}-outer`}>
          <div className={`${prefixCls}-inner`}>
            <div className={`${prefixCls}-bg`} style={percentStyle} />
          </div>
        </div>
      </div>)
    } else if (type === 'circle' || type === 'dashBoard') {
      const circleSize = width || 120;
      const circleStyle = {
        width: circleSize,
        height: circleSize,
        fontSize: circleSize * 0.15 + 6
      }
      const circleWidth = strokeWidth || 6;
      const gapPos = gapPosition || (type === 'dashBoard' && ('bottom' || 'top'));
      const gapDeg = gapDegree || (type === 'dashBoard' && 75);
      progress = (<div className={`${prefixCls}-inner`} style={circleStyle}>
        <Circle percent={percent} strokeWidth={circleWidth} trailWidth={circleWidth} strokeColor={statusColorMap[progressStatus]} trailColor={trailColor} prefixCls={prefixCls} gapDegree={gapDeg} gapPosition={gapPos} />
      </div>);
    }
    const classString = classNames(prefixCls, {
      [`${prefixCls}-${(type === 'dashboard' && 'circle') || type}`]: true,
      [`${prefixCls}-status-${progressStatus}`]: true,
      [`${prefixCls}-show-info`]: showInfo,
      [`${prefixCls}-${size}`]: size
    }, className);
    return (
      <div {...restProps} className={classString}>
        {progress}
      </div>
    )
  }
}










