// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth,signOut,signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeKD9D6tyLt0QSpgD8_McdIUDFTKge-ck",
  authDomain: "media-ec554.firebaseapp.com",
  projectId: "media-ec554",
  storageBucket: "media-ec554.appspot.com",
  messagingSenderId: "389975068578",
  appId: "1:389975068578:web:09a2707f72e65120976cfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth = getAuth();
function signup (email, password){
  return createUserWithEmailAndPassword(auth,email,password);
   
}

export function logout(){
  return signOut(auth);
}
function login(email,password){
  return signInWithEmailAndPassword(auth,email,password);
}


