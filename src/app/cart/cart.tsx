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
import Link from "next/link";
import { useRouter } from "next/navigation";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
// );

// const stripePromise = getStripe();
const projectUrl = process.env.NEXTAUTH_URL;

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CartPage() {
  const { cartCount, cartDetails, totalPrice } = useShoppingCart();
  const cartIsEmpty = cartCount == undefined || cartCount === 0;
  const router = useRouter();

  const redirectToCheckout = async () => {
    try {
      const stripe = await getStripe();

      console.log("STRIPE35", stripe);

      if (!stripe) throw new Error("Stripe failed to initialize.");

      const checkoutResponse = await fetch("/api/checkoutSessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price: 100, id: "1234yreudhsjakyd" }),
      });

      const res = await checkoutResponse.json();
      console.log(res, "session");

      //   const stripeError = await stripe.redirectToCheckout({ session.sessionId });

      //   if (stripeError) {
      //     console.error(stripeError);
      //   }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  return (
    <div className="flex  w-full md:justify-end">
      <div
        onClick={() => {
          router.back();
        }}
        className="fixed top-[72px] right-[24px] md:right-[80px] font-garamond text-sm opacity-70 hover:opacity-100"
      >
        {" "}
        Close{" "}
      </div>
      <div className="w-[420px] md:max-w-[640px]">
        <h1 className="font-righteous text-lg font-medium"> Shopping Cart</h1>
        <div>
          {cartCount && cartCount > 0 ? (
            Object.values(cartDetails ?? {}).map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          ) : (
            <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
              <Image
                className="w-[24px] "
                src={cart}
                alt="share this product"
              />
              <p className="text-roboto mt-2 text-center text-xl font-md mb-6">
                Your cart is empty.
              </p>
              <div className="w-full border border-brandPurple h-[1px] mt-4"></div>
            </div>
          )}
        </div>

        <div className=" flex flex-col md:items-end pb-8">
          <h1 className="font-roboto text-lg font-medium pt-4">
            {" "}
            Subtotal:{" "}
            {formatCurrencyString({ value: totalPrice || 0, currency: "USD" })}
          </h1>
          <p className="font-roboto text-sm pt-3 pb-8">
            Shipping & taxes calculated at checkout.
          </p>
          <div className="  w-full md:w-[280px]">
            <LargeButton
              handleClick={() => {
                redirectToCheckout();
                // alert("Checkout function coming soon! ❤︎");
              }}
              disabled={cartCount == undefined || cartCount === 0}
              type={ButtonType.LargePrimary}
              btnText="Checkout"
            ></LargeButton>
          </div>

          {/* START STRIPE CODE */}
          <form action="/api/checkout_sessions" method="POST">
            <section>
              <button type="submit" role="link">
                Checkout
              </button>
            </section>
            <style jsx>
              {`
                section {
                  background: #ffffff;
                  display: flex;
                  flex-direction: column;
                  width: 400px;
                  height: 112px;
                  border-radius: 6px;
                  justify-content: space-between;
                }
                button {
                  height: 36px;
                  background: #556cd6;
                  border-radius: 4px;
                  color: white;
                  border: 0;
                  font-weight: 600;
                  cursor: pointer;
                  transition: all 0.2s ease;
                  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
                }
                button:hover {
                  opacity: 0.8;
                }
              `}
            </style>
          </form>
        </div>
      </div>
    </div>
  );
}
