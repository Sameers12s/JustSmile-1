import {
  and,
  collection,
  getDocs,
  or,
  orderBy,
  query,
  startAt,
  where,
} from "firebase/firestore";
import { firestore } from "../services/firebase";
import UserNames from "../components/UserNames";

export default async function searchUserByNameOrUsername(nameOrUsername) {
  const usersRef = collection(firestore, "users");
  const getUserList = query(usersRef, orderBy("name"), startAt(nameOrUsername));
  const querySnapshot = await getDocs(getUserList);
  const usersList = [];
  querySnapshot.forEach((doc) => usersList.push(doc.data()));
  console.log(usersList);
}
