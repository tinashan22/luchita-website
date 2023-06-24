"use client";

import Image from "next/image";
import ProductCard from "../components/productCard";
import { Product } from "@/interfaces";
import { useEffect, useState } from "react";
import { getAllProducts } from "../firebase/firestore";
import FloatingMenu from "@/components/floatingMenu";

const mockProducts = [
  {
    id: 1,
    name: "Picnic",
    price: 40,
    type: "earrings",
  },
  {
    id: 2,
    name: "Galaxy",
    price: 40,
    type: "earrings",
  },
  {
    id: 3,
    name: "Clouds",
    price: 40,
    type: "earrings",
  },
  {
    id: 4,
    name: "Squiggle",
    price: 40,
    type: "earrings",
  },
  {
    id: 5,
    name: "Fire Crackers",
    price: 30,
    type: "earrings",
  },
  {
    id: 6,
    name: "Fire Crackers",
    price: 30,
    type: "earrings",
  },
  {
    id: 7,
    name: "Fire Crackers",
    price: 30,
    type: "earrings",
  },
  {
    id: 8,
    name: "Fire Crackers",
    price: 30,
    type: "earrings",
  },
];

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
        {mockProducts.map((p: Product) => {
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
