import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate=useNavigate();
    const[field,setfield]=useState({email:"",password:""})
    const[access,setaccess]=useState("")
    const handlechange=(e)=>{
        setfield({
            ...field,[e.target.name]:e.target.value
        })
    }



 
const login=async()=>{
if (!field.email || !field.password){
    return alert("fill the fields")
}
const payload={
    email:field.email,
    password:field.password
}
const loginurl=await axios.post("http://localhost:4000/apis/login",payload,{withCredentials:true})
const access=loginurl.data.access;


setaccess(access)
if(loginurl.data.success){
    console.log(access)
    return navigate("/home")
}
   
  
    
}









return (
    <div>
       <h1>Login</h1>

      <input type="text" name='email'  value={field.email} placeholder='Email' onChange={handlechange} />
      <input type="password" name='password' value={field.password} placeholder='password' onChange={handlechange} />
      <button onClick={login}>Submit</button>
    </div>
  )
}
export default Login
