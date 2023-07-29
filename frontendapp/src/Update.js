import React, { useEffect, useState } from 'react'
import { useNavigate, useParams,} from 'react-router-dom'
import axios from 'axios';
const Update = () => {

    const {id}=useParams();
    const[data,setData]=useState([]) 
    const[insert,setInsert]=useState({
      name:data.name,
      email:data.email,
  })
    const navigate=useNavigate()
     
    useEffect(()=>{

        axios.get("http://localhost:8000/edit/"+id)
        .then(res=>{
            console.log(res.data[0])
            setData(res.data)
            
        })
        .catch(err=>console.log(err))
    },[])
    

    

    const handleUpdate=(e)=>{
     
      e.preventDefault()
      axios.put("http://localhost:8000/edit/"+id,insert)
      .then(res=>{
        console.log(res)
        navigate('/')
      })
      .catch(err=>console.log(err))
    }
  return (
    <div>
    <h1>Edit List</h1>
    <form onSubmit={handleUpdate} >
    <input type='text' name='name'value={insert.name} onChange={(e)=>setInsert({...insert,name:e.target.value})} />
    <input type='email'  name='email' value={insert.email} onChange={(e)=>setInsert({...insert,email:e.target.value})}/>
    <button type='submit'>Update</button>
    </form>
    </div>
  )
}

export default Update
