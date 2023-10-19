import UserNames from "../UserNames";
import { useAuth } from "../../context/auth-context";
import getFollowingByUID from "../../api/getFollowingByUID";
import { useQuery } from "react-query";
import {
  collection,
  doc,
  documentId,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../../services/firebase";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

async function getAllFollowing(followers) {
  const followingRef = collection(firestore, "following");
  const getfollower = query(
    followingRef,
    where("following_uid", "in", followers)
  );
  const querySnapshot = await getDocs(getfollower);
  const allFollowing = [];
  querySnapshot.forEach((doc) => allFollowing.push({ ...doc.data() }));
  return allFollowing;
}

function searchText(text, target) {
  return text.toLowerCase().includes(target.toLowerCase());
}

const Following = () => {
  const { currentUser } = useAuth();
  const [filteredList, setFilteredList] = useState([]);
  const { searchTerm } = useOutletContext();

  const { data: following, isLoading: followingLoading } = useQuery(
    ["followers", currentUser.uid],
    () => getFollowingByUID(currentUser.uid)
  );
  const { data: userdeails } = useQuery(
    ["followers-user-detail", currentUser.uid],
    () => getAllFollowing(following),
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
          <UserNames Name={p.name} ExtraInfo={p.username} />
        </div>
      ))}
    </div>
  );
};

export default Following;
