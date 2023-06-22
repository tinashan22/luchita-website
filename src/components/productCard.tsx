"use client";

import Image from "next/image";
import { Product } from "@/interfaces";
import { useState } from "react";
import { Modal } from "react-overlays";
import ProductModal from "./productModal";
import { AnimatePresence, motion } from "framer-motion";
import { framerLogger } from "@/stateLogger";
import preview from "../../public/preview.svg";

export default function ProductCard({ product }: { product: Product }) {
  const [modalShow, setModalShow] = useState(false);

  function handleClickPreviewIcon() {
    setModalShow(true);
  }

  return (
    <motion.div>
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
          framerLogger("product modal");
        }}
      >
        {modalShow && (
          <ProductModal
            product={product}
            handleCloseModal={() => {
              setModalShow(false);
            }}
          />
        )}
      </AnimatePresence>

      <div className="flex-col ">
        <div className="relative w-full h-56  ">
          <Image
            src="/product.png"
            alt="home page bg"
            className="rounded-xl object-cover border border-brandPurple"
            fill={true}
            draggable={false}
          />
        </div>
        <div className="px-1 pt-3">
          <div className=" flex flex-row justify-between">
            <p className="font-roboto font-medium text-xs">{product.name}</p>
            <Image
              src={preview}
              alt="preview product"
              width={24}
              draggable={false}
              onClick={handleClickPreviewIcon}
              priority
            />
          </div>

          <p className="font-garamond text-lg">${product.price}</p>
          {/* <p className="font-garamond text-xs">order: {product.displayOrder}</p> */}
        </div>
      </div>
    </motion.div>
  );
}
