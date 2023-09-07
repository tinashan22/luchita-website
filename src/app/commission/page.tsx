"use client";

import { useEffect } from "react";
import FloatingMenu from "../../components/floatingMenu";
import CommissionPage from "./commission";

export default function CommissionLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="flex min-h-screen h-full text-brandPurple bg-brandPink background-grid pb-32 selection:bg-brandLime ">
      <CommissionPage />
      <FloatingMenu />
    </main>
  );
}
