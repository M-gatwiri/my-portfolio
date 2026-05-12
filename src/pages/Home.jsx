import React from 'react'
import { Link } from 'react-router'

function Home (){
  return (
    <div className='home'>
 <h1>Hi, I'm Mercy Gatwiri</h1>
 <h2>Frontend Developer</h2>
 <p>I build responsive and user-friendly web applications using React and modern frontend technologies, focused on creating smooth and engaging user experience</p>

<div className="buttons">
  <Link to="/portfolio">
 <button>Hire Me</button>
 </Link>

 <Link to="/contact">
 <button>Let's talk</button>
 </Link>
 </div>
 
    </div>
  )
}

export default Home