"use client";

import LargeButton from "@/components/buttonLarge";
import { ButtonType } from "@/constants";
import { AuthContext } from "@/context/authContext";
import { getUserRecordById } from "@/firebase/firestore";
import { UserRecord } from "@/interfaces";
import { Timestamp } from "firebase/firestore";
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
  //   useEffect(() => {
  //     if (currentUserRecord) {
  //       console.log(currentUserRecord);
  //     }
  //   }, []);

  const date: Date = new Date(currentUserRecord?.createdAt ?? "");

  return (
    <div>
      <div className="">
        Hi {currentUserRecord?.name}. Your email is {currentUserRecord?.email}{" "}
        you created your account on {date.getMonth().toString()}/
        {date.getDate().toString()}/{date.getFullYear().toString()}
      </div>
      <LargeButton
        type={ButtonType.LargeSecondary}
        btnText="Sign Out"
        handleClick={signOut}
      ></LargeButton>
    </div>
  );
}
