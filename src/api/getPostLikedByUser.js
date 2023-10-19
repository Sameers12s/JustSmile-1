import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../services/firebase";

async function getPostLikedByUser(postDocId, uid) {
  const likesRef = doc(firestore, "posts", postDocId, "likes", uid);
  const snapshot = await getDoc(likesRef);
  const likeByUser = snapshot.exists();

  return likeByUser;
}
export default getPostLikedByUser;
