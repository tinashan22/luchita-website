import { Product } from "@/interfaces";
import LargeButton from "./buttonLarge";
import { ButtonType } from "@/constants";
import Image from "next/image";

type ModalProps = {
  handleCloseModal: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  product: Product;
};

export default function ProductModalBody({
  handleCloseModal,
  product,
}: ModalProps) {
  return (
    <div className="flex-col w-full bg-brandCream  relative">
      <div
        className="btn absolute right-0 z-20 text-xl px-4 "
        onClick={handleCloseModal}
      >
        X
      </div>
      <div className="relative w-full h-[337px]">
        <Image
          alt="product image"
          className="object-cover"
          fill={true}
          src="/product.png"
          placeholder="empty"
        />
      </div>
      <div className="flex-col items-center px-4 pt-4 pb-10 text-brandPurple">
        <p className="font-roboto font-medium text-2xl">{product.name}</p>
        <p className="font-garamond text-xl">${product.price}</p>
        <p className="font-garamond text-sm">
          Earrings sold in pairs. All styles customizable. DM me @lucha.luchita
          to customize in a color of your liking.
        </p>
      </div>
      <div className="pb-10 px-8">
        <LargeButton
          key="primary"
          type={ButtonType.LargePrimary}
          btnText="Buy now"
          handleClick={(e) => {
            handleCloseModal(e);
            alert("go to checkout");
          }}
        />
        <div className="h-[12px]"></div>
        <LargeButton
          key="secondary"
          type={ButtonType.LargeSecondary}
          btnText="Add to Cart"
          handleClick={() => {
            alert("adding to cart");
          }}
        />
      </div>
    </div>
  );
}
