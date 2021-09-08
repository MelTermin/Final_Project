import React from 'react'
import {useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button,Modal,Form } from 'react-bootstrap';

function Edit({item}) {

console.log(item)

const [exercise, setExercise]= useState(item.exercise)
const [repetition,setRepition]=useState(item.repetition)
const [weight,setWeight]=useState(item.weight)
const [duration,setDuration]=useState(item.duration)



const updateDescription = async e => {
  e.preventDefault();
  try {
    const body = { exercise,repetition,weight,duration };
    const response = await fetch(
      `http://localhost:4000/todos/${item.tracker_id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );

    // window.location = "/";
  } catch (err) {
    console.error(err.message);
  }
};
  return (
    <div>
      <button>Edit</button>
      
    </div>
  )
}

export default Edit
