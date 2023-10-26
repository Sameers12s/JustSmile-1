import { deleteDoc, doc } from "firebase/firestore";
import { firestore } from "../services/firebase";

async function deleteComment(postDocId, id) {
  const commentRef = doc(firestore, "posts", postDocId, "comments", id);
  await deleteDoc(commentRef);
}

export default deleteComment;
