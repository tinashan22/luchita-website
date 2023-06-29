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
  return (
    <div className="min-h-screen pt-8 bg-brandCream text-brandPurple w-screen px-6">
      <div className=" hidden md:block ">
        <div className=" w-1/2 flex flex-col border ">
          <div className="  image-container">
            <Image
              src="/product.png"
              alt="home page bg"
              sizes="(max-width: 1200px) 50vw, 50vw"
              className="image"
              fill={true}
              draggable={false}
            />
          </div>
          <div className="image-container">
            <Image
              src="/product.png"
              alt="home page bg"
              className="image"
              fill={true}
              draggable={false}
            />
          </div>
          <div className="image-container">
            <Image
              src="/product.png"
              alt="home page bg"
              className="image"
              fill={true}
              draggable={false}
            />{" "}
          </div>
        </div>
        <div className="fixed right-20 top-20 w-2/5 border">
          <ProductInfoText />
          <div className="w-[280px] flex  flex-col border">
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
      </div>

      <div className="  md:hidden">
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
