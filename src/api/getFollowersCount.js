import {
  collection,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../services/firebase";

async function getFollowersCount(uid) {
  const followersRef = collection(firestore, "following");
  const getFollowerCount = query(
    followersRef,
    where("following_uid", "==", uid)
  );
  const snapshot = await getCountFromServer(getFollowerCount);

  const totalFollowers = snapshot.data().count;
  return totalFollowers;
}
export default getFollowersCount;
