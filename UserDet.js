import React from 'react';
import { useParams } from 'react-router-dom';
const UserDet = () => {
    const {userId}=useParams()
  return (
    <div>
      Details of indivival Users{userId}
    </div>
  )
}
export default UserDet
