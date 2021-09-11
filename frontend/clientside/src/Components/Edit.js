import React from 'react'
import {useState,useEffect,useContext} from 'react'
import axios from 'axios'
import {WorkoutContext} from '../context/WorkoutContext'

function Edit({item}) {

  const {details,setDetails}=useContext(WorkoutContext)


const [exercise, setExercise]= useState(item.exercise)
const [repetition,setRepition]=useState(item.repetition)
const [weight,setWeight]=useState(item.weight)
const [duration,setDuration]=useState(item.duration)



const updateDescription = async (id) => {
 
  console.log(id)
  try {
    axios.put(`http://localhost:4000/tracker/${id}`, {
      exercise,repetition,weight,duration
    }).then (response=> {
      console.log(response)
      
    })
    
  } catch (err) {
    console.error(err.message);
  }
};

// useEffect (()=> {
//   axios.get("http://localhost:4000/tracker").then(response=> {
//     console.log(response)
    
//   })
//  }, []);
 



  return (
    <div>
            <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${item.id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${item.id}`}
        
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Workout tracker</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setExercise(item.exercise)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <label>Exercise</label>
              <input
                type="text"
                className="form-control"
                value={exercise}
                onChange={e => setExercise(e.target.value)}
              />

              <label>Repetition</label>
              <input
                type="number"
                className="form-control"
                value={repetition}
                onChange={e => setRepition(e.target.value)}
              />    

              <label>Weight</label>
              <input
                type="number"
                className="form-control"
                value={weight}
                onChange={e => setWeight(e.target.value)}
              />  

            <label>Repetition</label>
              <input
                type="number"
                className="form-control"
                value={duration}
                onChange={e => setDuration(e.target.value)}
              />  
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={() => updateDescription(item.id)}
              >
                Submit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
               
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Edit
