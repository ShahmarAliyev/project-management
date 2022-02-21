import firebase from "firebase/app";

import " firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDDK4WTA0ItJQdMF-e2HZA0gIvUbuleGg",
  authDomain: "project-management-3c034.firebaseapp.com",
  projectId: "project-management-3c034",
  storageBucket: "project-management-3c034.appspot.com",
  messagingSenderId: "742695736236",
  appId: "1:742695736236:web:8026d59d0d41439ce72009",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timeStamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, timeStamp };
