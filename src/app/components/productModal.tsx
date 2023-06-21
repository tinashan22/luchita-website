import { Product } from "@/interfaces";
import LargeButton from "./buttonLarge";
import { ButtonType, ProductType } from "@/constants";
import Image from "next/image";
import { Modal } from "react-overlays";
import { stateLogger } from "@/stateLogger";
import { useEffect } from "react";
import Backdrop from "./backdrop";
import { motion } from "framer-motion";

type ProductModalProps = {
  handleCloseModal: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  product: Product;
};

const animationVariants = {
  hidden: {
    opacity: 0.2,
    scale: 0.7,
    y: "100px",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: "0px",
    transition: {
      duration: 0.3,
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0.2,
    scale: 0.2,
    y: "400px",
    x: "200px",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function ProductModal({
  handleCloseModal,
  product,
}: ProductModalProps) {
  // Log state
  useEffect(() => {
    stateLogger("Modal", true);
    return () => stateLogger("Modal", false);
  }, []);

  return (
    <Backdrop onClick={handleCloseModal}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="m-auto "
        variants={animationVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div
          style={{
            WebkitMaskImage: "url(./modal-bg.svg)",
            maskImage: "url(./modal-bg.svg)",
          }}
          className="flex-col bg-brandCream w-[342px]  relative"
        >
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
            <h2 className="font-roboto font-medium text-2xl">{product.name}</h2>
            <h4 className="font-garamond text-xl">${product.price}</h4>
            <p className="font-garamond text-sm">{product.description}</p>
            {product.type === ProductType.Earrings && (
              <p className="font-garamond text-sm">
                <br />
                Earrings sold in pairs. All styles customizable. DM me
                @lucha.luchita to customize in a color of your liking.
              </p>
            )}
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
      </motion.div>
    </Backdrop>
  );
}
