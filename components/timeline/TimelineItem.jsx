import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class TimelineItem extends React.Compoenent {
  static propType = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    dot: PropTypes.node,
    pending: PropTypes.bool,
    last: PropTypes.bool,
    style: PropTypes.object
  }

  static defaultProps = {
    prefixCls: 'idoll-timeline',
    color: 'blue',
    last: false,
    pending: false
  };

  render() {
    const { prefixCls, className, color = '', last, children, pending, dot, ...restProps } = this.props;

    const itemClassName = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-last`]: last,
      [`${prefixCls}-item-pending`]: pending
    }, className);

    const dotClassName = classNames({
      [`${prefixCls}-item-head`]: true,
      [`${prefixCls}-item-head-custom`]: dot,
      [`${prefixCls}-item-head-${color}`]: true
    });

    return (
      <li {...restProps} className={itemClassName}>
        <div className={`${prefixCls}-item-tail`} />
        <div
          className={dotClassName}
          style={{ borderColor: /blue|red|green/.test(color) ? null : color }}
        >
          {dot}
        </div>
        <div className={`${prefixCls}-item-content`}>
          {children}
        </div>
      </li>
    )
  }
}
