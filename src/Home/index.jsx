import React from 'react'
import { NavLink } from 'react-router-dom'

import './style'

function Home() {
  	return (
    <div>
      <NavLink className='nav' to='/layout' activeStyle={{ fontWeight: 'bold', color: 'red' }}>layout</NavLink>
      <NavLink className='nav' to='/collapse' activeStyle={{ fontWeight: 'bold', color: 'red' }}>collapse</NavLink>
      <NavLink className='nav' to='/select' activeStyle={{ fontWeight: 'bold', color: 'red' }}>select</NavLink>
	    <NavLink className="nav" to="/alert" activeStyle={{ fontWeight: 'bold',color: 'red'}}>alert</NavLink>
    </div>
  			);
}
export default Home;
