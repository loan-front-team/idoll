import React from 'react'
import { NavLink } from 'react-router-dom'

import './style'

function Home() {
<<<<<<< HEAD
  	return (
    <div>
      <NavLink className='nav' to='/layout' activeStyle={{ fontWeight: 'bold', color: 'red'}}>layout</NavLink>
      <NavLink className='nav' to='/collapse' activeStyle={{ fontWeight: 'bold', color: 'red'}}>collapse</NavLink>
    </div>
  			);
=======
  return (<div><NavLink to='/layout' activeStyle={{ fontWeight: 'bold', color: 'red' }}>layout</NavLink><br /><NavLink to='/select' activeStyle={{ fontWeight: 'bold', color: 'red' }}>select</NavLink></div>);
>>>>>>> 52086fcd2c0f561473814a30e6b63fa212263a14
}
export default Home;
