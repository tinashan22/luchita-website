"use client";

import { ProductRecord } from "@/interfaces";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import getStripe from "@/utils/getStripe";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
// );

const stripePromise = getStripe();
const projectUrl = process.env.NEXTAUTH_URL;

export default function CheckoutPage() {
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

  const redirectToCheckout = async () => {
    try {
      const stripe = await getStripe();

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

  return (
    <section>
      <button onClick={() => redirectToCheckout()} type="submit" role="link">
        Checkout
      </button>
    </section>

    //   <style jsx>
    //     {`
    //       section {
    //         background: #ffffff;
    //         display: flex;
    //         flex-direction: column;
    //         width: 400px;
    //         height: 112px;
    //         border-radius: 6px;
    //         justify-content: space-between;
    //       }
    //       button {
    //         height: 36px;
    //         background: #556cd6;
    //         border-radius: 4px;
    //         color: white;
    //         border: 0;
    //         font-weight: 600;
    //         cursor: pointer;
    //         transition: all 0.2s ease;
    //         box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    //       }
    //       button:hover {
    //         opacity: 0.8;
    //       }
    //     `}
    //   </style>
  );
}
