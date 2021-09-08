import React from 'react'
import ListItem from './ListItem'
import {useState} from 'react'


function Form() {

const [exercise, setExercise]= useState("")
const [repetition,setRepition]=useState("")
const [weight,setWeight]=useState("")
const [duration,setDuration]=useState("")


const handleSubmit = async e => {
  e.preventDefault()
  try {
    const body= {exercise,repetition,weight,duration}
    const response= await fetch("http://localhost:4000/tracker", {
      method:'POST',
      headers: {
        'Content-type':'application/json'
      },
      body:JSON.stringify(body)
    });
    console.log(response)
   
    
  
  } catch(err) {
    console.error(err.message)
  }
  setExercise("");
  setRepition("");
  setWeight("");
  setDuration("")
}
  return (
    <div>
      

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
        <button onClick= {handleSubmit}>ADD</button>

      </div>
      <ListItem ></ListItem>
    </div>
  )
}

export default Form
