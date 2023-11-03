export default function PlaceHolderProductCard() {
  return (
    <div className="flex-col animate-pulse">
      <div className="relative w-full h-56 md:h-96 rounded-xl bg-brandPink opacity-80 dark:bg-gray-200  "></div>
      <div className="mt-3 w-3/4 rounded-md h-[12px] bg-brandPink dark:bg-gray-200 "></div>
      <div className=" mt-3 w-1/4 rounded-md h-[12px] bg-brandPink dark:bg-gray-200 "></div>
    </div>
  );
}
