// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendEmailVerification,
  signInWithRedirect,
  EmailAuthProvider,
  updateProfile,
  updateEmail,
  updatePassword,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDoc,
  setDoc,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
  serverTimestamp,
  arrayUnion,
  onSnapshot,
} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWJE0ytStDj7tYrYe9cc7aYwh4IqMNLAI",
  authDomain: "crystaveey-atelier.firebaseapp.com",
  projectId: "crystaveey-atelier",
  storageBucket: "crystaveey-atelier.appspot.com",
  messagingSenderId: "778305329441",
  appId: "1:778305329441:web:a6b8d8e8df7d04c82ec660",
  measurementId: "G-ETN424LPW4",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date().toISOString();

    const middleName = "";
    const gender = "";
    const dateOfBirth = "";
    const phoneNumber = "";
    const country = "";
    const lastLogin = serverTimestamp();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        photoURL,
        middleName,
        gender,
        dateOfBirth,
        phoneNumber,
        country,
        createdAt,
        lastLogin,
        ...additionalData,
      });
      //await updateDoc(userRef, { lastLoginAt});
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

const googleProvider = new GoogleAuthProvider();

export {
  auth,
  storage,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendEmailVerification,
  signInWithRedirect,
  googleProvider,
  EmailAuthProvider,
  updateProfile,
  updateEmail,
  updatePassword,
  db,
  collection,
  query,
  where,
  getDoc,
  setDoc,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
  serverTimestamp,
  arrayUnion,
  onSnapshot,
};
