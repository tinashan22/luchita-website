"use client";

import { ProductRecord } from "@/interfaces";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import getStripe from "@/utils/getStripe";

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
  );
}
