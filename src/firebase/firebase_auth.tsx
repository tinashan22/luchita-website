import { auth } from "./firebase";
import {
  NextOrObserver,
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createUserRecord } from "./firestore";
import { AuthProvider } from "@/context/authContext";

export const createNewUser = async (
  name: string,
  email: string,
  password: string
) => {
  //   console.log(email, password);
  //   if (!email || !password) return;

  console.log(email);
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      //Update users table
      if (user.email != null && user.uid != null) {
        createUserRecord(user.uid, user.email, name);
      }

      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      if (errorCode === "auth/email-already-in-use") {
        // alert("This email already has ");
      } else {
        alert(`${errorCode}: ${errorMessage}`);
      }
    });
};

export const signIn = async (email: string, password: string) => {
  //   if (!email || !password) return false;

  let loginMsg: string = "";
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ... set auth context?

      loginMsg = "success";
    })
    .catch((error) => {
      const errorCode = error.code as string;
      const errorMessage = error.message;
      console.error(errorCode);
      loginMsg = errorCode;
    });

  return loginMsg;
};

export const userStateListener = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};

export const SignOutUser = async () => await signOut(auth);
