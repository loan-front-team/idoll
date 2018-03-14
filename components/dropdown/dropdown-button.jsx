import React from 'react'
import Button from '../button'
import Icon from '../icon'
import Dropdown from './dropdown'
import classNames from 'classnames'
const ButtonGroup = Button.Group;

export default class DropdownButton extends React.Component {
  state = {
    visible: false
  };
  onChange = (flag) => {
    console.info(flag);
    this.setState({
      visible: flag
    });
  };
  static defaultProps = {
    placement: 'bottomRight',
    type: 'normal',
    prefixCls: 'idoll-dropdown-button'
  };
  render() {
    // const { type, overlay, trigger, align, children, className } = this.props;
    // // console.info('1111', restProps);
    // const cls = classNames({
    //   [className]: !!className
    // })
    // return (
    //   <div className={cls}>
    //     <Dropdown align={align} overlay={overlay} trigger={trigger} onVisibleChange={this.onVisibleChange}>
    //       <Button type={type}>
    //         {children}{this.state.visible ? <Icon type='caret-up' /> : <Icon type='caret-down' />}
    //       </Button>
    //     </Dropdown>
    //   </div>
    // )
    const {
      type, disabled, children,
      prefixCls, className, overlay, trigger, align,
      visible, placement, getPopupContainer,
      ...restProps
    } = this.props;

    const dropdownProps = {
      align,
      overlay,
      trigger: disabled ? [] : trigger,
      placement,
      getPopupContainer,
    };
    if ('visible' in this.props) {
      dropdownProps.visible = visible;
    }
    // if ('onVisibleChange' in this.props) {
    //   dropdownProps.onVisibleChange = this.onChange(visible, onVisibleChange);
    // }
    console.info('visible', visible);
    // let iconChange;
    // if (this.props.visible === true) {
    //   iconChange = <Icon type='caret-up' />
    // } else {
    //   iconChange = <Icon type='caret-down' />
    // }

    return (
      <ButtonGroup
        {...restProps}
        className={classNames(prefixCls, className)}
      >
        <Dropdown {...dropdownProps} onVisibleChange={this.onChange}>
          <Button type={type} disabled={disabled}>
            {children}{this.state.visible === true ? <Icon type='caret-up' /> : <Icon type='caret-down' />}
          </Button>
        </Dropdown>
      </ButtonGroup>
    );
  }
}
