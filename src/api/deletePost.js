import { deleteDoc, doc } from "firebase/firestore";
import { firestore } from "../services/firebase";

async function deletePost(postDocId) {
  const postRef = doc(firestore, "posts", postDocId);

  await deleteDoc(postRef);
}

export default deletePost;
