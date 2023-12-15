import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAAZjkczuJB8AIJ_G_O9NXWpZ9V8by14d4",
  authDomain: "react-chat-6f52d.firebaseapp.com",
  projectId: "react-chat-6f52d",
  storageBucket: "react-chat-6f52d.appspot.com",
  messagingSenderId: "595935671817",
  appId: "1:595935671817:web:5b8fe5c9efdbca208a6ad8",
  measurementId: "G-0H8PXEN2FE",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
