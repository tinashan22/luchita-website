import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import cart from "../../public/icons/cart.svg";

export default function CartButton() {
  const { cartCount } = useShoppingCart();
  return (
    <div>
      <Link href="/cart" prefetch={false}>
        <div className="w-[24px] h-[24px] relative ">
          {" "}
          <Image className="w-[24px] " src={cart} alt="share this product" />
          {cartCount && cartCount > 0 && (
            <div className="absolute top-[-8px] right-[-8px] h-[16px] w-[16px] border-[0.5px] rounded-[50%] border-brandLime bg-brandPurple flex justify-center">
              <p className="text-[10px]  text-brandLime">
                {cartCount.toString()}
              </p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
