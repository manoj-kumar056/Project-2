import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export const  Signup =() =>{
    const [username,setuserName]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const handlesignup=()=>{
        axios.post("http://localhost:3003/usres",{"username":
        username,"email":email,"password":password})
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }

    return(
   <div>

     <form action="" onSubmit={handlesignup}>
        <label>Username:</label>
    <input type='text' value={username} onChange={(e)=>
  {setuserName(e.target.value)}}/><br></br>
   
   <label>Password:</label>
    <input type='password' value={password} onChange={(e)=>
  {setPassword(e.target.value)}}/><br></br>
  
  <label>Email:</label>
    <input type='text' value={email} onChange={(e)=>
  {setEmail(e.target.value)}}/><br></br>

  <button type='submit'>Signup</button><br></br>

     </form>
<Link to="/login">Already have an account? login</Link>
   </div>
    )
}