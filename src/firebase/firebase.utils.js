import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB26-X-Dj8aXrqcjteqkCkaYFErEt_q2UE",
  authDomain: "nik-cart-db.firebaseapp.com",
  databaseURL: "https://nik-cart-db.firebaseio.com",
  projectId: "nik-cart-db",
  storageBucket: "nik-cart-db.appspot.com",
  messagingSenderId: "312531639082",
  appId: "1:312531639082:web:8a1d3a0190354b734f5c53",
  measurementId: "G-Q3EK01C108"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'}) // always throw promt
export const signInWithGoogle =()=>auth.signInWithPopup(provider)

export default firebase