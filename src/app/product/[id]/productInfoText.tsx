import { useEffect, useState } from "react";
import share from "../../../../public/icons/share.svg";
import Image from "next/image";
import { Product } from "@/interfaces";
import { ProductType } from "@/constants";

export default function ProductInfoText({
  product,
}: {
  product: Product | undefined;
}) {
  const [copySuccess, setCopySuccess] = useState(false);

  async function copyToClip() {
    await navigator.clipboard.writeText(location.href);
    setCopySuccess(true);

    useEffect;
    setTimeout(() => setCopySuccess(false), 1800);
  }

  const splitDesc = (str?: string) => {
    if (str?.includes(`<br/>`)) {
      return str.split(`<br/>`);
    } else {
      return [str];
    }
  };

  return (
    <div className="flex flex-col pt-6 pb-12">
      <h2 className="font-roboto font-medium text-2xl">{product?.name}</h2>
      <div className="flex flex-row justify-between">
        {" "}
        <h4 className="font-garamond text-xl">${product?.price}</h4>
        {!copySuccess ? (
          <div
            onClick={copyToClip}
            className="flex flex-row items-center cursor-pointer "
          >
            <Image
              className="mr-2 h-[18px]"
              src={share}
              alt="share this product"
            />
            <h4 className="font-garamond text-xl">Share</h4>
          </div>
        ) : (
          <div>
            <h4
              className="font-garamond text-xl px-1 
            "
            >
              ☺ product link copied! ☺
            </h4>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 font-garamond text-lg">
        {splitDesc(product?.description).map((str, index) => {
          return <p key={index}>{str}</p>;
        })}
      </div>

      {product?.type == ProductType.Earrings && (
        <p className="font-garamond text-lg pt-4">
          {" "}
          All earrings sold in pairs. DM{"  "}
          <a
            target="_blank"
            className="font-medium hover:text-brandLime hover:bg-brandPurple underline md:no-underline"
            href={"https://www.instagram.com/lucha.luchita/"}
          >
            @lucha.luchita
          </a>{" "}
          to customize in a color to your liking.{" "}
        </p>
      )}
    </div>
  );
}
