import React from 'react'
import Navbar from './Navbar'
import Contact from './Contact';
import Workout from './Workout';
import Form from './Form'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

function Home(props) {
  const {handleLogout,firstName}= props

  return (
    <div>    
      <Router>
      <Navbar firstName= {firstName} handleLogout= {handleLogout}/>
      <Switch>
        <Route path="/"  exact component= {Form}/>
        <Route path="/contact" component= {Contact} />
        <Route path="/workout" component= {Workout} />

      </Switch>
      </Router>
      
    
      
    </div>
  )
}

export default Home
