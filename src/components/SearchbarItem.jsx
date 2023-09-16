import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const SearchbarItem = ({
  children,
  type = "secondary",
  isActive,
  link,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick(link);
    navigate(link);
  };

  return (
    <button
      onClick={handleClick}
      className={classNames(
        `relative h-full justify-start font-bold rounded-xl hover:border-transparent`,
        {
          "bg-transparent": !isActive,
          "border-transparent": !isActive,
        }
      )}
    >
      <div className="relative">
        {children}
        <div className="absolute inset-0 flex items-center justify-center transform translate-y-4">
          {isActive && (
            <div className="h-[6px] w-10 rounded-lg bg-primary"></div>
          )}
        </div>
      </div>
    </button>
  );
};

export default SearchbarItem;
