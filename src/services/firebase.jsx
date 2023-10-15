import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-VJhSZKKC4hejmeQI_Zd84A8x8sfDfQA",
  authDomain: "just-smiles-0.firebaseapp.com",
  projectId: "just-smiles-0",
  storageBucket: "just-smiles-0.appspot.com",
  messagingSenderId: "935821144659",
  appId: "1:935821144659:web:fcce3f578594237bca8ca6",
  measurementId: "G-PGW9PZN1C8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { firestore, auth };
