import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

import './style'

function Layout(props) {
  	const { children } = props;
    const classes = classNames({
       'idoll-layout': 'doll-layout',
       'idoll-layout-has-sider': (children.length && children.filter(function(item) { return item.type.name === 'Sider' })).length
    });
  	return <div className={classes}>{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
