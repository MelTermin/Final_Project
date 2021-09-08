import React from 'react'
import Edit from './Edit'
import {useState,useEffect} from 'react'

function ListItem() {
const [details,setDetails]=useState([])
//handle Delete

const handleDelete = async id => {
  try {
    const handleDelete = await fetch(`http://localhost:4000/tracker/${id}`, {
      method: "DELETE"
    });

    setDetails(details.filter(item => item.tracker_id !== id));
  } catch (err) {
    console.error(err.message);
  }
  

}


const getTrackerItem= async () => {
  try {
    const response = await fetch("http://localhost:4000/tracker")
    const jsonData = await response.json();
   

    setDetails(jsonData);

  }catch(err) {
    console.error(err.message)
  }

}

useEffect(() => {
  getTrackerItem();
}, []);


console.log(details)
  
  return (
    <div className="items">
      <h1>Workout Tracker Item</h1>
        {
        details.map((item) => {
          return (//dont forget to return it Melissa!!//
          <div key= {item.tracker_id} className="results" >
            <p>{item.exercise}</p>
            <p>{item.repetition} rep</p>
            <p>{item.weight} kg</p>
            <p>{item.duration} min</p>
            <Edit item={item} />
            <button onClick= {() =>handleDelete(item.tracker_id)}>Delete</button>
          
          </div>)
        })
      }

      
    </div>
  )
}

export default ListItem
