"use client";
import LargeButton from "@/components/buttonLarge";
import { ButtonType } from "@/constants";
import Link from "next/link";
import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";

export default function OrderSuccessPage({
  orderNumber,
  email,
}: {
  orderNumber: string;
  email: string | null;
}) {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
  }, []);
  return (
    <div className=" m-w-screen flex flex-col w-full bg-brandCream text-brandPurple font-righteous text-xl px-4 md:px-20">
      <div> Thank you for your order. </div>
      {email && <div>A confirmation email will be sent to {email}.</div>}

      <p className="text-sm text-wrap">Order number: {orderNumber}</p>
      <div className="h-[24px]"></div>
      <Link href="/">
        {" "}
        <LargeButton
          type={ButtonType.LargePrimary}
          btnText="Shop All"
          handleClick={() => {}}
        />{" "}
      </Link>
    </div>
  );
}
