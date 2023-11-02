"use client";

import { AuthContext } from "@/context/authContext";
import { getUserRecordById } from "@/firebase/firestore";
import { UserRecord } from "@/interfaces";
import { useContext, useEffect, useState } from "react";

export default function ProfilePage() {
  const { currentUserRecord, signOut } = useContext(AuthContext);

  const [hasAuthError, setAuthError] = useState<boolean>(false);
  const [userRecord, setUserRecord] = useState<UserRecord>();

  //runs once when component mounts
  useEffect(() => {
    //scroll to top
    window.scrollTo(0, 0);
  }, []);

  //runs everytime currentUser changes, may not need with context
  useEffect(() => {
    if (currentUserRecord) {
      //   getUserRecordById(currentUser?.uid).then((data: any) => {
      //     const user: UserRecord = {
      //       id: data.id,
      //       name: data.name,
      //       email: data.email,
      //       isDeleted: data.isDeleted,
      //     };
      //     setUserRecord(user);
      //     setAuthError(false);
      //     console.log("has auth error1", hasAuthError);
      //     console.log("current user 1", currentUser);
      //   });
    }
  }, []);

  return (
    <div>
      {hasAuthError && <div> There is an error</div>}
      hi {currentUserRecord?.name}. Your email is {currentUserRecord?.email}{" "}
    </div>
  );
}
