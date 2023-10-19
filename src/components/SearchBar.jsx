import React, { useEffect, useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import SearchbarItem from "./SearchbarItem";
import searchUserByNameOrUsername from "../api/searchUserByNameOrUsername";

const SearchBar = (props) => {
  const [nameOrUsername, setNameOrUsername] = useState("");
  const [activeTab, setActiveTab] = useState(props.lefttab);

  useEffect(() => {
    props.setSearchTerm(nameOrUsername);
  }, [nameOrUsername]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    searchUserByNameOrUsername(nameOrUsername);
  };
  return (
    <div className="flex flex-col bg-neutrals-800 h-full w-full rounded-lg mb-3">
      <div className="flex flex-col border-b-2 border-neutrals-900 p-4">
        <div className="flex justify-start items-start font-bold text-lg pb-4">
          SEARCH
        </div>
        <form
          className="join items-center justify-center bg-neutrals-900 w-full"
          onSubmit={handleSearch}
        >
          <input
            placeholder={props.searchbar}
            className="h-16 input w-full rounded-lg text-bold pl-2 focus:outline-none"
            required
            value={nameOrUsername}
            onChange={(e) => setNameOrUsername(e.target.value)}
          />
          <button
            className="join-item pr-2 rounded-full "
            type="submit"
            value="submit"
          >
            <IconSearch />
          </button>
        </form>
      </div>

      <div className="flex flex-row w-full justify-center items-center py-4">
        <div className="flex w-full justify-center border-r-2 border-r-neutrals-900">
          <SearchbarItem
            isActive={activeTab === props.lefttab}
            onClick={() => handleTabClick(props.lefttab)}
            link={props.link.link}
          >
            {props.lefttab}
          </SearchbarItem>
        </div>

        <div className="flex w-full justify-center">
          <SearchbarItem
            isActive={activeTab === props.righttab}
            onClick={() => handleTabClick(props.righttab)}
            link={props.link.link1}
          >
            {props.righttab}
          </SearchbarItem>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

SearchBar.defaultProps = {
  link: "",
  link1: "",
};
