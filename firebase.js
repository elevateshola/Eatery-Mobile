import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDQNKBV_d8UGqeN-_NYNIXofhwazX6xABI",
    authDomain: "practise-ef1fb.firebaseapp.com",
    projectId: "practise-ef1fb",
    storageBucket: "practise-ef1fb.appspot.com",
    messagingSenderId: "1097697116527",
    appId: "1:1097697116527:web:07ec87109c7e52d713289a",
    measurementId: "G-N8WFV3TZTV"
  };


  let firebaseApp = initializeApp(firebaseConfig)


  export default firebaseApp;