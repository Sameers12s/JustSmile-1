import FollowersFollowingTab from "./FollowersFollowingTab";
import FriendsTab from "./FriendsTab";
const RightSidebar = () => {
  return (
    <div className="flex flex-col h-full px-4 pb-4 space-y-4">
      <FollowersFollowingTab />
      <FriendsTab />
    </div>
  );
};

export default RightSidebar;
