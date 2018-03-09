import React from 'react'
// import Button from '../button'
import Icon from '../icon'
import Dropdown from './dropdown'
import classNames from 'classnames'

export default class DropdownNormal extends React.Component {
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
    const { overlay, trigger, align, children, className, ...restProps } = this.props;
    // console.info('visible', this.state.visible);
    const cls = classNames({
      'idoll-dropdown-normal': true,
      [className]: !!className
    })
    return (
      <div {...restProps} className={cls}>
        <Dropdown align={align} overlay={overlay} trigger={trigger} onVisibleChange={this.onVisibleChange} >
          <a href='#' className='idoll-icon-a'>
            {children}{this.state.visible === true ? <Icon type='caret-up' /> : <Icon type='caret-down' />}
          </a>
        </Dropdown>
      </div>
    )
  }
}
