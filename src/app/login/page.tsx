"use client";

import { useEffect } from "react";
import LoginPage from "./login";

export default function LoginLayout({
  params,
}: {
  params: { email?: string };
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    //mt -54px to offset mt-14 applied in layout for global nav height
    <main className="mt-[-54px]  min-h-screen h-dvh overflow-hidden   bg-brandCream  selection:bg-brandPink text-brandPurple w-screen px-6">
      <div className="pt-24">
        <LoginPage prefilledEmail={params.email} />
      </div>
    </main>
  );
}
