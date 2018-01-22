import React from 'react'
import classNames from 'classnames';
import { findDOMNode } from 'react-dom'
import './style/index.js'


export default class Button extends React.Component {
	static defaultProps = {
	    prefixCls: 'idoll-btn',
	    onClick() {},
	    ghost: false,
	    loading: false
  	}
	static propTypes = {
	    type: React.PropTypes.string,
	    shape: React.PropTypes.oneOf(['circle', 'circle-outline']),
	    size: React.PropTypes.oneOf(['large', 'default', 'small']),
	    htmlType: React.PropTypes.oneOf(['submit', 'button', 'reset']),
	    onClick: React.PropTypes.func,
	    loading: React.PropTypes.bool,
	    className: React.PropTypes.string,
	    icon: React.PropTypes.string
	}
	componentWillUnmount() {
		if (this.clickedTimeout) {
			clearTimeout(this.clickedTimeout);
		}
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
	}
	clearButton = (button) => {
		button.className = button.className.replace(`${this.props.prefixCls}-clicked`, '');
	}
	// 添加单击效果
	handleClick = (...args) => {
		const buttonNode = findDOMNode(this);
		this.clearButton(buttonNode);
		this.clickedTimeout = setTimeout(() => (buttonNode.className += ` ${this.props.prefixCls}-clicked`), 10);
		clearTimeout(this.timeout);
		this.timeout = setTimeout(() => this.clearButton(buttonNode), 500)

		this.props.onClick(...args);
	}
	// Handle auto focus when click button in Chrome
	handleMouseUp = (e) => {
	findDOMNode(this).blur();
	if (this.props.onMouseUp) {
	  this.props.onMouseUp(e);
	}
	}
	render() {
		const { type, shape, size, className, htmlType, children, icon, loading, ghost, prefixCls, ...others } = this.props;
		const sizeCls = ({large: 'lg', small: 'sm'})[size] || '';
		const classes = classNames({
			[prefixCls]: true,
			[`${prefixCls}-${type}`]: type,
			[`${prefixCls}-${shape}`]: shape,
			[`${prefixCls}-${sizeCls}`]: sizeCls,
			[`${prefixCls}-icon-only`]: !children && icon,
			[`${prefixCls}-loading`]: loading,
			[`${prefixCls}-background-ghost`]: ghost,
			[className]: className

		})

		const kids = React.Children.map(children, insertSpace)
		return (
  <button {...others} type={htmlType || 'button'} className={classes} onMouseUp={this.handleMouseUp} onClick={this.handleClick}>
    { kids }
  </button>
			)
	}
}

// ----------------如果是两个中文字符，则在两个中文字符中自动插入一个空格--------------------------------
function insertSpace(child) {
	if (isString(child.type && isTwoCNChar(child.props.children))) {
		return React.cloneElement(child, {}, child.props.split('').join(' '));
	}
	if (isString(child)) {
		if (isTwoCNChar(child)) { child = child.split('').join(' ') }
		return <span>{child}</span>
	}
}
// 判断字符串类型
function isString(str) {
	return typeof str === 'string';
}
// 判断是否是两个中文字符
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
// -------------------------------insertSpace End-----------------------------------------------------
