import {
  collection,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../services/firebase";

async function getFollowingCount(uid) {
  const followingRef = collection(firestore, "following");
  const getFollowingCount = query(
    followingRef,
    where("follower_uid", "==", uid)
  );
  const snapshot = await getCountFromServer(getFollowingCount);

  const totalFollowing = snapshot.data().count;
  return totalFollowing;
}
export default getFollowingCount;
