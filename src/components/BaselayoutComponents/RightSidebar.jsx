import FollowersFollowingTab from "./FollowersFollowingTab";
import FriendsTab from "../FriendsTab";
import { useNavigate } from "react-router-dom";

const RightSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="min-w-[20rem] max-w-[20rem] hidden xl:block bg-neutrals-900 h-full">
      <div className="flex flex-col h-full p-4 py-4 pt-0 space-y-4 ">
        <FollowersFollowingTab />
        <FriendsTab
          title="FRIENDS"
          ButtonName="FIND FRIENDS"
          link={() => navigate("/search/SearchAccounts")}
        />
      </div>
    </div>
  );
};

export default RightSidebar;
