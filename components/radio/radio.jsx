import * as React from 'react'
import PropTypes from 'prop-types'
import RcCheckbox from 'rc-checkbox'
import classNames from 'classnames'
import shallowEqual from 'shallowequal'
import './style/index.js'
export default class Radio extends React.Component {
  constructor() {
    super(...arguments);
    this.saveCheckbox = (node) => {
      this.rcCheckbox = node;
    }
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState) ||
      !shallowEqual(this.context.radioGroup, nextContext.radioGroup);
  }
  focus() {
    this.rcCheckbox.focus();
  }
  blur() {
    this.rcCheckbox.blur();
  }
  render() {
    // console.info(this);
    // console.info(this.context);
    const { props, context } = this;
    const { prefixCls, className, children, style, ...restProps } = props;
    const { radioGroup } = context;
    let radioProps = Object.assign({}, restProps);
    if (radioGroup) {
      console.info(props.disabled);
      console.info(radioGroup.disabled);
      radioProps.name = radioGroup.name;
      radioProps.onChange = radioGroup.onChange;
      radioProps.checked = props.value === radioGroup.value;
      radioProps.disabled = props.disabled || radioGroup.disabled;
    }
    const wrapperClassString = classNames(className, {
      [`${prefixCls}-wrapper`]: true,
      [`${prefixCls}-wrapper-checked`]: radioProps.checked,
      [`${prefixCls}-wrapper-disabled`]: radioProps.disabled
    })
    return (
      <label className={wrapperClassString} style={style} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
        <RcCheckbox {...radioProps} prefixCls={prefixCls} ref={this.saveCheckbox} />
        {children !== undefined ? <span>{children}</span> : null}
      </label>
    )
  }
}

Radio.defaultProps = {
  prefixCls: 'idoll-radio',
  type: 'radio'
}

Radio.contextTypes = {
  radioGroup: PropTypes.any
}
