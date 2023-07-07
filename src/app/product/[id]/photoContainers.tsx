import Image from "next/image";

export function MobileProductImage() {
  return <div></div>;
}

export function LargeProductImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="image-container pb-4">
      <Image
        src={imageUrl}
        alt="home page bg"
        sizes="(max-width: 1200px) 50vw, 50vw"
        className="image"
        fill={true}
        draggable={false}
      />
    </div>
  );
}
