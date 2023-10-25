import { and, collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../services/firebase";

export async function getAllFollowing(followers, uid) {
  const followingRef = collection(firestore, "following");
  const getfollower = query(
    followingRef,
    and(
      where("following_uid", "in", followers),
      where("follower_uid", "==", uid)
    )
  );
  const querySnapshot = await getDocs(getfollower);
  const allFollowing = [];
  querySnapshot.forEach((doc) => allFollowing.push({ ...doc.data() }));

  return allFollowing;
}
