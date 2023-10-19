import UserNames from "../UserNames";
import { useAuth } from "../../context/auth-context";
import getFollowerByUID from "../../api/getFollowersByUID";
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

async function getAllFollowers(followers) {
  const followingRef = collection(firestore, "following");
  const getfollower = query(
    followingRef,
    where("follower_uid", "in", followers)
  );
  const querySnapshot = await getDocs(getfollower);
  const allFollowers = [];
  querySnapshot.forEach((doc) => allFollowers.push({ ...doc.data() }));
  return allFollowers;
}

const Following = () => {
  const { currentUser } = useAuth();
  const { data: follower, isLoading: followerLoading } = useQuery(
    ["follower", currentUser.uid],
    () => getFollowerByUID(currentUser.uid)
  );

  const {
    data: userdeails,
    isLoading: userLoading,
    isError: userIsError,
    error: userError,
  } = useQuery(
    ["following-user-detail", currentUser.uid],
    () => getAllFollowers(follower),
    {
      enabled: !followerLoading,
    }
  );

  document.title = "JustSmile | followers-followings- Following";
  return (
    <div className="flex h-full w-full flex-col">
      {userdeails?.map((p) => (
        <div
          key={p.follower_uid}
          className="flex h-full w-full justify-center mb-3 items-center rounded-lg bg-neutrals-800 p-5"
        >
          <UserNames Name={p.name} ExtraInfo={p.username} />
        </div>
      ))}
    </div>
  );
};

export default Following;
