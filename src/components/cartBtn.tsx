import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import cart from "../../public/icons/cart.svg";
import { useEffect, useState } from "react";

export default function CartButton() {
  const { cartCount } = useShoppingCart();
  const [cartNumber, setCartNumber] = useState<number>();

  useEffect(() => {
    if (cartCount) {
      setCartNumber(cartCount);
    }
  }, [cartCount]);
  return (
    <div>
      <Link href="/cart" prefetch={false}>
        <div className="w-[24px] h-[24px] relative ">
          {" "}
          <Image className="w-[24px] " src={cart} alt="share this product" />
          {cartNumber && cartNumber > 0 && (
            <div className="absolute top-[-4px] right-[-5px] h-[16px] w-[16px] border-[0.5px] rounded-[50%] border-brandLime bg-brandPurple flex justify-center">
              <p className="text-[10px]  text-brandLime">
                {cartCount!.toString()}
              </p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
function UseState(arg0: null): { cartNumber: any; setCartNumber: any } {
  throw new Error("Function not implemented.");
}
