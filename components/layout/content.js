import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style'

class Content extends Component {
  render() {
  	const { children } = this.props;

  	return (
    <div className='idoll-layout-content'>
      {children}
    </div>
  	)
  }
}

Content.propTypes = {
	children: PropTypes.node
}

export default Content
