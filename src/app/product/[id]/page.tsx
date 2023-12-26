"use client";

import React, { useEffect, useState } from "react";
import "swiper/css"; // core Swiper
import "swiper/css/pagination"; // Pagination module
import "@/app/globals.css";
import { ProductRecord } from "@/interfaces";
import DesktopProductView from "./desktopProductView";
import { getProductById } from "@/firebase/firestore";
import MobileProductView from "./mobileProductView";
import ProductBreadcrumb from "./breadcrumb";
import FloatingMenu from "@/components/floatingMenu";

export default function ProductLayout({
  params,
}: {
  params: { id: string; product: ProductRecord };
}) {
  const [product, setProduct] = useState<ProductRecord>();

  useEffect(() => {
    getProductById(params.id).then((data: any) => {
      const product = data;
      const currentProduct: ProductRecord = {
        id: product.id,
        name: product.name,
        price: product.price,
        type: product.type ?? "earrings",
        primaryPhoto: product.primaryPhoto,
        photoList: product.photoList,
        description: product.description,
        displayOrder: product.displayOrder,
        isDeleted: product.isDeleted,
      };

      setProduct(currentProduct);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-4 md:pt-8 bg-brandCream  selection:bg-brandPink text-brandPurple w-screen px-6">
      <ProductBreadcrumb product={product} />
      {/* desktop product page */}
      <DesktopProductView product={product} />
      {/* mobile product page */}
      <MobileProductView product={product} />
      <FloatingMenu />
    </div>
  );
}
