import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home"
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import FollowersFollowing from '../pages/FollowersFollowing';
import Messenger from '../pages/Messenger'
import Notification from '../pages/Notification'
import Search from '../pages/Search'
import Setting from '../pages/Setting'
import PageNotFound from "../pages/PageNotFound";
import AddPostPopup from "../components/AddPostPopup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/followers-followings",
    element: <FollowersFollowing />,
  },
  {
    path: "/messages",
    element: <Messenger />,
  },
  {
    path: "/notifications",
    element: <Notification />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },

  //test pages
  {
    path:"/test",
    element:<AddPostPopup/>,
  },
]);

export default router;