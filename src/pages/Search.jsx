import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

const Search = () => {
  document.title = "JustSmile | Search";
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="w-full">
      <SearchBar
        lefttab="ACCOUNTS"
        righttab="HASHTAGS"
        setSearchTerm={setSearchTerm}
        searchbar="Search accounts or posts by hashtags"
        link={{ link: "SearchAccounts", link1: "SearchHashtags" }}
      />
      <div className="flex h-auto w-full">
        <Outlet context={{ searchTerm }} />
      </div>
    </div>
  );
};

export default Search;
