"use client";

import Image from "next/image";
import { Product } from "@/interfaces";
import { useState } from "react";
import { Modal } from "react-overlays";
import ProductModalBody from "./productModalBody";

export default function ProductCard({ product }: { product: Product }) {
  const [modalShow, setModalShow] = useState(false);
  let clicked = 1;
  function handleClickProductCard() {
    setModalShow(true);
  }

  return (
    <div>
      {modalShow && (
        <div
          onClick={() => {
            setModalShow(false);
          }}
          className="fixed top-0 left-0 w-screen h-screen z-10 bg-gray-500 bg-opacity-50 backdrop-blur-sm"
        />
      )}
      <Modal
        className="fixed top-16 w-full z-10 flex justify-center items-center"
        show={modalShow}
      >
        <div className="w-[342px]">
          <ProductModalBody
            product={product}
            handleCloseModal={() => {
              setModalShow(false);
            }}
          />
        </div>
      </Modal>

      <div className="flex-col " onClick={handleClickProductCard}>
        <div className="relative w-full h-56  ">
          <Image
            src="/product.png"
            alt="home page bg"
            className="rounded-xl object-cover border border-brandPurple"
            fill={true}
            draggable={false}
            priority
          />
        </div>
        <div className="pl-1 pt-3">
          <p className="font-roboto font-medium text-xs">{product.name}</p>
          <p className="font-garamond text-lg">${product.price}</p>
        </div>
      </div>
    </div>
  );
}
