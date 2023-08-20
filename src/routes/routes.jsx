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
import SettingPersonaldetail from "../components/SettingPersonaldetail";
import SocialLinks from "../components/SocialLinks";
import Security from "../components/Security";
import DangerZone from "../components/DangerZone";
import AppTheme from "../components/AppTheme";
import DeletePopup from "../components/DeletePopup";
import ProfilePictureCrop from "../components/ProfilePictureCrop";
import SearchBar from "../components/SearchBar";
import LeftSidebar from "../components/LeftSidebar";

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
    element:<SearchBar/>,
  },
  {
    path:"/test2",
    element:<LeftSidebar/>,
  },
]);

export default router;