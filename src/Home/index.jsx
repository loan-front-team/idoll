import React from 'react'
import { NavLink } from 'react-router-dom'

// import './style'

function Home() {
  	return (
	  		<div>
	  			<NavLink to="/layout" activeStyle={{ fontWeight: 'bold',color: 'red'}}>layout</NavLink>
	  		</div>
  			);
}
export default Home;