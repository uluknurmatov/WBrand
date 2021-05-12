import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAqty-KqN9699aY5LheO4UKbpwxSMjsttA",
    authDomain: "wbrand-a7c3a.firebaseapp.com",
    projectId: "wbrand-a7c3a",
    databaseURL: "https://wbrand-a7c3a.firebaseio.com",
    storageBucket: "wbrand-a7c3a.appspot.com",
    messagingSenderId: "760151107990",
    appId: "1:760151107990:web:086c45aebe910a0a6a55b7",
    measurementId: "G-429THE8N54",
});

export default app;
