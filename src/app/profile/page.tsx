"use client";

import FloatingMenu from "@/components/floatingMenu";
import ProfilePage from "./profile";
import { useEffect } from "react";

export default function ProfileLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-screen pt-8 bg-brandCream  selection:bg-brandPink text-brandPurple w-screen px-6 ">
      <ProfilePage />
      <FloatingMenu />
    </main>
  );
}
