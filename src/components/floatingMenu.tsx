"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import InstagramButton from "./instagramBtn";
import Image from "next/image";
import cart from "../../public/icons/cart.svg";
import CartButton from "./cartBtn";

export default function FloatingMenu() {
  const pathname = usePathname();
  const isCommissionPage = pathname ?? "/".startsWith("/commission");
  return (
    <div className="bg-brandPink h-14 left-4 lg:left-3/4 right-4 fixed  bottom-4 flex place-items-center border border-brandPurple shadow-btn shadow-brandPurple rounded-3xl z-10">
      <div className="flex flex-row w-full justify-between items-center  pl-6 pr-4 ">
        {isCommissionPage && (
          <Link href="/">
            <p className={`font-roboto font-medium text-brandPurple`}>Shop</p>
          </Link>
        )}
        {!isCommissionPage && (
          <Link href="/commission" prefetch={false}>
            <p className={`font-roboto font-medium text-brandPurple`}>
              Commission
            </p>
          </Link>
        )}

        <div className="flex flex-row space-between">
          <CartButton />
          <div className="w-[12px]"></div>
          <InstagramButton />
        </div>
      </div>
    </div>
  );
}
