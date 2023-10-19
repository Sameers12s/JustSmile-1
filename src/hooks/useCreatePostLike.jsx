import { useAuth } from "../context/auth-context";
import { firestore } from "../services/firebase";

function useCreatePostLike() {
  const { currentUser } = useAuth();

  return console.log(currentUser);
}

export default useCreatePostLike;
