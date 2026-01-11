import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const[field,setfield]=useState({name:"",email:"",password:""})
    const navigate=useNavigate();
const handlechange=(e)=>{
    setfield({
        ...field,[e.target.name]:e.target.value
    })
}

const handlesubmit=async()=>{
    if(!field.email || !field.name || !field.password){
        return alert("fill all the fields")
    }
    const payload={
        name:field.name,
        email:field.email,
        password:field.password
    }
const posturl=await axios.post("http://localhost:4000/apis/register",payload)
if(posturl.data.success){
return navigate("/")
}



}



  return (
    <div>
        <h1>Register</h1>
      <input type="text" name='name' value={field.name} placeholder='Name' onChange={handlechange} />
      <input type="text" name='email'  value={field.email} placeholder='Email' onChange={handlechange} />
      <input type="password" name='password' value={field.password} placeholder='password' onChange={handlechange} />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Register
