// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeRP10J9xZZ1yniigZq9qWixp1VwbgQZA",
  authDomain: "full-stack-5755e.firebaseapp.com",
  projectId: "full-stack-5755e",
  storageBucket: "full-stack-5755e.appspot.com",
  messagingSenderId: "2121554610",
  appId: "1:2121554610:web:9184f665f6aca3310b07ab",
  measurementId: "G-YKS66WZ7B5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app