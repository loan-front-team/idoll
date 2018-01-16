import React from 'react'
import Button from '../button'
import Icon from '../icon'
import Dropdown from './dropdown'
import classNames from 'classnames'

export default class DropdownButton extends React.Component {
  static defaultProps = {
    type: 'default'
  }
  render() {
    const { type, overlay, trigger, align, children, className, onClick, ...restProps } = this.props;
    const cls = classNames({
      'idoll-dropdown-button': true,
      [className]: !!className
    })
    return (
      <div {...restProps} className={cls}>
        <Button type={type} onClick={onClick}>{children}</Button>
        <Dropdown align={align} overlay={overlay} trigger={trigger}>
          <Button type={type}>
            <Icon type='down' />
          </Button>
        </Dropdown>
      </div>
    )
  }
}
