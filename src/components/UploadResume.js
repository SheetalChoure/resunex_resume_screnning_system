import {useState} from "react"
import API from "../api"
import JobDescription from "./JobDescription"
import Dashboard from "./Dashboard"
import './upload.css';

function UploadResume(){

 const [files,setFiles]=useState([])

 const upload = async()=>{

  const formData = new FormData()

  for(let i=0;i<files.length;i++){
   formData.append("resumes",files[i])
  }

  try{

   await API.post("/upload",formData,{
    headers:{
     "Content-Type":"multipart/form-data"
    }
   })

   alert("Upload successful")

  }catch(error){
   console.log(error)
   alert("Upload failed. Check backend.")
  }

 }

 return(
    <div className="box">
   <div className="box1">
        <JobDescription/>

   </div>

  <div className="box2">

   <h2>Upload Resumes</h2>

   <input
    type="file"
    multiple
    onChange={(e)=>setFiles(e.target.files)}
   />

   <br/><br/>

   <button onClick={upload}>Upload</button>

  </div>

  
   
   <Dashboard/>

 </div>
 )
}

export default UploadResume