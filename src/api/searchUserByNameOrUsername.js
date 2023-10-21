import {
  collection,
  getDocs,
  orderBy,
  query,
  startAt,
} from "firebase/firestore";
import { firestore } from "../services/firebase";

export default async function searchUserByNameOrUsername(nameOrUsername) {
  const usersRef = collection(firestore, "users");
  const getUserList = query(usersRef, orderBy("name"), startAt(nameOrUsername));
  const querySnapshot = await getDocs(getUserList);
  const usersList = [];
  querySnapshot.forEach((doc) => usersList.push(doc.data()));
  console.log(usersList);
}
