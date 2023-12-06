// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzG214ISIymZklqqSKmd7t9vlns32Vb8U",
  authDomain: "teclado-cti.firebaseapp.com",
  projectId: "teclado-cti",
  storageBucket: "teclado-cti.appspot.com",
  messagingSenderId: "738476747070",
  appId: "1:738476747070:web:a0bacfb44bd2220df7646f",
  measurementId: "G-7JP7MTMSKX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export function autenticarUsuario() {
  const auth = getAuth(app);
}
