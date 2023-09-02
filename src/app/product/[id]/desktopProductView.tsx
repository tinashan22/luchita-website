import { Product } from "@/interfaces";
import { LargeProductImage } from "./photoContainers";
import { useRouter } from "next/navigation";
import LargeButton from "@/components/buttonLarge";
import ProductInfoText from "./productInfoText";
import FloatingMenu from "@/components/floatingMenu";
import { ButtonType, ProductType } from "@/constants";
import { getProduct } from "@/firebase/firestore";
import { useEffect, useState } from "react";
import ProductBreadcrumb from "./breadcrumb";

export default function DesktopProductView({
  product,
}: {
  product: Product | undefined;
}) {
  const router = useRouter();

  return (
    <div className="hidden md:block ">
      <div className=" w-1/2 flex flex-col  pb-32">
        {product?.photoList.map((photoUrl, index) => {
          return <LargeProductImage key={index} imageUrl={photoUrl} />;
        })}
      </div>
      <div className="fixed  right-6 lg:right-20 top-20 w-2/5">
        <ProductInfoText product={product} />
        <div className=" w-full lg:w-[280px] flex flex-col">
          {/* Buy now button disabled */}
          {/* <LargeButton
            key="primary"
            type={ButtonType.LargePrimary}
            btnText="Buy now"
            handleClick={() => {
              alert("go to checkout");
            }}
          />
          <div className="h-[12px]"></div> */}

          <LargeButton
            key="secondary"
            type={ButtonType.LargeSecondary}
            btnText="☞ Join mailing list"
            handleClick={() => {}}
          />
        </div>
      </div>
      <FloatingMenu />
    </div>
  );
}
