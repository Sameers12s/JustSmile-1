import { useRef } from "react";
import AddPostPopup from "./AddPostPopup";
import NavbarButtonMobile from "./NavbarButtonMobile";
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
      <NavbarButtonMobile isActive={false} link={"home"}>
        <IconTable />
      </NavbarButtonMobile>
      <div className="flex-1"></div>

      <NavbarButtonMobile link={"notifications"}>
        <IconBell />
      </NavbarButtonMobile>
      <div className="flex-1"></div>
      <button
        className="btn btn-primary justify-start h-14 rounded-xl font-bold"
        onClick={open}
      >
        <IconPlus />
      </button>
      <div className="flex-1"></div>

      <NavbarButtonMobile link={"messages"}>
        <IconMessageCircle2 />
      </NavbarButtonMobile>
      <div className="flex-1"></div>

      <NavbarButtonMobile link={"search"}>
        <IconSearch />
      </NavbarButtonMobile>

      <dialog ref={modal}>
        <AddPostPopup close={() => modal.current?.hideModal()} />
      </dialog>
    </div>
  );
};

export default NavbarMobile;
