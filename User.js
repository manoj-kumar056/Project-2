import React from 'react';
import { Outlet } from 'react-router-dom';
const User = () => {
  return (
    <div>
      Here you can get user details
      <Outlet/>
    </div>
  )
}
export default User
