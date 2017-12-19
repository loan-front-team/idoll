import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style'

class Footer extends Component {
  render() {
  	const { children } = this.props;

  	return (
    <div className='idoll-layout-footer'>
      {children}
    </div>
  	)
  }
}

Footer.propTypes = {
  children: PropTypes.node
}

export default Footer
