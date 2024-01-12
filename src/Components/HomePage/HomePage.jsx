import React from 'react'
import './HomePage.css'
import HomeSocials from './HomeSocials'

const HomePage = () => {
  return (
    <section className="home container" id="home">
      <div className='intro'>
        <img src="Me.jpeg" alt="" className='homeImg' />
        <h1 className='homeName'>Aayushi Garg</h1>
        <span className='homeEducation'>I'm a Front-end Developer</span>  
        <HomeSocials/>
      </div>
    </section>
  )
}

export default HomePage
