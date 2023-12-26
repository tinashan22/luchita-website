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

  let resCode: string = "";
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in with firebase auth
      const user = userCredential.user;
      //Create user record in firestore
      if (user.email != null && user.uid != null) {
        createUserRecord(user.uid, user.email, name);
      }

      resCode = "success";
    })
    .catch((error) => {
      const errorCode = error.code as string;
      const errorMessage = error.message;
      resCode = errorCode;
      console.error(
        "firebase_auth, createNewUser function",
        errorCode,
        error.message
      );
      resCode = errorCode;
    });
  return resCode;
};

export const signIn = async (email: string, password: string) => {
  //   if (!email || !password) return false;

  let resCode: string = "";
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      resCode = "success";
    })
    .catch((error) => {
      const errorCode = error.code as string;
      console.error("firebase_auth, signIn function", errorCode, error.message);
      resCode = errorCode;
    });

  return resCode;
};

export const userStateListener = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};

export const SignOutUser = async () => await signOut(auth);
