import { ProductRecord } from "@/interfaces";
import { useShoppingCart } from "use-shopping-cart";
import { CartEntry, formatCurrencyString } from "use-shopping-cart/core";

export default function CartItem({ item }: { item: CartEntry }) {
  const { name, quantity, price } = item;

  const { removeItem } = useShoppingCart();

  const handleRemoveItem = () => {
    removeItem(item.id);
  };
  return (
    <div className="flex justify-between">
      {" "}
      <div>{name}</div>
      <div>quantity: {quantity}</div>
      <div>
        {" "}
        price: {formatCurrencyString({ value: price, currency: "USD" })}
      </div>
      <button
        onClick={() => handleRemoveItem()}
        className="hover:bg-emerald-50 transition-colors rounded-full duration-500 p-1"
      >
        <div className="h-4 w-4 text-red-500" aria-hidden={true}>
          {" "}
          X{" "}
        </div>
      </button>
    </div>
  );
}
