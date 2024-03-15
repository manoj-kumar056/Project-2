import React from "react";
import { UseAuth } from "./Auth";

const Profile = ()=>

{
    const auth=UseAuth()
    const handleLogout=()=>{
    auth.Logout()
}
return(
    <div>
        Welcome {auth.user}<br></br>
        <button onClick={handleLogout}>Logout</button>
    </div>
)
}
export default Profile
