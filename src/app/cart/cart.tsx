"use client";

import { useState, useMemo } from "react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import CartItem from "./cartItem";
import Image from "next/image";
import cart from "../../../public/icons/cart.svg";
import { useRouter } from "next/navigation";
import { CreateCheckoutSession } from "../actions/stripe";

export default function CartPage() {
  const { cartCount, cartDetails, totalPrice } = useShoppingCart();
  const cartIsEmpty = cartCount == undefined || cartCount === 0;
  const router = useRouter();

  const lineItems = useMemo(() => {
    let items = [];
    for (const id in cartDetails) {
      const cartItem = cartDetails[id];
      const data = {
        quantity: cartItem.quantity,
        price_data: {
          currency: "usd",
          product_data: {
            name: cartItem.name,
          },
          unit_amount: cartItem.price,
        },
      };
      items.push(data);
    }
    return items;
  }, [cartDetails]);

  const [loading] = useState<boolean>(false);

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

          <div className="w-full md:w-[280px]">
            <form action={(e) => CreateCheckoutSession(e, lineItems)}>
              <button
                className="w-full bg-brandPurple border-brandLime text-brandLime flex items-center justify-center rounded-[20px] h-[48px] border font-righteous text-lg py-3"
                type="submit"
                disabled={loading || !cartCount}
              >
                Checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
