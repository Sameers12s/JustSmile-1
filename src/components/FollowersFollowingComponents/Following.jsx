import UserNames from "../UserNames";
import { useAuth } from "../../context/auth-context";
import getFollowingByUID from "../../api/getFollowingByUID";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { getAllFollowing } from "../../api/getAllFollowing";

function searchText(text, target) {
  return text.toLowerCase().includes(target.toLowerCase());
}

const Following = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [filteredList, setFilteredList] = useState([]);
  const { searchTerm } = useOutletContext();

  const { data: following, isLoading: followingLoading } = useQuery(
    ["following", currentUser.uid],
    () => getFollowingByUID(currentUser.uid)
  );

  const { data: userdeails } = useQuery(
    ["following-user-detail", currentUser.uid],
    () => getAllFollowing(following, currentUser.uid),
    {
      enabled: !followingLoading,
    }
  );

  useEffect(() => {
    if (!userdeails) return;
    const filteredUsers = userdeails.filter(
      (u) =>
        searchText(u.name, searchTerm) || searchText(u.username, searchTerm)
    );
    setFilteredList(filteredUsers);
  }, [searchTerm, userdeails]);

  document.title = "JustSmile | followers-followings- Following";
  return (
    <div className="flex h-full w-full flex-col">
      {filteredList?.map((p) => (
        <div
          key={p.following_uid}
          className="flex h-full w-full justify-center mb-3 items-center rounded-lg bg-neutrals-800 p-5"
        >
          <UserNames
            Name={p.name}
            ExtraInfo={"@" + p.username}
            link={() => navigate(`/account/${p.following_uid}`)}
            uid={p.following_uid}
          />
        </div>
      ))}
    </div>
  );
};

export default Following;
