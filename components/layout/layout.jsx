import React, { PropTypes, Component } from 'react'
import classNames from 'classnames'
import style from './style'

class Layout extends Component {
  constructor(){

  }
  
  render(){
  	const { children } from this.props;

  	return (
      <div className='dbox-layout'>
        {children}
      </div>
  	)
  }
}