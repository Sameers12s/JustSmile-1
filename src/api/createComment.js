import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../services/firebase";

async function createComment(uid, postDocId, comment, name) {
  const commentRef = collection(firestore, "posts", postDocId, "comments");

  await addDoc(commentRef, {
    name,
    content: comment,
    uid: uid,
    created_at: Date.now(),
  });
}

export default createComment;
