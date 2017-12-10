import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style'

class Header extends Component {
  render() {
  	const { headerType, children } = this.props;

  	return (
    <div className={`idoll-layout-${headerType}-header`}>
      {children}
    </div>
  	)
  }
}

Header.propTypes = {
  headerType: PropTypes.string,
  children: PropTypes.node
}

export default Header

