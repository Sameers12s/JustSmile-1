import { useState } from "react";
import Accounts from "../components/AccountComponents/Accounts";
import SearchbarItem from "../components/SearchbarItem";
import { LayoutNavbarCollapse } from "tabler-icons-react";
import Post from "../components/Post";

const Account = () => {
  const [activeTab, setActiveTab] = useState("ACCOUNTS");

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
          >
            <h1 className="px-2">YOUR POST</h1>
          </SearchbarItem>

          <SearchbarItem
            isActive={activeTab === "LIKED BY YOU"}
            onClick={() => handleTabClick("LIKED BY YOU")}
          >
            <h1>LIKED BY YOU</h1>
          </SearchbarItem>
        </div>

        {/* dropdown box */}

        <div className="flex basis-4/6 justify-end text-center w-full">
          <h1 className="flex justify-end w-full items-center font-bold text-neutral-600">
            SORT BY
          </h1>
          <div className="flex w-full justify-end">
            <button className="btn ">MOST LIKED</button>
          </div>

          {/**  ----------------------------- */}
        </div>
      </div>
      <div>
        <Post />
      </div>
    </div>
  );
};

export default Account;
