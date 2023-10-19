import { collection, deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../services/firebase";

async function createPostLike(uid, postDocId) {
  const likesRef = doc(firestore, "posts", postDocId, "likes", uid);
  const querySnapshot = await getDoc(likesRef);

  if (!querySnapshot.exists()) {
    await setDoc(likesRef, {
      uid: uid,
      created_at: Date.now(),
    });
  } else {
    await deleteDoc(likesRef);
  }
}

export default createPostLike;
