import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyDo2_Lkb2d594yK9l6eo6nyWv-DSjGVkBA",
    authDomain: "tiktok-clone-react-c74b4.firebaseapp.com",
    databaseURL: "https://tiktok-clone-react-c74b4.firebaseio.com",
    projectId: "tiktok-clone-react-c74b4",
    storageBucket: "tiktok-clone-react-c74b4.appspot.com",
    messagingSenderId: "464640060509",
    appId: "1:464640060509:web:ff9483d2f4d94fa30e31b4",
    measurementId: "G-E69VF7QY8D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;