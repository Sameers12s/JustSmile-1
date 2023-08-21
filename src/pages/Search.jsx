import UserNames from '../components/UserNames';
import SearchBar from '../components/SearchBar'


const Search = () => {
  document.title = "JustSmile | Search"
  return (
    <di>
      <div>
        <SearchBar />

      </div>
      <div className="flex h-auto w-full items-center justify-center overflow-hidden py-4">
        <div className="flex h-auto w-full justify-center items-center rounded-lg bg-neutrals-800 p-5" >
          <UserNames>

          </UserNames>
        </div>
      </div>

    </di>
  );
};

export default Search;
