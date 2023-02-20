import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXciFqD2wZuuF_HDFa2gv96-ymqthSvjQ",
  authDomain: "chatgpt-ai-yt.firebaseapp.com",
  projectId: "chatgpt-ai-yt",
  storageBucket: "chatgpt-ai-yt.appspot.com",
  messagingSenderId: "599158318611",
  appId: "1:599158318611:web:5d465c21cc40b2244281e6",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
