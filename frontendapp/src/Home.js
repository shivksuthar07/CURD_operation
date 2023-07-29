import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from "axios"
import { NavLink, useLocation,} from 'react-router-dom'
import { Link } from 'react-router-dom'
const Home = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/")
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])

   const location=useLocation()
    const deleteData=(id)=>{
      axios.delete("http://localhost:8000/"+id)
      .then(res=>{
        //location.reload()
        window.location.href='/'
      })
      .catch(err=>console.log(err))
    }
  return (
    <div>
      <table>
      <thead>
      <tr>
      <th>No.</th>
      <th>NAME</th>
      <th>E-MAIL</th>
      <th>UPDATE</th>
      <th>DELETE</th>
      </tr>
      </thead>
      <tbody>
    {data.map((value,i)=>{
        return(
            <tr key={i}>
            <td>{i}</td>
            <td>{value.name}</td>
            <td>{value.email}</td>
            <td><Link to={`/edit/${value._id}`} className='btn btn-primary'>Edit</Link></td>
            <td><button className='btn btn-danger' onClick={()=>deleteData(value._id)}  >Remove</button></td>
            </tr>
        )
    })}
   
      </tbody>
      
      </table>
     <NavLink to='/Create'><button className='btn btn-success mx-5 my-2'>Post</button></NavLink>
    </div>
  )
}

export default Home
