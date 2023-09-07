"use client";

import { Product } from "@/interfaces";
import { LargeProductImage } from "./photoContainers";
import { useRouter } from "next/navigation";
import LargeButton from "@/components/buttonLarge";
import ProductInfoText from "./productInfoText";
import FloatingMenu from "@/components/floatingMenu";
import { ButtonType, ProductType } from "@/constants";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { framerLogger } from "@/stateLogger";
import EmailSignUpModal from "@/components/emailSignUpModal";

export default function DesktopProductView({
  product,
}: {
  product: Product | undefined;
}) {
  const router = useRouter();

  const [modalShow, setModalShow] = useState(false);

  function handleClickJoinMail(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    e.preventDefault();
    setModalShow(true);
  }

  return (
    <div className="hidden md:block ">
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        mode="wait"
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => {
          framerLogger("email modal close");
        }}
      >
        {modalShow && (
          <EmailSignUpModal
            handleCloseModal={() => {
              setModalShow(false);
            }}
          />
        )}
      </AnimatePresence>
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
            handleClick={(e) => {
              handleClickJoinMail(e);
            }}
          />
        </div>
      </div>
      <FloatingMenu />
    </div>
  );
}
