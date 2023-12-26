"use client";

import { ProductRecord } from "@/interfaces";
import Image from "next/image";
import { useRef, useState } from "react";
import { FreeMode, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import ProductInfoText from "./productInfoText";
import LargeButton from "@/components/buttonLarge";
import { ButtonType } from "@/constants";
import { useRouter } from "next/navigation";
import ProductBreadcrumb from "./breadcrumb";
import { AnimatePresence, motion } from "framer-motion";
import EmailSignUpModal from "@/components/emailSignUpModal";
import { framerLogger } from "@/stateLogger";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

export default function MobileProductView({
  product,
}: {
  product: ProductRecord | undefined;
}) {
  const swiperRef = useRef(null);
  const router = useRouter();
  const [modalShow, setModalShow] = useState(false);

  function handleClickJoinMail(e: React.MouseEvent) {
    e.preventDefault();
    setModalShow(true);
  }

  const { addItem } = useShoppingCart();

  const [cartBtnText, setCartBtnText] = useState("Add to cart");
  const [cartBtnIsDisabled, setCartBtnIsDisabled] = useState(false);

  async function updateBtnState() {
    setCartBtnText("Added to your cart");

    setCartBtnIsDisabled(true);

    setTimeout(() => {
      setCartBtnText("Add to cart");
      setCartBtnIsDisabled(false);
    }, 1800);
  }

  return (
    <motion.div className=" md:hidden">
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        mode="wait"
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => {
          framerLogger("product modal close");
        }}
      >
        {modalShow && (
          <EmailSignUpModal
            handleCloseModal={() => {
              setModalShow(false);
            }}
          />
        )}
      </AnimatePresence>
      <Swiper
        ref={swiperRef}
        autoHeight={true}
        modules={[Pagination, Navigation, FreeMode]}
        navigation={{
          enabled: true,
        }}
        loop={true}
        freeMode={{ enabled: true, sticky: true }}
        pagination={{
          clickable: true,
          hideOnClick: false,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {product?.photoList.map((photoUrl, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="h-[544px]">
                <Image
                  key={index}
                  src={photoUrl}
                  alt={product.name}
                  className=" object-cover  "
                  fill={true}
                  draggable={false}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ProductInfoText product={product} />

      <Link
        href={{
          pathname: "/checkout",
        }}
      ></Link>
      <div className="h-[12px]"></div>
      <LargeButton
        key="add to cart"
        type={ButtonType.LargePrimary}
        btnText={cartBtnText}
        disabled={cartBtnIsDisabled}
        handleClick={(e) => {
          addItem(
            {
              // Line item name to be shown on the Stripe Checkout page
              name: product!.name,
              // Optional description to be shown on the Stripe Checkout page
              description: product!.description,
              // A unique identifier for this item (stock keeping unit)
              sku: product!.id,
              // price in smallest currency unit (e.g. cent for USD)
              price: product!.price * 100,
              currency: "USD",
              // Optional image to be shown on the Stripe Checkout page
              image: product!.primaryPhoto,
            },
            { count: 1 }
          );
          updateBtnState();
        }}
      />
      <div className="h-[12px]"></div>
      {/* JOIN MAILING LIST BUTTON*/}
      <LargeButton
        key="secondary"
        type={ButtonType.LargeSecondary}
        btnText="☞ Join mailing list "
        handleClick={(e) => {
          handleClickJoinMail(e);
        }}
      />

      <div className="h-[96px]"></div>
    </motion.div>
  );
}
