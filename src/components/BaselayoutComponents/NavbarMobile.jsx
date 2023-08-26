import { useRef } from "react";
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

const NavbarMobile = () => {
  const modal = useRef();

  function open() {
    modal.current?.showModal();
  }

  return (
    <div className="flex flex-row w-full h-full items-center">
      <SidebarButtons isActive={false} link={"home"}>
        <IconTable />
      </SidebarButtons>
      <div className="flex-1"></div>

      <SidebarButtons link={"notifications"}>
        <IconBell />
      </SidebarButtons>
      <div className="flex-1"></div>
      <button
        className="btn btn-primary justify-start h-14 rounded-xl font-bold"
        onClick={open}
      >
        <IconPlus />
      </button>
      <div className="flex-1"></div>

      <SidebarButtons link={"messages"}>
        <IconMessageCircle2 />
      </SidebarButtons>
      <div className="flex-1"></div>

      <SidebarButtons link={"search"}>
        <IconSearch />
      </SidebarButtons>

      <dialog ref={modal}>
        <AddPostPopup close={() => modal.current?.hideModal()} />
      </dialog>
    </div>
  );
};

export default NavbarMobile;
