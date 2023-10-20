import { firestore } from "../services/firebase";
import { doc, updateDoc } from "firebase/firestore";

async function updateSocialLinks(
  uid,
  githubp = "",
  twitterp = "",
  linkedinp = ""
) {
  const userRef = doc(firestore, "users", uid);
  await updateDoc(userRef, {
    githubp,
    twitterp,
    linkedinp,
  });
}

export default updateSocialLinks;
