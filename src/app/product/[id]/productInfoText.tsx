import { useEffect, useState } from "react";
import share from "../../../../public/share.svg";
import Image from "next/image";

export default function ProductInfoText() {
  const [copySuccess, setCopySuccess] = useState(false);

  async function copyToClip() {
    await navigator.clipboard.writeText(location.href);
    setCopySuccess(true);

    useEffect;
    setTimeout(() => setCopySuccess(false), 800);
  }

  return (
    <div className="flex flex-col pt-6 pb-12">
      <h2 className="font-roboto font-medium text-2xl">Product Name</h2>
      <div className="flex flex-row justify-between">
        {" "}
        <h4 className="font-garamond text-xl">$00</h4>
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
            <h4 className="font-garamond text-xl px-1 bg-brandPink">
              product link copied
            </h4>
          </div>
        )}
      </div>
      <p className="font-garamond text-lg pt-4">
        Noguchi&rsquo;s rose marble sculpture “The Void” was an early
        inspiration for this recurring portal shape in our design.
      </p>
      <p className="font-garamond text-lg pt-4">
        {" "}
        All earrings sold in pairs. DM me @lucha.luchita to customize in a color
        to your liking.{" "}
      </p>
    </div>
  );
}
