import ImageWithBorder from "./imageWithBorder";

export default function CommissionPageGridRight({
  productName,
  description,
}: {
  productName: string;
  description: string;
}) {
  return (
    <div className=" grid-cols-2 md:grid-cols-3 grid gap-x-5 gap-y-5  w-screen h-content px-4 md:px-20 py-8">
      {[1, 2, 3].map((imageNum) => {
        return (
          <ImageWithBorder
            key={imageNum}
            imageUrl={`/commission/${productName}/${imageNum}.jpg`}
            blurImageUrl={`/commission-blur/${productName}/${imageNum}.jpg`}
            description={description}
          />
        );
      })}
      <div className="px-4 py-3 bg-brandLime rounded-lg md:hidden flex items-center">
        {" "}
        <p className="font-garamond text-md text-center ">{description}</p>
      </div>
    </div>
  );
}
