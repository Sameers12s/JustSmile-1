import { collection, getCountFromServer } from "firebase/firestore";
import { firestore } from "../services/firebase";

async function getCommentsCount(postDocId) {
  const commentRef = collection(
    collection(firestore, "posts"),
    postDocId,
    "comments"
  );
  const snapshot = await getCountFromServer(commentRef);

  const totalComments = snapshot.data().count;

  return totalComments;
}
export default getCommentsCount;
