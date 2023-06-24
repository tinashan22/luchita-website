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
    <div className="min-h-screen pt-20 bg-brandCream text-brandPurple w-screen px-6">
      <div className=" rounded-xl border border-brandPurple ">
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
          <SwiperSlide className="">
            <div className=" h-[544px]">
              <Image
                src="/product.png"
                alt="home page bg"
                className=" object-cover rounded-xl   "
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
                className="object-cover rounded-xl "
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
                className="object-cover rounded-xl "
                fill={true}
                draggable={false}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>Product Id:{params.id}</div>
    </div>
  );
}
