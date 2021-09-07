const express= require ('express')
const cors= require ('cors')
const env=require('dotenv')
const pool= require("./modules/db")
const app=express()
env.config();

app.use(cors())
app.use(express.json())

//routes
//insert item//
app.post("/tracker", async(req,res) => {
  try {
    const {exercise,repetition,weight,duration}= req.body
    console.log(req.body)
    const newTrackerList= await pool.query("INSERT INTO trackerlist (exercise,repetition,weight,duration) VALUES($1,$2,$3,$4)", [exercise,repetition,weight,duration])
    res.json(newTrackerList)
  } catch(err) {
    console.error(err.message)

  }
})

//to update the tracker item//
app.put("/tracker/:id", async(req,res) => {
  try {
    const {id}=req.params
    const {exercise,repetition,weight,duration}= req.body
    const updateTrackerItem= await pool.query("UPDATE trackerlist SET exercise= $1, repetition=$2, weight=$3 ,duration=$4 WHERE tracker_id=$5",[exercise,repetition,weight,duration,id])
    res.json("tracker item is updated")

  }catch(err) {
    console.log(err.message)
  }
})

//delete item//
app.delete("/tracker/:id", async(req,res) => {
  try {
    const {id}=req.params
    const deleteTrackerItem= await pool.query("DELETE from trackerlist where tracker_id=$1", [id])
    res.json("tracker item is deleted")
  }catch (err) {
    console.log(err.message)
  }
})




app.listen(process.env.PORT, ()=> {
  console.log("listening on port" + process.env.PORT)
})