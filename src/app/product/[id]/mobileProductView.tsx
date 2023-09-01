"use client";

import { Product } from "@/interfaces";
import Image from "next/image";
import { useRef } from "react";
import { FreeMode, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import ProductInfoText from "./productInfoText";
import LargeButton from "@/components/buttonLarge";
import { ButtonType } from "@/constants";

export default function MobileProductView({
  product,
}: {
  product: Product | undefined;
}) {
  const swiperRef = useRef(null);
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
    <div className=" md:hidden">
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
      <LargeButton
        key="primary"
        type={ButtonType.LargePrimary}
        btnText="Buy now"
        handleClick={() => {
          alert("go to checkout");
        }}
      />
      <div className="h-[12px]"></div>

      <LargeButton
        key="secondary"
        type={ButtonType.LargeSecondary}
        btnText="Add to cart"
        handleClick={() => {}}
      />
      <div className="h-[54px]"></div>
    </div>
  );
}
