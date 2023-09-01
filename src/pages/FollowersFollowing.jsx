import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const FollowersFollowing = () => {
  document.title = "JustSmile | Followers & Following"
  return (
    <div>
      <SearchBar lefttab="FOLLOWERS" righttab="FOLLOWING" searchbar="Search in followers or following" link={{ link: "Followers", link1: "Following" }} />
      <div className="flex h-auto w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default FollowersFollowing;
