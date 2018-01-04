import * as React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import shallowEqual from 'shallowequal'
import Radio from './radio'
import './style/index.js'

function getCheckedValue(children) {
  let value = null;
  let matched = false;
  React.Children.forEach(children, (radio) => {
    if (radio && radio.props && radio.props.checked) {
      value = radio.props.value;
      matched = true;
    }
  })
  return matched ? { value } : undefined;
}

export default class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.onRadioChange = (ev) => {
      const lastValue = this.state.value;
      const { value } = ev.target;
      if (!('value' in this.props)) {
        this.setState({
          value
        })
      }
    }
  }
}


