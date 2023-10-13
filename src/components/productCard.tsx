"use client";

import Image from "next/image";
import { Product } from "@/interfaces";
import { useState, MouseEvent } from "react";
import ProductModal from "./productModal";
import { AnimatePresence, motion } from "framer-motion";
import { framerLogger } from "@/stateLogger";
import preview from "../../public/preview.svg";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  const [modalShow, setModalShow] = useState(false);

  function handleClickPreviewIcon(e: MouseEvent) {
    e.preventDefault();
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
          framerLogger("product modal close");
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

      <Link href={`/product/${product.id}`}>
        <div className="flex-col ">
          <div className="relative w-full h-56 md:h-96 ">
            <Image
              src={`${product.primaryPhoto}`}
              alt="product primary photo"
              className="rounded-xl object-cover border border-brandPurple   transition-opacity delay-150 ease-in duration-1000"
              fill={true}
              draggable={false}
              placeholder={"blur"}
              blurDataURL="/placeholder.png"
            />
          </div>
          <div className="px-1 pt-3">
            <div className=" flex flex-row justify-between">
              <p className="font-roboto font-medium text-xs md:text-sm">
                {product.name}
              </p>
              <Image
                src={preview}
                alt="preview product icon"
                width={24}
                draggable={false}
                onClick={(e) => handleClickPreviewIcon(e)}
                priority
              />
            </div>

            <p className="font-garamond text-lg">${product.price}</p>
            {/* <p className="font-garamond text-xs">order: {product.displayOrder}</p> */}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
