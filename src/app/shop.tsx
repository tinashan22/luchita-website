"use client";

import Image from "next/image";
import ProductCard from "./components/productCard";
import { Product } from "@/interfaces";
import { useEffect, useState } from "react";
import { getAllProducts } from "./firebase/firestore";

export default function ShopPage() {
  const [products, setProducts] = useState<any>([]);

  // useEffect(() => {
  //   getAllProducts().then((data: any) => {
  //     const products = data.map((i: any) => i);
  //     setProducts(products);
  //   });
  // });
  return (
    // page container
    <div className="relative pt-20 px-5 w-full ">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8  items-center pb-16">
        {products.map((p: Product) => {
          return <ProductCard key={p.id} product={p} />;
        })}
      </div>
      {/* page bg */}
      <Image
        src="/homepage-bg.png"
        alt="home page bg"
        className="fixed top-0 left-0 -z-10"
        fill={true}
        draggable={false}
        priority
      />
    </div>
  );
}
