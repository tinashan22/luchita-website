"use client";
import Image from "next/image";
import "../../app/globals.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import ImageWithBorder from "./imageWithBorder";

export default function CommissionPage() {
  return (
    <div className="h-full w-full flex flex-col ">
      <div className="px-4 md:px-20 pt-6  grid grid-cols-1 md:grid-cols-3 md:gap-x-5 gap-y-3">
        <h1 className="font-roboto text-2xl font-medium"> Commission</h1>
        <p className="font-garamond text-xl md:pb-0 ">
          {" "}
          These unique creations are born out of personalized consultation. If
          you’d like to commission a piece, DM{" "}
          <span>
            {" "}
            <a
              target="_blank"
              className="font-medium hover:bg-brandLime underline decoration-brandPurple/70 md:no-underline"
              href={"https://www.instagram.com/lucha.luchita/"}
            >
              @lucha.luchita
            </a>
          </span>{" "}
          on Instagram.{" "}
        </p>
        <p className="font-garamond text-xl">
          {" "}
          Lucha Luchita started out as a commission-only project. Here are some
          of the pieces we’ve custom-made for clients over the past years.{" "}
        </p>
      </div>
      <div className=" grid-cols-2 md:grid-cols-3 grid gap-x-5 gap-y-5  w-screen h-content px-4 md:px-20 py-8">
        <ImageWithBorder imageUrl="/commission/holdMeUp/1.jpg" />
        <ImageWithBorder imageUrl="/commission/holdMeUp/2.jpg" />
        <ImageWithBorder imageUrl="/commission/holdMeUp/3.jpg" />
        <div className="px-4 py-3 bg-brandLime rounded-lg md:hidden flex items-center">
          {" "}
          <p className="font-garamond text-md text-center ">
            These earrings need an image description that will go here.
          </p>
        </div>
      </div>

      <div className="grid-cols-2 md:grid-cols-3  grid-flow-row-dense grid gap-x-5 gap-y-5   w-screen h-content  px-4 md:px-20 py-8">
        <ImageWithBorder imageUrl="/commission/jellyfish/1.jpg" />
        <ImageWithBorder imageUrl="/commission/jellyfish/2.jpg" />
        <div className="px-4 py-3 bg-brandLime rounded-lg md:hidden flex items-center">
          {" "}
          <p className="font-garamond text-md text-center ">
            This brooch also needs an image description that will go here.
          </p>
        </div>
        <ImageWithBorder imageUrl="/commission/jellyfish/4.jpg" />
      </div>
    </div>
  );
}
