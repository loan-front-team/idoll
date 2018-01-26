import React from 'react';
import PropTypes from 'prop-types';

const Pager = (props) => {
	const { rootPrefixCls, page, active, className, onClick, onKeyPress, itemRender, showTitle} = props;

	const prefixCls = `${rootPrefixCls}-item`;
	let cls = `${prefixCls} ${prefixCls}-${page}`;

	if (active) {
		cls = `${cls} ${prefixCls}-active`;
	}

	if (className) {
		cls = `${cls} ${className}`;
	}

	const handleClick = () => {
		onClick(page);
	};

	const handleKeyPress = () => {
		onKeyPress(e, onClick, page);
	}

	return (
  <li
    title={showTitle ? page : null}
    className={cls}
    onClick={handleClick}
    onKeyPress={handleKeyPress}
    tabIndex='0'
  	>
    {itemRender(page, 'page', <a>{page}</a>)}
  </li>
		)
};

Pager.propTypes = {
  page: PropTypes.number,
  active: PropTypes.bool,
  last: PropTypes.bool,
  locale: PropTypes.object,
  className: PropTypes.string,
  showTitle: PropTypes.bool,
  rootPrefixCls: PropTypes.string,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  itemRender: PropTypes.func,
};
