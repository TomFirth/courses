import React from 'React'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Budget</h1>
    <NavLink to='/' exact={true} activeClassName='is-active'>Dashboard</NavLink>
    <NavLink to='/create' activeClassName='is-active'>Create</NavLink>
    <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
  </header>
)

export default Header
