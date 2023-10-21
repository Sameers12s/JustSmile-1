import UserNames from "../UserNames";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import getAllUser from "../../api/getAllUser";

function searchText(text, target) {
  return text.toLowerCase().includes(target.toLowerCase());
}

const SearchAccounts = () => {
  const [filteredList, setFilteredList] = useState([]);
  const { searchTerm } = useOutletContext();

  const { data: userdeails } = useQuery(["all-user-detail"], () =>
    getAllUser()
  );

  useEffect(() => {
    if (!userdeails) return;
    const filteredUsers = userdeails.filter(
      (u) =>
        searchText(u.name, searchTerm) || searchText(u.username, searchTerm)
    );
    setFilteredList(filteredUsers);
  }, [userdeails, searchTerm]);

  document.title = "JustSmile | Search - Accounts";

  return (
    <div className="flex h-full w-full flex-col">
      {searchTerm ? (
        <div>
          {filteredList?.map((p) => (
            <div
              key={p.id}
              className="flex h-full w-full justify-center mb-3 items-center rounded-lg bg-neutrals-800 p-5"
            >
              <UserNames Name={p.name} ExtraInfo={p.username} uid={p.id} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SearchAccounts;
