import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import FollowersFollowing from "../pages/FollowersFollowing";
import Messenger from "../pages/Messenger";
import Notification from "../pages/Notification";
import Search from "../pages/Search";
import Setting from "../pages/Setting";
import PageNotFound from "../pages/PageNotFound";
import Tests from "../pages/Tests";

export const ROUTES = {
  HOME: "/home",
  LOGIN: "/login",
  SIGNUP: "/signup",
  FOLLOWERS_FOLLOWING: "/followers-followings",
  MESSENGER: "/home/messages",
  NOTIFICATION: "/home/notifications",
  SEARCH: "/home/search",
  SETTING: "/home/setting",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate replace to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "feed",
        element: <Search />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "messages",
        element: <Messenger />,
      },
      {
        path: "notifications",
        element: <Notification />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
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
    path: "*",
    element: <PageNotFound />,
  },

  //test pages
  {
    path: "/test",
    element: <Tests />,
  },
]);

export default router;
