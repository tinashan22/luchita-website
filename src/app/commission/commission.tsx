"use client";
import Image from "next/image";
import "../../app/globals.css";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ImageWithBorder from "./imageWithBorder";
import CommissionPageGridRight from "./gridRight";
import { CommissionPageGridLeft } from "./gridLeft";
import CopyrightLine from "@/components/copyright";

export default function CommissionPage() {
  return (
    <div className="h-full w-full flex flex-col ">
      {/* Text Grid */}

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

      <div className="pb-32">
        <CommissionPageGridRight
          productName="holdMeUp"
          description="A playful reference to pop culture, this representational design makes us smile with delight."
        />

        <CommissionPageGridLeft
          productName="jellyfish"
          description="Taking inspiration from luminescent deep sea creatures, this brooch brings the refreshing ocean breeze and summer vibes."
        />
        <CommissionPageGridRight
          productName="corndog"
          description="Nicknamed “corndog”, this earring is both playful and elegant, holding space on its own."
        />
        <CommissionPageGridLeft
          productName="other"
          description="Various personalized designs for spirits warm and cool."
        />
      </div>

      <div className="pt-0 pb-32 lg:pb-4 px-4 md:px-20 ">
        {" "}
        <CopyrightLine />{" "}
      </div>
    </div>
  );
}
