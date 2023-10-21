import { useState } from "react";
import Accounts from "../components/AccountComponents/Accounts";
import SearchbarItem from "../components/SearchbarItem";
import { Outlet } from "react-router-dom";

const Account = () => {
  const [activeTab, setActiveTab] = useState("YOUR POST");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  document.title = "JustSmile | Account";
  return (
    <div>
      <div>
        <Accounts />
      </div>
      <div className="flex flex-row justify-around w-full py-2 px-2">
        <div className="flex w-full justify-start">
          <SearchbarItem
            isActive={activeTab === "YOUR POST"}
            onClick={() => handleTabClick("YOUR POST")}
            link={"yourPosts"}
          >
            <h1 className="px-4">YOUR POST</h1>
          </SearchbarItem>

          <SearchbarItem
            isActive={activeTab === "LIKED BY YOU"}
            onClick={() => handleTabClick("LIKED BY YOU")}
            link={"LikedByYou"}
          >
            <h1 className="px-4">LIKED BY YOU</h1>
          </SearchbarItem>
        </div>

        {/* dropdown box */}

        <div className="flex basis-4/6 justify-end text-center w-full">
          <div className="flex w-full justify-end">
            <details className="dropdown dropdown-bottom dropdown-end">
              <summary className="btn">SORT BY</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-36">
                <li>
                  <a>MOST LIKED</a>
                </li>
                <li>
                  <a>RECENT</a>
                </li>
              </ul>
            </details>
          </div>

          {/**  ----------------------------- */}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Account;
