import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const SidebarButtons = ({
  children,
  type = "secondary",
  isActive = false,
  link = "/",
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
    onClick(link); // Notify parent about the button click
  };

  return (
    <button
      onClick={handleClick}
      className={classNames(
        `relative btn btn-${type} h-16 justify-start font-bold rounded-xl hover:bg-neutrals-800 hover:border-transparent`,
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

export default SidebarButtons;
