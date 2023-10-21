import { createBrowserRouter, Navigate } from "react-router-dom";
import BaseLayout from "../pages/layouts/BaseLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import FollowersFollowing from "../pages/FollowersFollowing";
import Messenger from "../pages/Messenger";
import Notification from "../pages/Notification";
import Search from "../pages/Search";
import Account from "../pages/Account";
import Setting from "../pages/Setting";
import PageNotFound from "../pages/PageNotFound";
import Tests from "../pages/Tests";
import SearchAccounts from "../components/SearchComponents/SearchAccounts";
import SearchHashtags from "../components/SearchComponents/SearchHashtags";
import Followers from "../components/FollowersFollowingComponents/Followers";
import Following from "../components/FollowersFollowingComponents/Following";
import YourPosts from "../components/AccountComponents/yourPosts";
import LikedByYou from "../components/AccountComponents/likedByYou";

export const ROUTES = {
  BaseLayout: "/",
  HOME: "/home",
  LOGIN: "/login",
  SIGNUP: "/signup",
  FOLLOWERS_FOLLOWING: "/followers-followings",
  MESSENGER: "/messages",
  NOTIFICATION: "/notifications",
  SEARCH: "/search",
  SETTING: "/setting",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate replace to="/home" />,
  },
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
        children: [
          {
            path: "/search",
            element: <Navigate replace to="/search/SearchAccounts" />,
          },
          { path: "SearchAccounts", element: <SearchAccounts /> },
          { path: "SearchHashtags", element: <SearchHashtags /> },
        ],
      },
      {
        path: "messages",
        element: <Messenger />,
        handle: {
          hideRightSidebar: "lg:hidden",
        },
      },
      {
        path: "notifications",
        element: <Notification />,
        handle: {
          hideRightSidebar: "lg:hidden",
        },
      },
      {
        path: "account/:uid",
        element: <Account />,
        children: [
          { path: "yourPosts", element: <YourPosts /> },
          { path: "LikedByYou", element: <LikedByYou /> },
        ],
      },
      {
        path: "setting",
        element: <Setting />,
        handle: {
          hideRightSidebar: "lg:hidden",
        },
      },
      {
        path: "/followers-followings",
        element: <FollowersFollowing />,
        children: [
          { path: "Followers", element: <Followers /> },
          { path: "Following", element: <Following /> },
        ],
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
