import { collection, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "../services/firebase";

async function getComments(postDocId) {
  const commentRef = collection(firestore, "posts", postDocId, "comments");
  const snapshot = await getDocs(commentRef);
  const comments = [];
  snapshot.forEach((doc) => comments.push({ id: doc.id, ...doc.data() }));
  return comments;
}
export default getComments;
