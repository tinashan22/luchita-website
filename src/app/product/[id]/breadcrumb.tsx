import { ProductRecord } from "@/interfaces";
import { useRouter } from "next/navigation";

export default function ProductBreadcrumb({
  product,
}: {
  product: ProductRecord | undefined;
}) {
  const router = useRouter();

  return (
    <div className="flex items-start font-garamond  text-xs md:text-base  translate-y-[-6px] md:translate-y-[-20px]">
      {" "}
      <button
        className="hover:opacity-100 opacity-60 "
        onClick={() => router.back()}
      >
        {" "}
        Shop all{" "}
      </button>
      <p className="opacity-60">/ {product?.name}</p>
    </div>
  );
}
