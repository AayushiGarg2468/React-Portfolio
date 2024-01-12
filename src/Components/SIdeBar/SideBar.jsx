import React from 'react'
import './SideBar.css'
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AssignmentIcon from '@mui/icons-material/Assignment';


const SideBar = () => {
  return (
    <aside className='aside'>
      <a href="#home" className='NavLogo'>
         A G
      </a>
      <nav className="nav">
        <div className="navMenu">
          <ul className="navList">
            <li className="navitems">
              <a href="#home" className='navLink'> 
              <HomeIcon className='homeIcons'/>
              <span>Home</span>              
              </a>
            </li>
            <li className="navitems">
              <a href="#projects" className='navLink'> 
              <AssignmentIcon/> 
              <span>Projects</span>               
              </a>
            </li>
            <li className="navitems">
              <a href="#skills" className='navLink'>
              <AssignmentIcon/>
              <span>Skills</span>                 
              </a>
            </li>
            <li className="navitems">
              <a href="#experience" className='navLink'>
              <AssignmentIcon/>
              <span>Experience</span>                 
              </a>
            </li>
            <li className="navitems">
              <a href="education" className='navLink'> 
              <AssignmentIcon/>
              <span>Education</span>                
              </a>
            </li>
            <li className="navitems">
              <a href="#contact" className='navLink'> 
              <ContactPageIcon/>
              <span>Contact</span>               
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div></div>
    </aside>
  )
}

export default SideBar
