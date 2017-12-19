import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classNames'

import './style'

class Header extends Component {
  render() {
  	const { span, children } = this.props;
    const classes = classNames({
      'idoll-layout-header': 'idoll-layout-header',
      [`idoll-layout-header-${span}`]: span
    })
  	return (
    <div className={classes}>
      {children}
    </div>
  	)
  }
}

Header.propTypes = {
  span: PropTypes.number,
  children: PropTypes.node
}

export default Header

