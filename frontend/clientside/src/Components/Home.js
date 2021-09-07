import React from 'react'
import Navbar from './Navbar'

function Home(props) {
  const {handleLogout,firstName}= props

  return (
    <div>    
      
      <Navbar firstName= {firstName} handleLogout= {handleLogout}/>
    
      
    </div>
  )
}

export default Home
