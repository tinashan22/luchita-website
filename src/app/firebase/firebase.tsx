// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDacNTzALuLvLjvB2wz03jklqZvrTbmNAQ",
//   authDomain: "lucha-luchita.firebaseapp.com",
//   projectId: "lucha-luchita",
//   storageBucket: "lucha-luchita.appspot.com",
//   messagingSenderId: "297292691045",
//   appId: "1:297292691045:web:0c2576deb3de65e6d9b88c",
//   measurementId: "G-Z1Q747CF82",
// };

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(firebase);

//======
// const firebaseConfig = JSON.parse(process?.env?.FIREBASE_CONFIG ?? "{}");

// let analytics;
// let firestore;
// if (firebaseConfig?.projectId) {
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

//   if (app.name && typeof window !== "undefined") {
//     analytics = getAnalytics(app);
//   }

//   // Access Firebase services using shorthand notation
//   const firestore = getFirestore();
// }

// export { analytics, firestore };
