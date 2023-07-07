"use client";

import Image from "next/image";
import { FreeMode, Navigation, Pagination } from "swiper";
// import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useEffect } from "react";
import "swiper/css"; // core Swiper
import "swiper/css/pagination"; // Pagination module
import "@/app/globals.css";
import { Product } from "@/interfaces";
import ProductPhotoSlider from "./productPhotoContainer";
import ProductInfoText from "./productInfoText";
import LargeButton from "@/components/buttonLarge";
import { ButtonType } from "@/constants";
import { useRouter } from "next/navigation";
import FloatingMenu from "@/components/floatingMenu";
import { LargeProductImage } from "./photoContainers";
import DesktopProductView from "./desktopProductView";

export default function Page({
  params,
}: {
  params: { id: string; product: Product };
}) {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      injectStyles: [
        `
          .swiper-pagination-bullet{
            width: 10px;
            height: 10px;
            background-color: rgb(55,31,59);
          }
      `,
      ],
    };
  }, []);

  const router = useRouter();
  return (
    <div className="min-h-screen pt-8 bg-brandCream  selection:bg-brandPink text-brandPurple w-screen px-6">
      {/* desktop product page */}
      <DesktopProductView params={{ id: params.id }} />

      <div className="hidden md:block ">
        <div className=" w-1/2 flex flex-col  pb-32">
          <div className="flex items-start font-garamond  text-md translate-y-[-20px]">
            {" "}
            <button
              className="hover:opacity-100 opacity-60 "
              onClick={() => router.back()}
            >
              {" "}
              Shop all{" "}
            </button>
            <p className="opacity-60">/ Product Name</p>
          </div>

          <LargeProductImage imageUrl="/product.png" />
          <LargeProductImage imageUrl="/product.png" />
          <LargeProductImage imageUrl="/product.png" />
          <LargeProductImage imageUrl="/product.png" />
        </div>
        <div className="fixed  right-6 lg:right-20 top-20 w-2/5">
          <ProductInfoText />
          <div className=" w-full lg:w-[280px] flex flex-col">
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
          </div>
        </div>
        <FloatingMenu />
      </div>

      {/* mobile product page */}
      <div className=" md:hidden">
        <Swiper
          ref={swiperRef}
          autoHeight={true}
          modules={[Pagination, Navigation, FreeMode]}
          navigation={{
            enabled: true,
          }}
          freeMode={{ enabled: true, sticky: true }}
          pagination={{
            clickable: true,
            hideOnClick: false,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="h-[544px]">
              <Image
                src="/product.png"
                alt="home page bg"
                className=" object-cover  "
                fill={true}
                draggable={false}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-[544px]">
              <Image
                src="/product.png"
                alt="home page bg"
                className="object-cover "
                fill={true}
                draggable={false}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className=" h-[544px]">
              <Image
                src="/product.png"
                alt="home page bg"
                className="object-cover "
                fill={true}
                draggable={false}
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <ProductInfoText />
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
    </div>
  );
}
