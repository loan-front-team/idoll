import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import omit from 'object.omit'

import Icon from '../icon/index'

import './style'

class Sider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fold: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(spanNum) {
    this.setState({
      fold: !this.state.fold
    })
  }

  render() {
  	const { span, toggle, children, onCollapse, foldSpan } = this.props
    const { fold } = this.state

    let currentSpan = span

    if (toggle && foldSpan && fold) {
      currentSpan = foldSpan.fold
    } else if (toggle && foldSpan && !fold) {
      currentSpan = foldSpan.unfold
    }

    const classes = classNames({
      'idoll-layout-sider': 'doll-layout-sider',
      [`idoll-layout-sider-${currentSpan}`]: (currentSpan && !toggle) || (currentSpan && toggle && !fold)
    })
    const iconType = fold ? 'menu-unfold' : 'menu-fold'

    var menuToggle = (toggle) => {
      const menuDom = []
      if (toggle) {
        menuDom.push(<Icon type={iconType} key={0} onClick={this.toggleMenu} className='idoll-silder-toggle' />)
      }

      if (onCollapse) {
        onCollapse()
      }
      return menuDom
    }

    const otherProps = omit(this.props, [
      'toggle',
      'foldSpan',
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
  foldSpan: PropTypes.object,
  children: PropTypes.node,
  onCollapse: PropTypes.func,
}

export default Sider
