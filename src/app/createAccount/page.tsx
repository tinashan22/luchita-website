"use client";

import { useEffect } from "react";
import AccountPage from "./createAccount";

export default function AccountLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-screen pt-8 bg-brandCream  selection:bg-brandPink text-brandPurple w-screen px-6 ">
      <AccountPage />
      {/* <FloatingMenu /> */}
    </main>
  );
}
