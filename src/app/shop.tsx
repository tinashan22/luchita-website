import Image from "next/image";
import ProductCard from "./components/productCard";
import { Product } from "@/interfaces";

const newProducts = [
  {
    id: 1,
    name: "Picnic",
    price: 40,
    category: "earrings",
  },
  {
    id: 2,
    name: "Galaxy",
    price: 40,
    category: "earrings",
  },
  {
    id: 3,
    name: "Clouds",
    price: 40,
    category: "earrings",
  },
  {
    id: 4,
    name: "Squiggle",
    price: 40,
    category: "earrings",
  },
  {
    id: 5,
    name: "Fire Crackers",
    price: 30,
    category: "earrings",
  },
  {
    id: 6,
    name: "Fire Crackers",
    price: 30,
    category: "earrings",
  },
  {
    id: 7,
    name: "Fire Crackers",
    price: 30,
    category: "earrings",
  },
  {
    id: 8,
    name: "Fire Crackers",
    price: 30,
    category: "earrings",
  },
];

export default function ShopPage() {
  return (
    // page container
    <div className="relative pt-20 px-5 w-full h-screen">
      <div
        style={{
          backgroundSize: "cover",
          backgroundImage: "url(/homepage-bg.png)",
        }}
        className="fixed top-0 left-0 w-full h-screen"
      ></div>
      {/* products grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8  items-center">
        {newProducts.map((p) => {
          return <ProductCard key={p.id} product={p} />;
        })}
      </div>
      {/* page bg */}

      {/* <Image
        src="/homepage-bg.png"
        alt="home page bg"
        className="min-h-screen fixed top-0 left-0 -z-10"
        fill={true}
        draggable={false}
        priority
      /> */}
    </div>
  );
}
