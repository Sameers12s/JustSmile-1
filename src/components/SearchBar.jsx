import React, { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import SearchbarItem from "./SearchbarItem";
import SearchHashtags from "./SearchHashtags";

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState("ACCOUNTS");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col bg-neutrals-800 h-full w-full rounded-lg mb-3">
      <div className="flex flex-col border-b-2 border-neutrals-900 p-4">
        <div className="flex justify-start items-start font-bold text-lg pb-4">
          SEARCH
        </div>
        <div className="join items-center justify-center bg-neutrals-900 w-full">
          <input
            id="email"
            placeholder="Search accounts or posts by hashtags"
            className="h-16 input w-full rounded-lg text-bold pl-2 focus:outline-none"
            required
          />
          <div className="join-item pr-2 rounded-full ">
            <IconSearch />
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full justify-center items-center py-4">
        <div className="flex w-full justify-center border-r-2 border-r-neutrals-900">
          <SearchbarItem
            isActive={activeTab === "ACCOUNTS"}
            onClick={() => handleTabClick("ACCOUNTS")}
            link={"SearchAccounts"}
          >
            ACCOUNTS
          </SearchbarItem>
        </div>

        <div className="flex w-full justify-center">
          <SearchbarItem
            isActive={activeTab === "HASHTAGS"}
            onClick={() => handleTabClick("HASHTAGS")}
            link={"SearchHashtags"}
          >
            HASHTAGS
          </SearchbarItem>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
