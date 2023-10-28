import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2fBRLXgq8-cMcOPWjR234vTeOtXszFV4",
  authDomain: "just-smiles-12.firebaseapp.com",
  projectId: "just-smiles-12",
  storageBucket: "just-smiles-12.appspot.com",
  messagingSenderId: "32627769695",
  appId: "1:32627769695:web:cd691232da10dc769f36ea",
  measurementId: "G-ZK17Y7156N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { firestore, auth };
