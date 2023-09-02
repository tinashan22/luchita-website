"use client";

import { AuthContext } from "@/context/authContext";
import { useContext } from "react";

export default function ProfilePage() {
  const { currentUser, signOut } = useContext(AuthContext);
  console.log(currentUser);
  return <div>hi {currentUser?.displayName}</div>;
}
