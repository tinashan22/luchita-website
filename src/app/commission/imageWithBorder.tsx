import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageWithBorder({ imageUrl }: { imageUrl: string }) {
  const [showLabel, setLabelShow] = useState(false);

  return (
    <div
      onMouseOver={() => setLabelShow(true)}
      onMouseLeave={() => setLabelShow(false)}
      className="relative"
    >
      <div className="image-container relative m-h-[180px]">
        <Image
          className="absolute top-0 left-0 image rounded-lg border border-brandLime "
          sizes="100%"
          src={imageUrl}
          alt="product photo "
          priority={true}
          fill={true}
          draggable={true}
        />
      </div>
      {showLabel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className=" hidden md:block absolute bottom-4 right-4 z-10 px-4 py-3 bg-brandLime rounded-lg max-w-1/2 max-w-[75%]"
        >
          <p className="font-garamond text-md">
            Image description Image description Image description Image
            description
          </p>
        </motion.div>
      )}
    </div>
  );
}
