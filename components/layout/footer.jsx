import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style'

function Footer(props) {
  	const { children } = props;
    return <div className='idoll-layout-footer'>{children}</div>;
}

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;

