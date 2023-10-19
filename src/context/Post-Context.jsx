import { collection, getDoc, doc, addDoc } from "firebase/firestore";
import { useContext, useState, createContext } from "react";
import { firestore } from "../services/firebase";
import { useAuth } from "./auth-context";

const PostContext = createContext();

export function usePost() {
  return useContext(PostContext);
}

export function PostProvider({ children }) {
  const { currentUser } = useAuth();

  const postRef = collection(firestore, "posts");

  async function createPost(content) {
    const docRef = doc(firestore, "users", currentUser.uid);
    const docSnap = await getDoc(docRef);

    await addDoc(postRef, {
      content,
      uid: currentUser.uid,
      author_fullname: currentUser.displayName,
      author_username: docSnap.data().username,
      created_at: Date.now(),
      total_comments: 0,
      total_likes: 0,
    });
  }

  const value = { createPost };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}
