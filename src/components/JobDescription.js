import {useState} from "react"
import API from "../api"

function JobDescription(){

 const [desc,setDesc]=useState("")

 const save = async()=>{

  await API.post("/job",{description:desc})

  alert("Job Description Saved")

 }

 return(

  <div>

   <h2>Job Description</h2>

   <textarea
    rows="4"
    cols="80"
    onChange={(e)=>setDesc(e.target.value)}
   />

   <br/>

   <button onClick={save}>Save</button>

  </div>
 )
}

export default JobDescription