import { useRef } from "react";
import AddPostPopup from "./AddPostPopup";
import SidebarButtons from "./SidebarButtons";
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
  const modal = useRef();

  function open() {
    modal.current?.showModal();
  }

  return (
    <div className="flex flex-col h-full px-4 py-1 space-y-1">
      <button
        className="btn btn-primary justify-start h-16 rounded-xl font-bold"
        onClick={open}
      >
        <IconPlus />
        NEW POST
      </button>

      <SidebarButtons isActive={true}>
        <IconTable />
        FEED
      </SidebarButtons>

      <SidebarButtons link={"notification"}>
        <IconBell />
        NOTIFICATIONS
      </SidebarButtons>

      <SidebarButtons link={"notification"}>
        <IconMessageCircle2 />
        MESSAGES
      </SidebarButtons>

      <SidebarButtons>
        <IconSearch />
        SEARCH
      </SidebarButtons>
      <div className="flex-1"></div>
      <SidebarButtons>
        <IconUser />
        ACCOUNT
      </SidebarButtons>

      <SidebarButtons>
        <IconSettings />
        SETTINGS
      </SidebarButtons>

      <dialog ref={modal}>
        <AddPostPopup close={() => modal.current?.hideModal()} />
      </dialog>
    </div>
  );
};

export default LeftSidebar;
