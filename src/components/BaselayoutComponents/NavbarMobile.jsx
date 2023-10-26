import { useRef } from "react";
import AddPostPopup from "../Popups/AddPostPopup";
import SidebarButtons from "../SidebarButtons";
import {
  IconMessageCircle2,
  IconPlus,
  IconSearch,
  IconTable,
  IconUsers,
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

      <SidebarButtons link={"followers-followings/Followers"}>
        <IconUsers />
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

      <dialog className="modal modal-bottom sm:modal-middle" ref={modal}>
        <AddPostPopup close={() => modal.current?.close()} />
      </dialog>
    </div>
  );
};

export default NavbarMobile;
