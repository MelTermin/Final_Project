import React from 'react'
import {Link} from 'react-router-dom'

function Main() {
  return (
    <div>
      <h1>Node.js Weight Tracker with Postgres SQL & React</h1>
      <div>Welcome to the Weight Tracker and Fitness Workout sample project!</div>
      <div>Add a <Link  to="/form" >
      weight measurement </Link> or find a <Link  to="/workout" >
      workout according to your need!</Link>
      </div>
    </div>
  )
}

export default Main
