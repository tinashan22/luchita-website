import Image from "next/image";
import ProductCard from "./components/product_card";

export default function ShopPage() {
  const products = ["Picnic", "Galaxy", "Clouds", "Squiggle"];
  return (
    <div className="relative pt-20 px-5 w-full">
      {/* {products.map((p) => (
        <ul>
          <li key={products.indexOf(p)}>
            <p key={products.indexOf(p)}>{p}</p>
          </li>
        </ul>
      ))} */}
      <div className="grid grid-cols-2 gap-x-5 gap-y-8  items-center">
        <ProductCard product="hi 1" /> <ProductCard product="hi 2" />{" "}
        <ProductCard product="hi 3" /> <ProductCard product="hi 4" />
        <ProductCard product="hi 3" /> <ProductCard product="hi 4" />
      </div>

      <Image
        src="/homepage-bg.png"
        alt="home page bg"
        className="min-h-screen fixed top-0 left-0 -z-10"
        fill={true}
        draggable={false}
        priority
      />
    </div>
  );
}
