import {
  addDoc,
  and,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../services/firebase";

async function follower(cuid, fuid) {
  const followingRef = collection(firestore, "following");
  const currentUserRef = doc(firestore, "users", cuid);
  const followingsRef = doc(firestore, "users", fuid);
  const docCSnap = await getDoc(currentUserRef);
  const docFSnap = await getDoc(followingsRef);
  const CuserData = docCSnap.data();
  const FuserData = docFSnap.data();
  const getfollowing = query(
    followingRef,
    and(where("following_uid", "==", fuid), where("follower_uid", "==", cuid))
  );
  const querySnapshot = await getDocs(getfollowing);

  if (querySnapshot.empty) {
    await addDoc(followingRef, {
      follower_name: CuserData.name,
      follower_uid: cuid,
      follower_username: CuserData.username,
      following_uid: fuid,
      name: FuserData.name,
      username: FuserData.username,
    });
  } else {
    await deleteDoc(doc(firestore, "following", querySnapshot.docs[0].id));
  }
}

export default follower;
