import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../services/firebase";

async function getAllUser() {
  const userref = collection(firestore, "users");

  const querySnapshot = await getDocs(userref);
  const allUsers = [];
  querySnapshot.forEach((doc) => allUsers.push({ id: doc.id, ...doc.data() }));
  return allUsers;
}

export default getAllUser;
