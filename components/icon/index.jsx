import React from 'react';

import './style'

export default props => {
	let { type, className='', ...other } = props;
	className += `idollicon idollicon-${type}`;
	return <i className={className.trim()} {...other} />;
};