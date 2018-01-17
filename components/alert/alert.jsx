import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Animate from 'rc-animate';
import classNames from 'classnames';
// import Icon from '../icon';
import PropTypes from 'prop-types';
import './style/index';

function noop() {}

export default class Alert extends React.Component {
  static propTypes = {
    closable: PropTypes.bool,
    description: PropTypes.node,
    type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
    message: PropTypes.node,
    closeText: PropTypes.node,
    showIcon: PropTypes.bool,
    banner: PropTypes.bool,
    style: PropTypes.object,
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    onClose: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state = {
      closing: true,
      closed: false
    };
    this.handleClose = (e) => {
      e.preventDefault();
      let dom = ReactDOM.findDOMNode(this);
      dom.style.height = `${dom.offsetHeight}px`;
      // Magic code
      // 重复一次后才能正确的配置heigth
      dom.style.height = `${dom.offsetHeight}px`;

      this.setState({
        closing: false
      });
      (this.props.onClose || noop)(e);
    }

    this.animationEnd = () => {
      this.setState({
        closed: true,
        closing: true
      });
    }
  }
  render() {
    let {
      closable, description, type, prefixCls = 'idoll-alert', message, closeText, showIcon, banner,
      className = '', style
    } = this.props;
    // banner模式默认有Icon
    showIcon = banner && showIcon === undefined ? true : showIcon;
    // banner模式默认警告
    type = banner && type === undefined ? 'warning' : type || 'info';

    // let iconType = '';
    // switch (type) {
    //   case 'success':
    //     iconType = 'check-circle';
    //     break;
    //   case 'info':
    //     iconType = 'info-circle';
    //     break;
    //   case 'error':
    //     iconType = 'cross-circle';
    //     break;
    //   default:
    //     iconType = 'default';
    // }

    // use outline icon in alert with description
    // if (description) {
    //   iconType += '-o';
    // }

    let alertCls = classNames(prefixCls, {
      [`${prefixCls}-${type}`]: true,
      [`${prefixCls}-close`]: !this.state.closing,
      [`${prefixCls}-with-description`]: !!description,
      [`${prefixCls}-no-icon`]: !showIcon,
      [`${prefixCls}-banner`]: !!banner
    }, className);

    // closeable when closeText is assigned
    if (closeText) {
      closable = true;
    }

    const closeIcon = closable ? (
      <a onClick={this.handleClose} className={`${prefixCls}-close-icons`}>
        {/* {closeText || <Icon type="cross" />} */}
      </a>
    ) : null;

    return this.state.closed ? null : (
      <Animate
        component=''
        showProp='data-show'
        transitionName={`${prefixCls}-slide-up`}
        onEnd={this.animationEnd}
      >
        <div data-show={this.state.closing} className={alertCls} style={style}>
          {/* {showIcon ? <Icon className={`${prefixCls}-icon`} type={iconType} /> : null} */}
          <span className={`${prefixCls}-message`}>{message}</span>
          <span className={`${prefixCls}-description`}>{description}</span>
          {closeIcon}
        </div>
      </Animate>
    );
  }
}
