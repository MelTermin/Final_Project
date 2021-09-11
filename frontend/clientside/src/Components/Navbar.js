import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(props) {
  const {handleLogout}= props

  return (
    <div className="navbar">
   <ul className="nav-links">

   <Link className="link" to="/" >
     <h1>Workout Tracker App</h1></Link>

     <Link className="link" to="/form" >
     <li>Add Measurements</li></Link>
   
  
    <Link className="link" to="/workout" >
      <li>Workout</li>
    </Link>

    <Link className="link" to="/contact" >
      <li>Contact</li>
    </Link>

    <button onClick= {handleLogout}>Log out</button>
    </ul>
    </div>
  )
}

export default Navbar
