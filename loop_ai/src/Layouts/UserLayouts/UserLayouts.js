import React, { useEffect } from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
const UserLayouts = () => {
  let navigate = useNavigate();
  useEffect(()=> {
    if(! localStorage.getItem("token")) {
      navigate("/")
      }
  })

  return (
    <div>
<Outlet/>
    </div>
  )
}

export default UserLayouts