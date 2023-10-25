import { useContext, useState, useEffect, createContext } from "react";
import { auth, firestore } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updatePassword as updatePasswordFB,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  getDocs,
  doc,
  query,
  where,
  setDoc,
} from "firebase/firestore";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function signup(name, username, email, password, confirmPassword) {
    if (password !== confirmPassword)
      return {
        success: false,
        error: alert("Passwords do not match"),
      };
    const searchUsername = await query(
      collection(firestore, "users"),
      where("username", "==", username)
    );
    const querySnapshot = await getDocs(searchUsername);
    if (!querySnapshot.empty) {
      return {
        success: false,
        error: alert("Username is already taken"),
      };
    }

    const newUserCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const newUser = newUserCred.user;
    await updateProfile(newUser, {
      displayName: name,
    });

    const userRef = doc(firestore, "users", newUser.uid);
    await setDoc(userRef, {
      name,
      username,
      bio: "",
      githubp: "",
      linkedinp: "",
      profile_img: "",
      twitterp: "",
    });

    await setDoc(doc(firestore, "userChats", newUser.uid), {});

    return {
      success: true,
      user: newUser,
    };
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updatePassword(password) {
    return updatePasswordFB(currentUser, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
