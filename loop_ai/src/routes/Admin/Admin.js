import React from 'react';
import AddScreenShot from '../../components/Admin/pages/addScreenShot/addScreenShot';
import AdminLogin from '../../components/Admin/pages/AdminLogin/AdminLogin';

import Dashboard from "../../components/Admin/pages/Dashboard/Dashboard"

let AdminRoutes = [
  {
    path : "",
    element: <AdminLogin />
  },
  {
    path : "dashboard",
    element: <Dashboard />
  },
  {
    path : "addscreenshot",
    element: <AddScreenShot />
  },
]
export default AdminRoutes;
