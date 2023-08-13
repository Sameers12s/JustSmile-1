import SidebarItem from "./LeftSiderbarItem";
import {
  IconBell,
  IconMessageCircle2,
  IconPlus,
  IconSearch,
  IconSettings,
  IconTable,
  IconUser,
} from "@tabler/icons-react";

const LeftSidebar = () => {
  return (
    <div className="flex flex-col h-full px-4 py-1 space-y-1">
      <button className="btn btn-primary justify-start h-16 rounded-xl font-extrabold">
        <IconPlus />
        NEW POST
      </button>

      <SidebarItem isActive={true}>
        <IconTable />
        FEED
      </SidebarItem>

      <SidebarItem>
        <IconBell />
        NOTIFICATIONS
      </SidebarItem>

      <SidebarItem>
        <IconMessageCircle2 />
        MESSAGES
      </SidebarItem>

      <SidebarItem>
        <IconSearch />
        SEARCH
      </SidebarItem>
      <div className="flex-1"></div>
      <SidebarItem>
        <IconUser />
        ACCOUNT
      </SidebarItem>

      <SidebarItem>
        <IconSettings />
        SETTINGS
      </SidebarItem>
    </div>
  );
};

export default LeftSidebar;
