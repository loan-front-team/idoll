import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import omit from 'object.omit'

import Icon from '../icon/index'

import './style'

class Sider extends Component {
  constructor(props) {
    super(props)
    const { collapsed } = this.props
    this.state = {
      collapsed: collapsed
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(spanNum) {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    const { span, toggle, children, onCollapse, foldSpan, toggleStyle } = this.props
    let collapsed = this.state.collapsed
    let currentSpan = span

    if (toggle && foldSpan && collapsed) {
      currentSpan = foldSpan.fold
    } else if (toggle && foldSpan && !collapsed) {
      currentSpan = foldSpan.unfold
    }

    const classes = classNames({
      'idoll-layout-sider': 'doll-layout-sider',
      [`idoll-layout-sider-${currentSpan}`]: currentSpan
    })
    const iconType = collapsed ? 'menu-unfold' : 'menu-fold'

    var menuToggle = (toggle) => {
      const menuDom = []
      if (toggle) {
        menuDom.push(<Icon type={iconType} key={0} onClick={this.toggleMenu} className='idoll-silder-toggle' style={toggleStyle} />)
      }

      if (onCollapse) {
        onCollapse()
      }
      return menuDom
    }

    const otherProps = omit(this.props, [
      'toggle',
      'toggleStyle',
      'foldSpan',
      'collapsed',
      'onCollapse'
    ]);

  	return (
    <div {...otherProps} className={classes}>
      {menuToggle(toggle)}
      {children}
    </div>
  	)
  }
}

Sider.propTypes = {
  span: PropTypes.string,
  toggle: PropTypes.bool,
  toggleStyle: PropTypes.object,
  foldSpan: PropTypes.object,
  children: PropTypes.node,
  collapsed: PropTypes.bool,
  onCollapse: PropTypes.func,
}

export default Sider
