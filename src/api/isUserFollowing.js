import { and, collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../services/firebase";

async function isUserFollowing(uid, fuid) {
  const followingRef = collection(firestore, "following");
  const getfollowing = query(
    followingRef,
    and(where("following_uid", "==", fuid), where("follower_uid", "==", uid))
  );
  const snapshot = await getDocs(getfollowing);
  const isfollow = !snapshot.empty;
  return isfollow;
}
export default isUserFollowing;
