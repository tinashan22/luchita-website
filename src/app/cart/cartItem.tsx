import { ProductRecord } from "@/interfaces";
import { useShoppingCart } from "use-shopping-cart";
import removeItemIcon from "../../../public/remove-item.png";
import Image from "next/image";
import { CartEntry, formatCurrencyString } from "use-shopping-cart/core";
import { useState } from "react";

export default function CartItem({ item }: { item: CartEntry }) {
  const { name, quantity, price } = item;

  const { removeItem } = useShoppingCart();

  const [showRemoveBtn, setRemoveBtnShow] = useState(false);

  const handleRemoveItem = () => {
    removeItem(item.id);
  };
  return (
    <div
      onMouseEnter={() => setRemoveBtnShow(true)}
      onMouseLeave={() => setRemoveBtnShow(false)}
      className="flex flex-col mt-7"
    >
      <div className="flex justify-between">
        {" "}
        <div className="flex  ">
          <Image
            className="rounded-lg h-[88px] width-[88px] border border-brandPurple "
            style={{ objectFit: "cover" }}
            height={88}
            width={88}
            src={item.image ?? ""}
            alt={`product image for ${item.name}`}
          ></Image>
          {/* Beginning of Product Info Column */}
          <div className="flex flex-col justify-start ml-4">
            <div className="font-roboto font-medium text-md">{name}</div>
            <div className="h-[16px]"></div>

            <div className="font-garamond ">quantity: {quantity}</div>
            <div className="font-garamond ">
              {" "}
              price: {formatCurrencyString({ value: price, currency: "USD" })}
            </div>
          </div>
          {/* End of Product Info Column */}
        </div>
        <div className="flex flex-col items-start">
          {" "}
          <button
            onClick={() => handleRemoveItem()}
            className="hover:bg-brandPink hover:border-brandPurple transition-colors rounded-full duration-500 p-2"
          >
            {showRemoveBtn && (
              <Image
                height={12}
                width={12}
                src={removeItemIcon}
                alt="remove cart item"
              ></Image>
            )}
          </button>
        </div>
      </div>
      <div className="w-full border border-brandPurple h-[1px] mt-7"></div>
    </div>
  );
}
