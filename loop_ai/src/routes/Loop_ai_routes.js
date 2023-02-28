import { useRoutes } from "react-router-dom";

import UserLayouts from "../layouts/UserLayouts/UserLayouts";
import userRoutes from "./User/User"

import Login from "../components/pages/Login/Login";
const Loop_ai_routes = () => {

const router = useRoutes([
    {
      path : "/",
      element: <Login />
    },
{
  path : "auth",
  element: <UserLayouts />,
  children : userRoutes
},
    // {
    //   path : "*",
    //   element: <Error />
    // },
  ])
  return (router);
}

export default Loop_ai_routes;