import UserNames from "../UserNames";
import { useAuth } from "../../context/auth-context";
import getFollowerByUID from "../../api/getFollowersByUID";
import { useQuery } from "react-query";
import { and, collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../services/firebase";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

async function getAllFollowers(followers, uid) {
  const followingRef = collection(firestore, "following");
  const getfollower = query(
    followingRef,
    and(
      where("follower_uid", "in", followers),
      where("following_uid", "==", uid)
    )
  );
  const querySnapshot = await getDocs(getfollower);
  const allFollowers = [];
  querySnapshot.forEach((doc) => allFollowers.push({ ...doc.data() }));
  return allFollowers;
}

function searchText(text, target) {
  return text.toLowerCase().includes(target.toLowerCase());
}

const Following = () => {
  const { currentUser } = useAuth();
  const [filteredList, setFilteredList] = useState([]);
  const { searchTerm } = useOutletContext();

  const { data: follower, isLoading: followerLoading } = useQuery(
    ["follower", currentUser.uid],
    () => getFollowerByUID(currentUser.uid)
  );

  const { data: userdeails } = useQuery(
    ["follower-user-detail", currentUser.uid],
    () => getAllFollowers(follower, currentUser.uid),
    {
      enabled: !followerLoading,
    }
  );

  useEffect(() => {
    if (!userdeails) return;
    const filteredUsers = userdeails.filter(
      (u) =>
        searchText(u.follower_name, searchTerm) ||
        searchText(u.follower_username, searchTerm)
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
          <UserNames Name={p.follower_name} ExtraInfo={p.follower_username} />
        </div>
      ))}
    </div>
  );
};

export default Following;
