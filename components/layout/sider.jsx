import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

import './style'

class Sider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fold: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      fold: !this.state.fold
    })
  }

  render() {
  	const { span, toggle, children } = this.props;
    const { fold } = this.state;
    const classes = classNames({
      'idoll-layout-sider': 'doll-layout-sider',
      [`idoll-layout-sider-${span}`]: (span && toggle !== 1) || (span && toggle === 1 && !fold)
    })
    const menToggleClass = classNames({
      'idoll-silder-toggle-hiden': fold,
      'idoll-silder-toggle-open': !fold
    })

    var menuToggle = (toggle) => {
      const menuDom = []
      if (toggle === 1) {
        menuDom.push(<div key={0} onClick={this.toggleMenu} className={menToggleClass} >&&</div>)
      }
      return menuDom
    }

  	return (
    <div className={classes}>
      {menuToggle(toggle)}
      {children}
    </div>
  	)
  }
}

Sider.propTypes = {
  span: PropTypes.number,
  toggle: PropTypes.bool,
  children: PropTypes.node
}

export default Sider
