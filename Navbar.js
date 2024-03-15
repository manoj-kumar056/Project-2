import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './style.css'
import { UseAuth } from './Auth'
const Navbar = () => {
  const auth = UseAuth();
  return (
    <div>
     <nav className='navbar'> 
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/service'>Service</NavLink>
      {!auth.user &&  <NavLink to='/login'>Login</NavLink> }
       {!auth.user && <NavLink to='/signup'>Signup</NavLink> }
        
        


</nav>
</div>
)
}
export default Navbar