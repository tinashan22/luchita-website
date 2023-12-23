"use client";

import { useEffect } from "react";
import AccountPage from "./createAccount";

export default function AccountLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    //mt -54px to offset mt-14 applied in layout for global nav height
    <main className="mt-[-54px]  overflow-clip  min-h-screen  h-dvh bg-brandCream  selection:bg-brandPink text-brandPurple w-screen px-6 ">
      <div className="pt-24"></div>
      <AccountPage />
      {/* <FloatingMenu /> */}
    </main>
  );
}
