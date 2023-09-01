import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Search = () => {
  document.title = "JustSmile | Search";
  return (
    <div className="w-full">
      <SearchBar lefttab="ACCOUNTS" righttab="HASHTAGS" searchbar="Search accounts or posts by hashtags" link={{ link: "SearchAccounts", link1: "SearchHashtags" }} />
      <div className="flex h-auto w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Search;
