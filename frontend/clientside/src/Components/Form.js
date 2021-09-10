import React from 'react'
import ListItem from './ListItem'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useState,useContext} from 'react'
import {WorkoutContext} from '../context/WorkoutContext'
import axios from 'axios';



function Form() {
const {addWorkoutItem}=useContext(WorkoutContext)

const [exercise, setExercise]= useState("")
const [repetition,setRepition]=useState("")
const [weight,setWeight]=useState("")
const [duration,setDuration]=useState("")
const [value, onChange] = useState(new Date());

const handleSubmit = (e)=> {
  e.preventDefault()
  axios.post("http://localhost:4000/tracker", {
    exercise,repetition,weight,duration
  }).then (response=> {
    console.log(response)
    addWorkoutItem(response.data.data.trackerItem)
  })
  setWeight("")
  setDuration("")
  setExercise("")
  setRepition("")
}


  return (
    <div className="home-container">
      
      <div className="tracker">
        <h1>Form</h1>
        
        <label>Name of exercise:</label>
        <input type="text" value= {exercise}  name="exercise"onChange={e => setExercise(e.target.value)} ></input>

        <label>Number of repetition:</label>
        <input type="number" value= {repetition} name="repetition" onChange={e => setRepition(e.target.value)}></input>

        <label>Current Weight:</label>
        <input type="number" value= {weight} name="weight" onChange={e => setWeight(e.target.value)}></input>

        <label>Duration:</label>
        <input type="number" value= {duration} name="duration" onChange={e => setDuration(e.target.value)}></input>

        <br></br>
        <button onClick= {handleSubmit} >ADD</button>

      </div>
       
       <div className="calender" >
      <Calendar
        onChange={onChange}
        value={value}
      />
       </div>
      <ListItem ></ListItem>

    </div>
  )
}

export default Form
