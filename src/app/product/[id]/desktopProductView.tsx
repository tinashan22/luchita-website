import { Product } from "@/interfaces";
import { LargeProductImage } from "./photoContainers";
import { useRouter } from "next/navigation";
import LargeButton from "@/components/buttonLarge";
import ProductInfoText from "./productInfoText";
import FloatingMenu from "@/components/floatingMenu";
import { ButtonType, ProductType } from "@/constants";
import { getProduct } from "@/firebase/firestore";
import { useEffect, useState } from "react";

export default function DesktopProductView({
  product,
}: {
  product: Product | undefined;
}) {
  const router = useRouter();

  return (
    <div className="hidden md:block ">
      <div className=" w-1/2 flex flex-col  pb-32">
        <div className="flex items-start font-garamond  text-md translate-y-[-20px]">
          {" "}
          <button
            className="hover:opacity-100 opacity-60 "
            onClick={() => router.back()}
          >
            {" "}
            Shop all{" "}
          </button>
          <p className="opacity-60">/ {product?.name}</p>
        </div>

        <LargeProductImage imageUrl="/product.png" />
        <LargeProductImage imageUrl="/product.png" />
        <LargeProductImage imageUrl="/product.png" />
        <LargeProductImage imageUrl="/product.png" />
      </div>
      <div className="fixed  right-6 lg:right-20 top-20 w-2/5">
        <ProductInfoText product={product} />
        <div className=" w-full lg:w-[280px] flex flex-col">
          <LargeButton
            key="primary"
            type={ButtonType.LargePrimary}
            btnText="Buy now"
            handleClick={() => {
              alert("go to checkout");
            }}
          />
          <div className="h-[12px]"></div>

          <LargeButton
            key="secondary"
            type={ButtonType.LargeSecondary}
            btnText="Add to cart"
            handleClick={() => {}}
          />
        </div>
      </div>
      <FloatingMenu />
    </div>
  );
}
