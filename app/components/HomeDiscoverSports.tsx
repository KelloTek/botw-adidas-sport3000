"use client";
import React from "react";
import { carouselDiscoverImg } from "@/public/static";
import CarouselImage from "./CarouselImage";
import { StaticImageData } from "next/image";
import "@splidejs/react-splide/css";
import { Splide} from "@splidejs/react-splide";

export default function HomeDiscoverSports() {
  return (
    <section className=" h-screen w-full">
      <div className="h-full w-full bg-gradient-to-b from-black to-gray py-12">
        <div className=" flex justify-center flex-col items-center">
          <h1 className="text-center text-white ">
            Découvre les <span className="text-yellow font-bold">SPORTS</span>
          </h1>
          <div className="bg-white w-1/4 h-px rounded-md" />
        </div>
        <div className=" h-4/5 w-full flex justify-center items-center">
          <div className=" w-full h-3/4  ">
            <Splide
              options={{
                type: "loop",
                rewind: false,
                perPage: 4,
                width: "100vw",
                height: "100%",
                fixedWidth: "100%",
                fixedHeight: "100%",
                arrows: false,
                pagination: false,
              }}
              tag="div"
            >
              {carouselDiscoverImg.map(
                (item: { id: number; img: StaticImageData; alt: string }) => (
                  <CarouselImage
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    alt={item.alt}
                  />
                )
              )}
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * {carouselDiscoverImg.map(
                (item: { id: number; img: StaticImageData; alt: string }) => (
                  <CarouselImageComponent
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    alt={item.alt}
                  />
                )
              )}
 */
