import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Create = () => {
    const navigate=useNavigate()
    const[input,setInput]=useState({
        name:"",
        email:"",
    })
    const throwData=(e)=>{
             e.preventDefault()
            axios.post('http://localhost:8000/Create',input)
            .then((res)=>{
                console.log(res);
                navigate('/')
            })
            .catch(err=>console.log(err))
          
    }
    
  return (
    <div className='main'>
      <h1>Create List</h1>
      <form onSubmit={throwData} >
      <input type='text' placeholder='your name' name='name'value={input.name} onChange={(e)=>setInput({...input,name:e.target.value})} />
      <input type='email' placeholder='enter email' name='email' value={input.email} onChange={(e)=>setInput({...input,email:e.target.value})}/>
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Create
