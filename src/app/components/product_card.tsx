import Image from "next/image";

export default function ProductCard({ product }: { product: string }) {
  return (
    <div className="flex-col">
      <div className="relative w-full h-56 ">
        <Image
          src="/product.png"
          alt="home page bg"
          className="rounded-xl object-cover border border-brandPurple"
          // className="min-h-screen fixed top-0 left-0 -z-10"
          //   width={100}
          //   height={100}
          fill={true}
          draggable={false}
          priority
        />
      </div>
      <div className="pl-1 pt-3">
        <p className="font-roboto">{product}</p>
        <p>$40</p>
      </div>
    </div>
  );
}
