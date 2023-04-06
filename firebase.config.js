import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyACZCwxkI3uB27vsCV7kCl4NBge8vAeEns",
  authDomain: "travel-advice-b1c29.firebaseapp.com",
  databaseURL: "https://travel-advice-b1c29-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "travel-advice-b1c29",
  storageBucket: "travel-advice-b1c29.appspot.com",
  messagingSenderId: "284735119536",
  appId: "1:284735119536:web:55ccb10cb4b29e5e2c9b75"
};

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};