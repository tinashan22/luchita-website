import { Product } from "@/interfaces";
import { SwiperSlide } from "swiper/react";

export default function ProductPhotoSlider({ index }: { index: number }) {
  return (
    <SwiperSlide className=" border flex items-center ">
      <div className=" h-[500px] "> Slide {index.toString()}</div>
    </SwiperSlide>
  );
}
