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
      `http://localhost:4000/tracker/${item.tracker_id}`,
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
            <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${item.tracker_id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${item.tracker_id}`}
        
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
                onClick={e => updateDescription(e)}
              >
                Edit
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
