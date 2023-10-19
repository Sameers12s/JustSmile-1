import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

const FollowersFollowing = () => {
  document.title = "JustSmile | Followers & Following";
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <SearchBar
        lefttab="FOLLOWERS"
        righttab="FOLLOWING"
        setSearchTerm={setSearchTerm}
        searchbar="Search in followers or following"
        link={{ link: "Followers", link1: "Following" }}
      />
      <div className="flex h-full w-full">
        <Outlet context={{ searchTerm }} />
      </div>
    </div>
  );
};

export default FollowersFollowing;
