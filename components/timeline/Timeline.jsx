import React from 'react';
import classNames from 'classnames';
import TimelineItem from './TimelineItem';
import PropTypes from 'prop-types';

export default class Timeline extends React.Component {
  static item = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    dot: PropTypes.node,
    pending: PropTypes.bool,
    last: PropTypes.bool,
    style: PropTypes.object
  }

  static PropTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    pending: PropTypes.bool,
    style: PropTypes.object
  }

  static defaultProps = {
    prefixCls: 'idoll-timeline'
  };

  render() {
    const { prefixCls, children, pending, className, ...restProps } = this.props;
    const pendingNode = typeof pending === 'boolean' ? null : pending;
    const classString = classNames(prefixCls, {
      [`${prefixCls}-pending`]: !!pending,
    }, className);
    // Remove falsy items
    const falsylessItems = React.Children.toArray(children).filter(item => !!item);
    const items = React.Children.map(falsylessItems, (ele, idx) =>
      React.cloneElement(ele, {
        last: idx === (React.Children.count(falsylessItems) - 1),
      }),
    );
    const pendingItem = (pending) ? (
      <TimelineItem pending={!!pending}>{pendingNode}></TimelineItem>
    ) : null;
    return (
      <ul {...restProps} className={classString}>
        {items}
        {pendingItem}
      </ul>
    );
  }
}
