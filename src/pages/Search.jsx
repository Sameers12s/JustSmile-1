import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Search = () => {
  document.title = "JustSmile | Search";
  return (
    <div className="w-full">
      <SearchBar />
      <div className="flex h-auto w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Search;
