"use client";

import { useEffect } from "react";
import FloatingMenu from "../../components/floatingMenu";
import CheckoutPage from "./checkout";
import { ProductRecord } from "@/interfaces";

export default function CheckoutLayout({
  params,
}: {
  //params: { id: string; product: ProductRecord };
  params: { id: string };
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="flex min-h-screen h-full text-brandPurple bg-brandPink background-grid pb-32 selection:bg-brandLime ">
      <CheckoutPage />
      <FloatingMenu />
    </main>
  );
}
