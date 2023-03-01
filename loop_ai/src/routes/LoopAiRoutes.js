import { useRoutes,useLocation } from "react-router-dom";

import UserLayouts from "../Layouts/AdminLayouts/UserLayouts";
import userRoutes from "./User/User";

import Login from "../components/pages/Login/Login"
import Register from "../components/pages/Register/Register";
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
// {
//   path : "*",
//   element: <NotFoundError />
// },
  ])
  return (router);
}


export default LoopAiRoutes;