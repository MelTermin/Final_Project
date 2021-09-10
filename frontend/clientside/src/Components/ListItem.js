import React from 'react'
import Edit from './Edit'
import {useState,useEffect,useContext} from 'react'
import {WorkoutContext} from '../context/WorkoutContext'
import axios from 'axios'


function ListItem() {

const {details,setDetails}=useContext(WorkoutContext)

useEffect (()=> {
 axios.get("http://localhost:4000/tracker").then(response=> {
   console.log(response)
   setDetails(response.data.data.trackerItem)
 })
}, []);

const handleDelete = (id) => {
  try {
    axios.delete(`http://localhost:4000/tracker/${id}`)
    .then(response=> {
      console.log(response)
      setDetails(
        details.filter((item) => {
          return item.id !== id;
        })
      );
     
    })
  }catch(err) {

  }
}

  
  return (
    <div className="items">
      <h1>Workout Tracker Item</h1>
        {
        details.map((item) => {
          return (//dont forget to return it Melissa!!//
          <div key= {item.id} className="results" >
            <p>{item.exercise}</p>
            <p>{item.repetition} rep</p>
            <p>{item.weight} kg</p>
            <p>{item.duration} min</p>
            <Edit item={item} />
            <button className="btn btn-danger" onClick= {() =>handleDelete(item.id)} >Delete</button>
          
          </div>)
        })
      }

      
    </div>
  )
}

export default ListItem
