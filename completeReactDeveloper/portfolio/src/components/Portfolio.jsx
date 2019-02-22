import React from 'React'
import { Link } from 'react-router-dom'

const Portfolio = () => (
  <div>
    <Link to='/portfolio/1' activeClassName='is-active'>Portfolio 1</Link>
    <Link to='/portfolio/2' activeClassName='is-active'>Portfolio 2</Link>
  </div>
)

export default Portfolio
