import type { Stripe } from "stripe";
import PrintObject from "@/components/printObject";
import { stripe } from "@/lib/stripe";
import OrderSuccessPage from "./success";
import { useShoppingCart } from "use-shopping-cart";
import { clear } from "console";
import LargeButton from "@/components/buttonLarge";

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { session_id: string };
}): Promise<JSX.Element> {
  if (!searchParams.session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(searchParams.session_id, {
      expand: ["line_items", "payment_intent"],
    });

  const paymentIntent = checkoutSession.payment_intent as Stripe.PaymentIntent;

  const succeeded = paymentIntent.status === "succeeded";

  return (
    <main className="min-h-screen pt-8 bg-brandCream text-brandPurple">
      {succeeded ? (
        <OrderSuccessPage
          orderNumber={checkoutSession.id}
          email={checkoutSession.customer_email}
        />
      ) : null}
      {/* 
      {checkoutSession.line_items?.data.map((item, index) => {
        return <div key={index}>{item.description}</div>;
      })} */}

      {/* <h3>Checkout Session response:</h3>
      <PrintObject content={checkoutSession} /> */}
    </main>
  );
}
