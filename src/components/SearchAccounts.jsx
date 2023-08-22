import UserNames from "../components/UserNames";
const SearchAccounts = () => {
  document.title = "JustSmile | Search - Accounts";
  return (
    <div className="flex h-auto w-full justify-center items-center rounded-lg bg-neutrals-800 p-5">
      <UserNames />
    </div>
  );
};

export default SearchAccounts;
