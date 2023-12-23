"use client";

import ShopPage from "./shop";
import GlobalNav from "../components/nav";
import FloatingMenu from "../components/floatingMenu";
import { AuthProvider } from "@/context/authContext";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function Home() {
  // const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
  //   console.log("before fetch");
  //   fetch("api/checkout_sessions", {
  //     method: "POST",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setClientSecret(data.clientSecret);
  //       console.log(data);
  //     });
  // }, []);

  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: clientSecret,
  // };

  return (
    <main className="flex min-h-screen h-dvh text-brandPurple selection:bg-brandPink">
      {/* <AuthProvider> */}

      <ShopPage />
      <FloatingMenu />

      {/* </AuthProvider> */}
    </main>
  );
}
