import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext  } from '../Auth'
const Home = () => {

    const {access,setaccess}=useContext(AuthContext)
    const[loading,setloading]=useState(false)
const navigate=useNavigate()


    useEffect(()=>{
        const newaccess=async()=>{
            const accessurl=await axios.post("http://localhost:4000/apis/refresh",{},{withCredentials:true});
            if(accessurl.data.success){
            setaccess(accessurl.data.access)
           
            }else{
            
                navigate("/")
            
            
            }
        }
        newaccess();
        },[])


        useEffect(()=>{
            if(!access){
               setloading(true)
            }else{
                setloading(false)
            }
        
        },[])

  return (
    <div>
        <h1>Home  {access}</h1>
      {loading && "Loading...."}
    </div>
  )
}

export default Home
