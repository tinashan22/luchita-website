"use client";

import { Product } from "@/interfaces";
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

export default function MobileProductView({
  product,
}: {
  product: Product | undefined;
}) {
  const swiperRef = useRef(null);
  const router = useRouter();
  const [modalShow, setModalShow] = useState(false);

  function handleClickJoinMail(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    e.preventDefault();
    setModalShow(true);
  }
  // useEffect(() => {
  //   const swiperContainer = swiperRef.current;
  //   const params = {
  //     navigation: true,
  //     pagination: true,
  //     injectStyles: [
  //       `
  //         .swiper-pagination-bullet{
  //           width: 10px;
  //           height: 10px;
  //           background-color: rgb(55,31,59);
  //         }
  //     `,
  //     ],
  //   };
  // }, []);
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
                  alt="home page bg"
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
      {/* <LargeButton
        key="primary"
        type={ButtonType.LargePrimary}
        btnText="Buy now"
        handleClick={() => {
          alert("go to checkout");
        }}
      />
      <div className="h-[12px]"></div> */}

      <LargeButton
        key="secondary"
        type={ButtonType.LargeSecondary}
        btnText="☞ Join mailing list "
        handleClick={(e) => {
          handleClickJoinMail(e);
        }}
      />
      <div className="h-[54px]"></div>
    </motion.div>
  );
}
