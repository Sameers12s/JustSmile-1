import FollowersFollowingTab from "./FollowersFollowingTab";
import FriendsTab from "./FriendsTab";
const RightSidebar = () => {
  return (
    <div className="min-w-[20rem] max-w-[20rem] hidden xl:block bg-neutrals-900 h-full">
      <div className="flex flex-col h-full p-4 py-4 pt-0 space-y-4 ">
        <FollowersFollowingTab />
        <FriendsTab title="FRIENDS" ButtonName="FIND FRIENDS" />
      </div>
    </div>
  );
};

export default RightSidebar;
