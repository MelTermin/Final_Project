import React from 'react'
import {useState,useEffect} from 'react'

function Workout() {
  const [searchWorkOut, setSearchWorkOut]= useState("")
  const [workoutDetails,setWorkOutDetails]=useState([])
  const [seconds, setSeconds] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggle= ()=> {
    setIsActive(!isActive);
  }
  const reset=()=> {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleWorkOut= () => {

  fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${searchWorkOut}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "exercisedb.p.rapidapi.com",
		"x-rapidapi-key": "69e6ee80c3msha0293102a2b1b69p10242djsnb05d1985bf4c"
	}
})
.then(response => {
  return response.json();
})
.then(data=>{
  console.log(data);
  setTimeout(() => {
    setIsLoading(false);
    }, [3000]);
  setWorkOutDetails(data)
})
.catch(err => {
  console.error(err);
});
setSearchWorkOut("")
}

console.log(workoutDetails)
  return (
    <div>
        <h1>Workout</h1>
    
    <div className="header">
    
    <div className="search-container">
      
      <input type="text" value= {searchWorkOut} onChange= {(e)=>setSearchWorkOut(e.target.value)}></input>
      {isLoading && (
      <div class="text-center">
      <div class="spinner-border" role="status">
       <span class="sr-only">Loading...</span>
      </div>
      </div>
    )}
    {!isLoading && (
    <button onClick= {handleWorkOut}>Search</button>
)}
    
     
    </div>
    
    <div className="countdown-container">
      <div>{seconds}s</div>
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
        {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>

      </div>

     
        <div className="card-container">
        
      {
        workoutDetails.slice(0,10).map((item) => {
        return (//dont forget to return it Melissa!!//
          
          <div className="workout-container"  >
              <p>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
            <img className="gif" src= {item.gifUrl}></img>
          

            <div className="workout-details"> 
              <p>Body Part:{item.bodyPart}</p>
              <p>Equipment:{item.equipment} </p>
              
              <p>Target:{item.target}</p>
              

            </div>
          
          </div>
         
          
          )
                })
      }

        </div>
    </div>
  )
}

export default Workout
