import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../services/firebase";

export default async function getFollowingByUID(uid) {
  const followingRef = collection(firestore, "following");
  const getUserPost = query(followingRef, where("follower_uid", "==", uid));
  const querySnapshot = await getDocs(getUserPost);
  const following = [];
  querySnapshot.forEach((doc) => following.push(doc.data().following_uid));

  return following;
}
