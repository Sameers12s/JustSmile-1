import RightSidebarItem from "./RightSidebarItem";
const RightSidebar = () => {
  return (
    <div className="flex flex-col h-full p-4 py-4 space-y-4">
      <RightSidebarItem />
      <div className="w-full flex-1 rounded-lg bg-neutrals-800"></div>
    </div>
  );
};

export default RightSidebar;
