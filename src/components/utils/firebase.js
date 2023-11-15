// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi3D2j0l9MdVozqOSi_IhtQm_Zh3pe5Ms",
  authDomain: "netflixgpt-b4921.firebaseapp.com",
  projectId: "netflixgpt-b4921",
  storageBucket: "netflixgpt-b4921.appspot.com",
  messagingSenderId: "49468084126",
  appId: "1:49468084126:web:9e4b699463a598915a108f",
  measurementId: "G-CXQ9EXTDCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()