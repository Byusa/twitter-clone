import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_MIQEdJNjwa5k0NDUNJlCegY5QDp9pzo",
  authDomain: "twitter-clone-200e8.firebaseapp.com",
  projectId: "twitter-clone-200e8",
  storageBucket: "twitter-clone-200e8.appspot.com",
  messagingSenderId: "646323448777",
  appId: "1:646323448777:web:cb3ab938c8522d58af1618",
  measurementId: "G-M5FDT62WVE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
