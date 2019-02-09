import React from 'react'
import {NavLink} from 'react-router-dom'

import './MainNavigation.css'

const mainNavigation = props => {
  return(
    <header className="main-navigation">
      <div className="main-navigation__logo">
        <NavLink to="/home"><h1>Mississippi Prep Football</h1></NavLink>
      </div>
      <nav className="main-navigation__items">
        <ul>
          <li><NavLink to="/teams">Teams</NavLink></li>
          <li><NavLink to="/years">Years</NavLink></li>
          <li><NavLink to="/regions">Regions</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default mainNavigation