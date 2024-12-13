import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { SplideSlide } from "@splidejs/react-splide";

interface Props {
  id?: number;
  img: StaticImageData;
  alt: string;
}

function CarouselImageComponent({ img, alt }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <SplideSlide>
      <motion.div
        whileHover={{
          scaleX: 1.2,
          scaleY: 1.2,
        }}
        className="bg-yellow-400 h-full w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image src={img} loading="lazy" alt={alt} className="w-full h-full" />
        {isHovered ? (
          <div className="bg-yellow more-btn cursor-pointer ">VIEW MORE</div>
        ) : null}
      </motion.div>
    </SplideSlide>
  );
}

export default CarouselImageComponent;
