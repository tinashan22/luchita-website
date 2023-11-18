"use client";

import { ProductRecord } from "@/interfaces";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import getStripe from "@/utils/getStripe";
import LargeButton from "@/components/buttonLarge";
import { ButtonType } from "@/constants";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import CartItem from "./cartItem";
import Image from "next/image";
import cart from "../../../public/icons/cart.svg";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
// );

const stripePromise = getStripe();
const projectUrl = process.env.NEXTAUTH_URL;

export default function CartPage() {
  const { cartCount, cartDetails, totalPrice } = useShoppingCart();
  console.log("cartCount", cartCount);
  console.log("cartDetails", cartDetails);
  return (
    <div>
      <h1 className="font-righteous text-lg font-medium pb-3 ">
        {" "}
        Shopping Cart
      </h1>
      <div>
        {cartCount && cartCount > 0 ? (
          Object.values(cartDetails ?? {}).map((item) => (
            <CartItem key={item.id} item={item} />
          ))
        ) : (
          <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
            <Image className="w-[24px] " src={cart} alt="share this product" />
            <p className="mt-6 text-center text-2xl font-bold">
              Your cart is empty.
            </p>
          </div>
        )}
      </div>

      <div className="w-full border border-brandPurple "></div>
      <h1 className="font-roboto text-lg font-medium pt-4">
        {" "}
        Total:{" "}
        {formatCurrencyString({ value: totalPrice || 0, currency: "USD" })}
      </h1>
      <p className="font-roboto text-sm pt-3 pb-8">
        Shipping & taxes calculated at checkout.
      </p>
      <LargeButton
        handleClick={() => {}}
        type={ButtonType.LargePrimary}
        btnText="Check out"
      ></LargeButton>
    </div>
  );
}
