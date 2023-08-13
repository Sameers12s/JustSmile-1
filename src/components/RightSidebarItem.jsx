import classNames from "classnames";
import { Link } from "react-router-dom";

const RightSidebarItem = ({ children }) => {
  return (
    <div className="flex flex-row h-36 rounded-lg justify-center items-center text-center bg-neutrals-800 font-bold">
      <div className="stats bg-neutrals-800">
        <div className="stat px-2 place-items-center">
          <div className="stat-figure"></div>
          <div className="stat-value text-xl">100K</div>
          <div className="stat-desc">FOLLOWING</div>
        </div>

        <div className="stat px-2 place-items-center border-transparent">
          <div className="stat-figure"></div>
          <div className="stat-value text-xl">100K</div>
          <div className="stat-desc">FOLLOWERS</div>
        </div>
      </div>
    </div>
  );
};

const RightSidebar = ({ children }) => {
  return <div className="w-full h-36 rounded-lg bg-neutrals-800 "></div>;
};
export default RightSidebarItem;
