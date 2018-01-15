import React from 'react'
import Button from '../button'
import Icon from '../icon'
import Dropdown from './dropdown'
import classNames from 'classnames'

export default class DropdownButton extends React.Component {
  static defaultProps = {
    align: {
      point: ['tr', 'br'],
      overlay: {
        adjustX: 1,
        adjustY: 1
      },
      offset: [0, 4],
      targetOffset: [0, 0]
    },
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
        <Dropdown align={align} overlay={overlay} trigger={trigger}>
          <Button type={type}>
            按钮<Icon type='down' />
          </Button>
        </Dropdown>
      </div>
    )
  }
}
