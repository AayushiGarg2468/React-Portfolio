import React from 'react'
import './NavBar.scss'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className="name">
        <h2>AAYUSHI GARG</h2>
      </div>
      <div className="list">

            <li className='listItem'><NavLink to='/homepage'>Introduction</NavLink></li>
            <li className='listItem'><NavLink to='/experience'>Experience</NavLink></li>
            <li className='listItem'><NavLink to='/projects'>Projects</NavLink></li>
            <li className='listItem'><NavLink to='/skills'>Skills</NavLink></li>
            <li className='listItem'><NavLink to='/contact'>Contact</NavLink></li>
            <li className='listItem'><NavLink to='/adminportal'>Login</NavLink></li>
        
      </div>
    </div>
  )
}

export default NavBar
