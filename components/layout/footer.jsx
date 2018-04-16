import React from 'react'
import PropTypes from 'prop-types'

import './style'

function Footer(props) {
  	const { children } = props;
  return <div {...props} className='idoll-layout-footer'>{children}</div>;
}

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;

