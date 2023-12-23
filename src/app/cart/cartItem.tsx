import { ProductRecord } from "@/interfaces";
import { useShoppingCart } from "use-shopping-cart";
import removeItemIcon from "../../../public/remove-item.png";
import Image from "next/image";
import { CartEntry, formatCurrencyString } from "use-shopping-cart/core";

export default function CartItem({ item }: { item: CartEntry }) {
  const { name, quantity, price } = item;

  const { removeItem } = useShoppingCart();

  const handleRemoveItem = () => {
    removeItem(item.id);
  };
  return (
    <div className="flex flex-col mt-7">
      <div className="flex justify-between">
        {" "}
        <div className="">
          <Image
            className="rounded-lg h-[88px] width-[88px] border border-brandPurple "
            style={{ objectFit: "cover" }}
            height={88}
            width={88}
            src={item.image ?? ""}
            alt={`product image for ${item.name}`}
          ></Image>
        </div>
        <div className="flex flex-col justify-start">
          <div className="text-roboto font-medium text-md">{name}</div>
          <div className="h-[16px]"></div>

          <div>quantity: {quantity}</div>
          <div>
            {" "}
            price: {formatCurrencyString({ value: price, currency: "USD" })}
          </div>
        </div>
        <button
          onClick={() => handleRemoveItem()}
          className="hover:bg-emerald-50 transition-colors rounded-full duration-500 p-1"
        >
          <Image
            height={16}
            width={16}
            src={removeItemIcon}
            alt="remove cart item"
          ></Image>
        </button>
      </div>
      <div className="w-full border border-brandPurple h-[1px] mt-7"></div>
    </div>
  );
}
