import React from 'react';
import AdminLogin from '../../components/Admin/pages/AdminLogin/AdminLogin';

import Dashboard from "../../components/Admin/pages/Dashboard/Dashboard"

let AdminRoutes = [
  {
    path : "",
    element: <AdminLogin/>
  },
  {
    path : "dashboard",
    element: <Dashboard/>
  },
]
export default AdminRoutes;
