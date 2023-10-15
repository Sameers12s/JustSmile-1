import { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updatePassword as updatePasswordFB,
} from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function signup(email, password, confirmPassword, name, username) {
    // email, password, confirmpassword, username, name
    // [x] match password and confirm password
    // [ ] check if username is unique and available else error
    // [x] create user and login
    // [x] update profile with profilePic and Name
    // [ ] store username in firestore in doc(users/<uid>/)
    // [ ] redirect to settings
    if (password !== confirmPassword)
      return { success: false, error: "Passwords do not match" };

    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    newUser.updateProfile({
      displayName: name,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    });
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
