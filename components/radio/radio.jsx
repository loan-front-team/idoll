import * as React from 'react'
import PropTypes from 'prop-types'
import RcCheckbox from 'rc-checkbox'
import classNames from 'classnames'
import shallowEqual from 'shallowequal'

export default class Radio extends React.Component {
  constructor () {
    super(...arguments);
    this.saveCheckbox = (node) => {
      this.rcCheckbox = node;
    }
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState) ||
      !shallowEqual(this.context.radioGroup, nextContext.radioGroup)
  }
  focus() {
    this.rcCheckbox.focus();
  }
  blur() {
    this.rcCheckbox.blur();
  }
  saveCheckbox = (node) => {
    this.rcCheckbox = node;
  }
  render() {
    const { props, context } = this;
    const { prefixCls, className, children, style, ...restProps} = props;
    const { radioGroup } = context;
    let radioProps = Object.assign({}, restProps);
    if(radioGroup) {
      radioProps.name = radioGroup.name;
      radioProps.onChange = radioGroup.onChange;
      radioProps.checked = props.value === radioGroup.value;
      radioProps.disabled = props.disabled || radioGroup.disabled;
    }
    return (

    )
  }
}
