import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCnTk32dH9RYxpUFT8R7GvrC0gLuyKtfTc",
  authDomain: "crwn-clothing-db-7de76.firebaseapp.com",
  projectId: "crwn-clothing-db-7de76",
  storageBucket: "crwn-clothing-db-7de76.appspot.com",
  messagingSenderId: "207304658644",
  appId: "1:207304658644:web:7d9741fe467d7aa0273541",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
