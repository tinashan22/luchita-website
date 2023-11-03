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
        setAuthUser(auth);
        if (
          !currentUserRecord ||
          currentUserRecord.email === undefined ||
          currentUserRecord.createdAt === undefined ||
          currentUserRecord.userId != auth.uid
        ) {
          //get user record from firestore, write into session storage, and set currentUserRecord context
          getUserRecordById(`${auth?.uid}`)
            .then((data: any) => {
              console.log("data", data);
              const userRecord: UserRecord = {
                userId: data.userId,
                name: data.name,
                email: data.email,
                createdAt: data.createdAt.toDate(),
                isDeleted: data.isDeleted,
              };
              console.log("session storage", userRecord);
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
    SignOutUser()
      .then(() => {
        router.push("/");
        setAuthUser(null);
        sessionStorage.removeItem(SessionStorageKey.UserRecord);
        setCurrentUserRecord(null);
      })
      .catch((e) => {
        console.error("Error signing out: ", e);
      });
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
