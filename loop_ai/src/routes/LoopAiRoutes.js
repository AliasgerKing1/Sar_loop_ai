import { useRoutes } from "react-router-dom";

import UserLayouts from "../Layouts/UserLayouts/UserLayouts";
import userRoutes from "./User/User";

import AdminLayouts from "../Layouts/AdminLayouts/AdminLayouts"
import AdminRoutes from "./Admin/Admin";

import Login from "../components/pages/Login/Login"
import Register from "../components/pages/Register/Register";
import Error404 from "../components/pages/Error404/Error404";
const LoopAiRoutes = () => {
  // let location = useLocation();
  // console.log(location)
const router = useRoutes([

    {
      path : "/",
      element: <Login />
    },
    {
      path : "/register",
      element: <Register />
    },
{
  path : "/auth",
  element: <UserLayouts/>,
  children : userRoutes
},
{
  path : "/admin",
  element: <AdminLayouts/>,
  children : AdminRoutes
},
{
  path : "*",
  element: <Error404 />
},
  ])
  return (router);
}


export default LoopAiRoutes;