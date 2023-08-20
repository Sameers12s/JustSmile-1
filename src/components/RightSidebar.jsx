import FollowersFollowingTab from "./FollowersFollowingTab";
import FriendsTab from "./FriendsTab";
const RightSidebar = () => {
  return (
    <div className="flex flex-col h-full p-4 py-4 space-y-4">
      <FollowersFollowingTab />
      <FriendsTab />
    </div>
  );
};

export default RightSidebar;
