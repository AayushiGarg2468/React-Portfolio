import React from 'react'
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className="name">
        <h2>AAYUSHI GARG</h2>
      </div>
      <div className="list">
        
            <li className='listItem'>Introduction</li>
            <li className='listItem'>Experience</li>
            <li className='listItem'>Projects</li>
            <li className='listItem'>Skills</li>
            <li className='listItem'>Contact</li>
            <li className='listItem'>Login</li>
        
      </div>
    </div>
  )
}

export default NavBar
