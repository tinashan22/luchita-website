"use client";

import { useEffect } from "react";
import FloatingMenu from "../../components/floatingMenu";
import CartPage from "./cart";

export default function CartLayout({
  params,
}: {
  //params: { id: string; product: ProductRecord };
  params: { id: string };
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-screen pt-8 bg-brandCream  selection:bg-brandPink text-brandPurple w-screen px-6 md:px-20">
      <CartPage />
    </main>
  );
}
