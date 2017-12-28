import React from 'react'
import PropTypes from 'prop-types'

import './style'

function Content(props) {
  	const { children } = props;
  	return <div className='idoll-layout-content'>{children}</div>;
}

Content.propTypes = {
	children: PropTypes.node
};

export default Content;
