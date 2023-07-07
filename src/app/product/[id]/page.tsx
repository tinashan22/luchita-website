"use client";

import React, { useEffect, useState } from "react";
import "swiper/css"; // core Swiper
import "swiper/css/pagination"; // Pagination module
import "@/app/globals.css";
import { Product } from "@/interfaces";
import DesktopProductView from "./desktopProductView";
import { getProduct } from "@/firebase/firestore";
import MobileProductView from "./mobileProductView";

export default function Page({
  params,
}: {
  params: { id: string; product: Product };
}) {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    getProduct(params.id).then((data: any) => {
      const product = data;
      const currentProduct: Product = {
        id: product.id,
        name: product.name,
        price: product.price,
        type: product.type ?? "earrings",
        primaryPhoto: product.primaryPhoto,
        description: product.description,
        displayOrder: product.displayOrder,
        isDeleted: product.isDeleted,
      };
      setProduct(currentProduct);
      console.log(product);
    });
  }, []);

  return (
    <div className="min-h-screen pt-8 bg-brandCream  selection:bg-brandPink text-brandPurple w-screen px-6">
      {/* desktop product page */}
      <DesktopProductView product={product} />
      {/* mobile product page */}
      <MobileProductView product={product} />
    </div>
  );
}
