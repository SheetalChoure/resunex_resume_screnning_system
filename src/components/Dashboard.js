import {useState} from "react"
import API from "../api"
import Graph from "./Graph"

function Dashboard(){

 const [data,setData]=useState([])

 const load = async()=>{

  try{

   const res = await API.get("/results")

   if(Array.isArray(res.data)){
    setData(res.data)
   }else{
    console.log(res.data)
    setData([])
   }

  }catch(error){
   console.log(error)
   alert("Backend error. Check Flask server.")
  }

 }

 return(

  <div>

   <h2>Candidate Ranking</h2>

   <button onClick={load}>Show Results</button>

   <ul>

    {data.map((c,i)=>(
     <li key={i}>
      {c.name} | Score: {c.score}
     </li>
    ))}

   </ul>

   <Graph data={data}/>

  </div>

 )
}

export default Dashboard