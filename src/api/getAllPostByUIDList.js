import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { firestore } from "../services/firebase";

export default async function getAllPostByUIDList(uidList) {
  const postRef = collection(firestore, "posts");
  const getUserPost = query(
    postRef,
    orderBy("created_at", "desc"),
    where("uid", "in", uidList)
  );
  const querySnapshot = await getDocs(getUserPost);
  const posts = [];
  querySnapshot.forEach((doc) => posts.push({ id: doc.id, ...doc.data() }));
  return posts;
}
