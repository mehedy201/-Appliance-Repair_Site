import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbkrrxZViDrgBXiiNzpJXD1rgNuzp67hI",
  authDomain: "appliance-repair-101.firebaseapp.com",
  projectId: "appliance-repair-101",
  storageBucket: "appliance-repair-101.appspot.com",
  messagingSenderId: "28164938683",
  appId: "1:28164938683:web:d4cf8ee5ffc46ef03b829e",
  measurementId: "G-F22BMJBLK4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();

// const analytics = getAnalytics(app);

