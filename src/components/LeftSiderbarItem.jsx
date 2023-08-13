import classNames from "classnames";
import { Link } from "react-router-dom";

const SidebarItem = ({ children, type = "secondary", isActive = false }) => {
  "btn-primary";
  return (
    <button
      className={classNames(
        `relative btn btn-${type} h-16 justify-start font-bold rounded-xl hover:bg-neutrals-800`,
        {
          "bg-transparent": !isActive,
          "border-transparent": !isActive,
        }
      )}
    >
      {children}
      {isActive && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-[6px] rounded-lg bg-primary"></div>
      )}
    </button>
  );
};

export default SidebarItem;
