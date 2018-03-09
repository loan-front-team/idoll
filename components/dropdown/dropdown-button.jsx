import React from 'react'
import Button from '../button'
import Icon from '../icon'
import Dropdown from './dropdown'
import classNames from 'classnames'

export default class DropdownButton extends React.Component {
  static defaultProps = {
    type: 'normal'
  };
  state = {
    visible: false
  };
  onVisibleChange = (flag) => {
    // console.info(flag);
    this.setState({
      visible: flag
    });
  };
  render() {
    const { type, overlay, trigger, align, children, className, ...restProps } = this.props;
    // console.info('1111', this.state.visible);
    const cls = classNames({
      [className]: !!className
    })
    return (
      <div {...restProps} className={cls}>
        <Dropdown align={align} overlay={overlay} trigger={trigger} onVisibleChange={this.onVisibleChange}>
          <Button type={type}>
            {children}{this.state.visible ? <Icon type='caret-up' /> : <Icon type='caret-down' />}
          </Button>
        </Dropdown>
      </div>
    )
  }
}
