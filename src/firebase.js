
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'
import {getDatabase, ref, set, child, get, remove } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDxm1Wd6ADtbAezHE5wDM2XCCWerrsASrA",
    authDomain: "birthdayclub-86706.firebaseapp.com",
    databaseURL: "https://birthdayclub-86706-default-rtdb.firebaseio.com",
    projectId: "birthdayclub-86706",
    storageBucket: "birthdayclub-86706.appspot.com",
    messagingSenderId: "242086551734",
    appId: "1:242086551734:web:84bb6588ad8189dcec0617",
    measurementId: "G-NJJM6TT6B0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);

const app = {
    firebaseApp,
    auth,
    db,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    ref,
    set,
    child,
    get,
    remove
};

export default app;