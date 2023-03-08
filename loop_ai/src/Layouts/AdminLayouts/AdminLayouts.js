import React, { useEffect } from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
const AdminLayouts = () => {
  let navigate = useNavigate();
  useEffect(()=> {
    if(! localStorage.getItem("token")) {
      navigate("/admin")
      }
  })

  return (
    <div>
<Outlet/>
    </div>
  )
}

export default AdminLayouts