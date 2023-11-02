"use client";

import { SessionStorageKey } from "@/constants";
import { SignOutUser, userStateListener } from "@/firebase/firebase_auth";
import { getUserRecordById } from "@/firebase/firestore";
import { UserRecord } from "@/interfaces";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useEffect, useState } from "react";

interface Props {
  children?: ReactNode;
}

export const AuthContext = createContext({
  // "User" comes from firebase auth-public.d.ts
  authUser: {} as User | null,
  setAuthUser: (_user: User) => {},
  currentUserRecord: {} as UserRecord | null,
  setCurrentUserRecord: (_userRecord: UserRecord) => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: Props) => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [currentUserRecord, setCurrentUserRecord] = useState<UserRecord | null>(
    () => {
      const userData = sessionStorage.getItem(SessionStorageKey.UserRecord);
      if (!userData) {
        return null;
      }
      return JSON.parse(userData);
    }
  );
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = userStateListener((auth) => {
      console.log("listening");
      if (auth) {
        console.log("has user", auth);
        setAuthUser(auth);
        if (!currentUserRecord) {
          //get user record from firestore
          getUserRecordById(`${auth?.uid}+123`)
            .then((data: any) => {
              const userRecord: UserRecord = {
                id: data.id,
                name: data.name,
                email: data.email,
                isDeleted: data.isDeleted,
              };
              //write into session storage
              sessionStorage.setItem(
                SessionStorageKey.UserRecord,
                JSON.stringify(userRecord)
              );
              //set currentUserRecord
              setCurrentUserRecord(userRecord);
            })
            .catch((e) => {
              console.error(e);
            });
        }
      }
    });
    return unsubscribe;
  }, [authUser]);

  // As soon as setting the current user to null,
  // the user will be redirected to the home page.
  const signOut = () => {
    SignOutUser();
    setAuthUser(null);
    sessionStorage.removeItem(SessionStorageKey.UserRecord);
    setCurrentUserRecord(null);
    router.push("/");
  };

  const value = {
    authUser,
    setAuthUser,
    currentUserRecord,
    setCurrentUserRecord,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
