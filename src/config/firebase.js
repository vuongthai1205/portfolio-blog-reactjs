// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWyx2ey5tLbAyBHgohGdJINPIOm8aRQMU",
  authDomain: "portfolio-blog-5aae7.firebaseapp.com",
  databaseURL: "https://portfolio-blog-5aae7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-blog-5aae7",
  storageBucket: "portfolio-blog-5aae7.appspot.com",
  messagingSenderId: "4552474438",
  appId: "1:4552474438:web:6d9f03a8c073fd957baf47",
  measurementId: "G-ZHBBERG8D1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);