import { useRef, useState } from "react";
import AddPostPopup from "../Popups/AddPostPopup";
import SidebarButtons from "../SidebarButtons";
import {
  IconBell,
  IconMessageCircle2,
  IconPlus,
  IconSearch,
  IconSettings,
  IconTable,
  IconUser,
} from "@tabler/icons-react";
import { useAuth } from "../../context/auth-context";

const LeftSidebar = () => {
  const { currentUser } = useAuth();
  const modal = useRef();
  const [activeTab, setActiveTab] = useState("home");

  function open() {
    modal.current?.showModal();
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col h-full p-4 pt-0 space-y-1 ">
      <button
        className="btn btn-primary justify-start h-16 rounded-xl font-bold"
        onClick={open}
      >
        <IconPlus />
        NEW POST
      </button>

      <SidebarButtons
        isActive={activeTab === "home"}
        onClick={() => handleTabClick("home")}
        link={"home"}
      >
        <IconTable />
        FEED
      </SidebarButtons>

      <SidebarButtons
        isActive={activeTab === "notifications"}
        onClick={() => handleTabClick("notifications")}
        link={"notifications"}
      >
        <IconBell />
        NOTIFICATIONS
      </SidebarButtons>

      <SidebarButtons
        isActive={activeTab === "messages"}
        onClick={() => handleTabClick("messages")}
        link={"messages"}
      >
        <IconMessageCircle2 />
        MESSAGES
      </SidebarButtons>

      <SidebarButtons
        isActive={activeTab === "search"}
        onClick={() => handleTabClick("search")}
        link={"search"}
      >
        <IconSearch />
        SEARCH
      </SidebarButtons>
      <div className="flex-1"></div>
      <SidebarButtons
        isActive={activeTab === "account"}
        onClick={() => handleTabClick("account")}
        link={`account/${currentUser.uid}`}
      >
        <IconUser />
        ACCOUNT
      </SidebarButtons>

      <SidebarButtons
        isActive={activeTab === "setting"}
        onClick={() => handleTabClick("setting")}
        link={"setting"}
      >
        <IconSettings />
        SETTINGS
      </SidebarButtons>

      <dialog className="modal modal-bottom sm:modal-middle" ref={modal}>
        <AddPostPopup close={() => modal.current?.close()} />
      </dialog>
    </div>
  );
};

export default LeftSidebar;
