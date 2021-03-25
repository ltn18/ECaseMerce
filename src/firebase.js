import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtP_6jM9HsuE1aeDmF401T8crsjU5qOrc",
    authDomain: "clone-9ac61.firebaseapp.com",
    projectId: "clone-9ac61",
    storageBucket: "clone-9ac61.appspot.com",
    messagingSenderId: "202079585716",
    appId: "1:202079585716:web:48d10dc3a8669bdb9b9ee1",
    measurementId: "G-EGSS1NFSXD"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

