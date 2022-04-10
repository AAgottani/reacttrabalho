// Import the functions you need from the SDKs you need

import initializeApp from 'firebase'
import firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyALpb3KzWP9vgzvKxV-KtfQXoJUaGs96fM",

  authDomain: "trabalhoreact-b33ec.firebaseapp.com",

  projectId: "trabalhoreact-b33ec",

  storageBucket: "trabalhoreact-b33ec.appspot.com",

  messagingSenderId: "747667995686",

  appId: "1:747667995686:web:f1fea57b0f917c6da27ae7"

};


// Initialize Firebase


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;