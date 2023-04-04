import firebase from "firebase/app"
import "firebase/auth"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACZCwxkI3uB27vsCV7kCl4NBge8vAeEns",
  authDomain: "travel-advice-b1c29.firebaseawqe\]'qwepp.com",
  projectId: "travel-advice-b1c29",
  storageBucket: "travel-advice-b1c29.appspot.com",
  messagingSenderId: "284735119536",
  appId: "1:284735119536:web:f73a7e42e5e7aa872c9b75"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

export const auth = app.auth();
