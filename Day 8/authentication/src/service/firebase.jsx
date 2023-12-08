// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function firebaseauth(){
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAGMndlTWWaU3oOAH-NMZwySA8VH9mx31M",
      authDomain: "f7-auth-53b41.firebaseapp.com",
      projectId: "f7-auth-53b41",
      storageBucket: "f7-auth-53b41.appspot.com",
      messagingSenderId: "101441220610",
      appId: "1:101441220610:web:fea16cb8c7f3b9af9bb71b"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    return app;
}
export default firebaseauth;