import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../services/firebase";

export default async function getCurrentUserDetails(uid) {
  const userRef = doc(firestore, "users", uid);
  const docSnap = await getDoc(userRef);
  const userData = docSnap.data();
  return userData;
}
