import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../services/firebase";

export default async function getFollowersByUID(uid) {
  const postRef = collection(firestore, "following");
  const getUserPost = query(postRef, where("following_uid", "==", uid));
  const querySnapshot = await getDocs(getUserPost);
  const followers = [];
  querySnapshot.forEach((doc) => followers.push(doc.data().follower_uid));
  return followers;
}
