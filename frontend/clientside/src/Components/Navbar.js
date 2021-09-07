import React from 'react'

function Navbar(props) {
  const {handleLogout,firstName}= props

  return (
    <div className="navbar">
    <h1>Workout Tracker App</h1>
    <p>Welcome,{firstName}</p>
    <button onClick= {handleLogout}>Log out</button>
    </div>
  )
}

export default Navbar
