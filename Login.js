import React, {useEffect,useState}  from "react";
import {UseAuth} from './Auth';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Login=()=>
{
    const Navigate=useNavigate()
    const[username,setuserName]=useState('')
    const[password,setPassword]=useState('')
    const[userList,setuserList]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3003/usres")
        .then(res=>setuserList(res.data))
        .catch(err=>console.log(err))
    },[])

 const auth=UseAuth()
 const navigate = useNavigate()
 const handleLogin=(e)=>
 {
    e.preventDefault()
    const userExist=userList.some(u=>u.username === username && u.password === password)
    if(userExist){
        auth.Login(username)
        navigate('/')
    }
    else{
        alert("Invalid user and password")
    }
 }

    return(
        <div>
       <form onSubmit={handleLogin}>
       <label>Username:</label>
       <input type='text' value={username} onChange={(e)=>
        {setuserName(e.target.value)}}/><br></br>
   
       <label>Password:</label>
       <input type='password' value={password} onChange={(e)=>
       {setPassword(e.target.value)}}/><br></br>

      <button type='submit'>Login</button>
</form>
      <Link to="/signup">Already have an account? Signup</Link>
        </div>
    )
}

export default Login