"use client";

import Image from "next/image";
import ProductCard from "../components/productCard";
import { ProductRecord } from "@/interfaces";
import { useEffect, useState } from "react";
import { getAllProducts } from "../firebase/firestore";
import FloatingMenu from "@/components/floatingMenu";
import PlaceholderProductCard from "@/components/placeholderProductCard";

// const mockProducts = [
//   {
//     id: 1,
//     name: "Picnic",
//     price: 40,
//     type: "earrings",
//   },
//   {
//     id: 2,
//     name: "Galaxy",
//     price: 40,
//     type: "earrings",
//   },
//   {
//     id: 3,
//     name: "Clouds",
//     price: 40,
//     type: "earrings",
//   },
//   {
//     id: 4,
//     name: "Squiggle",
//     price: 40,
//     type: "earrings",
//   },
//   {
//     id: 5,
//     name: "Fire Crackers",
//     price: 30,
//     type: "earrings",
//   },
//   {
//     id: 6,
//     name: "Fire Crackers",
//     price: 30,
//     type: "earrings",
//   },
//   {
//     id: 7,
//     name: "Fire Crackers",
//     price: 30,
//     type: "earrings",
//   },
//   {
//     id: 8,
//     name: "Fire Crackers",
//     price: 30,
//     type: "earrings",
//   },
// ];

export default function ShopPage() {
  const [products, setProducts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllProducts().then((data: any) => {
      const products = data?.map((i: ProductRecord) => i);
      setProducts(products);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      // setIsLoading(false);
    });
  }, []);
  const arrayFromEight = Array.from("x".repeat(8));

  return (
    // page container

    <div className="relative w-full flex justify-center  pt-8 px-5 md:px-20 md:pt-28 pb-32 ">
      <div className="max-w-[1352px] w-full">
        {/* skeleton loading grid */}
        {isLoading && (
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-x-5 gap-y-8">
            {arrayFromEight.map((v, i) => {
              return <PlaceholderProductCard key={i} />;
            })}
          </div>
        )}
        {/* product grid */}
        {!isLoading && (
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-x-5 gap-y-8 ">
            {products?.map((p: ProductRecord) => {
              return <ProductCard key={p.id} product={p} />;
            })}
          </div>
        )}
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
