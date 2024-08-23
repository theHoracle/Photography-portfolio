"use client"
import { ArrowUpRightIcon } from "lucide-react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { Button } from "./button";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import MaxWidthWrapper from "../MaxWidthWrapper";

const Hero = () => {
  const images = [
    "/gallery/image1.jpeg",
    "/gallery/image1b.jpeg",
    "/gallery/image1b.jpeg",
    "/gallery/image1b.jpeg",
    "/gallery/image2.jpeg",
    "/gallery/image3.jpeg",
    "/gallery/image3b.jpeg",
  ]
  return (
    <div className="relative h-[calc(100lvh-80px)] w-screen mx-auto">
      <MaxWidthWrapper>     
      <div className="py-4 w-full flex flex-col items-start md:flex-row md:items-center md:justify-between md:py-14">
      <div>
        <Paragraph className="uppercase">Stunning Photography By</Paragraph>
        <Heading size="lg">theLatunji</Heading>
      </div>
      <div className="pt-8 md:pt-0">
        <Heading size="sm">
          <span className="flex justify-start items-center gap-2 ">
            Let&apos;s
            <Button>
              <ArrowUpRightIcon />
            </Button>
          </span>
          work together
        </Heading>
      </div>
      </div>
      </MaxWidthWrapper>
      <div className="absolute inset-0 -z-20">
      <Swiper 
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      centeredSlides={true}
      className="w-full h-full">
        {images.map((image, index) => (
          <SwiperSlide key={index}
          className="relative min-w-screen"
          >
            <Image
            src={image}
            alt="Latunji works"
            fill
            className="object-cover object-center "
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};
export default Hero;
