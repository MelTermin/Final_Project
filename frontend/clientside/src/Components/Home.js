import React from 'react'
import Navbar from './Navbar'
import Contact from './Contact';
import Workout from './Workout';
import {WorkoutContextProvider} from '../context/WorkoutContext'
import Form from './Form'
import Main from './Main'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

function Home() {


  return (
   <WorkoutContextProvider>
    <div>    
      <Router>
      <Navbar />
      <Switch>
      <Route path="/"  exact component= {Main}/>
        <Route path={["/form", "/tracker","/tracker/:id", "/tracker"]} exact component= {Form}/>
        <Route path={["/contact", "/contactform"]}  exact component= {Contact} />
        <Route path="/workout"  exact component= {Workout} />

      </Switch>
      </Router>
    </div>
    </WorkoutContextProvider>
  )
}

export default Home
