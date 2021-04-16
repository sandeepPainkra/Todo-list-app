import firebase from "firebase";

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyDDncBs3D9QrS1XEWPSkZhApgenBl7FxaA",
    authDomain: "todo-app2021-c1bee.firebaseapp.com",
    projectId: "todo-app2021-c1bee",
    storageBucket: "todo-app2021-c1bee.appspot.com",
    messagingSenderId: "197542400743",
    appId: "1:197542400743:web:9790857a22d2e66f3d4842",
    measurementId: "G-8X98M77SKW"
  });

  const db=firebaseApp.firestore();
  export default db;
