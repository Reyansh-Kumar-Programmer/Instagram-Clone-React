import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAtMLHNdpCeOzgtjATKkbno3ke7pX_uUUw",
    authDomain: "instgaram-clone-dad2d.firebaseapp.com",
    projectId: "instgaram-clone-dad2d",
    storageBucket: "instgaram-clone-dad2d.appspot.com",
    messagingSenderId: "735698375230",
    appId: "1:735698375230:web:1385dc153be39ac8a8776f",
    measurementId: "G-CMQ6E1J59X"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }
