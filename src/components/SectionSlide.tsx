"use client"

import {Swiper, SwiperSlide} from "swiper/react"
import type SwiperType from "swiper"
import 'swiper/css';
import { ReactNode, useEffect, useState } from "react";
import Heading from "./ui/Heading";
import { Button } from "./ui/button";
import { ArrowRight, ArrowUpRightIcon } from "lucide-react";
import Paragraph from "./ui/Paragraph";
import Image from "next/image";
import TitledLink from "./TitledLink";
import LeftRightButton from "./ui/LeftRightButton";
import Link from "next/link";

interface ServiceSliderProps {
    slides: ReactNode[] | (() => ReactNode)[];
    section: string
    sectionTitle: string
    href: string
    slidesPerView: number
}
const SectionSlide = ({slides,href,section,sectionTitle, slidesPerView}: ServiceSliderProps) => {
    const [swiper, setSwiper] = useState<null | SwiperType>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [slideConfig, setSlideConfig] = useState({
        isBegining: true,
        isEnd: activeIndex === (slides?.length ?? 0) - 1
    })

    useEffect(() => {
        swiper?.on("slideChange", ({activeIndex}) => {
            setActiveIndex(activeIndex)
            setSlideConfig({
                isBegining: activeIndex === 0,
                isEnd: activeIndex === (slides.length ?? 0) - 1
            })
        })
    }, [swiper, slides])
    return <div>
    <div className="flex flex-col md:flex-row md:items-center md:justify-between  py-8  items-start border-b-2 border-color">
      <div>
        <Paragraph variants="topic">{section}</Paragraph>
        <Heading size="sm" className="mb-4">
          {sectionTitle}
        </Heading>
      </div>
      <div className="md:flex items-center justify- gap-4">
          <div className="hidden md:inline-block">
            <LeftRightButton onClickLeftButton={(e) => {
                e.preventDefault()
                swiper?.slidePrev()
            }}
            onClickRightButton={(e) => {
                e.preventDefault()
                swiper?.slideNext()
            }}
            slideConfig={slideConfig}
             />
          </div>
        
          <Button variant="outlineTitle" size="lg">
            <Link
              href={href}
              className="flex items-center justify-between capitalize "
            >
              View all {section} &rarr;
            </Link>
          </Button>
      </div>
    </div>
    <Swiper
    onSwiper={(swiper) => setSwiper(swiper)}
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
      640: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: slidesPerView < 2 ? 1 : slidesPerView - 1
      },
      1024: {
        slidesPerView: slidesPerView
      }
    }}
    className="h-full w-full"
    >
       {slides.map((slide, index) => {
        return <SwiperSlide key={index}
        className="my-10">
            {slide}
        </SwiperSlide>
       })}
    </Swiper>
    <div className="md:hidden">
    <LeftRightButton onClickLeftButton={(e) => {
                e.preventDefault()
                swiper?.slidePrev()
            }}
            onClickRightButton={(e) => {
                e.preventDefault()
                swiper?.slideNext()
            }}
            slideConfig={slideConfig}
             />
    </div>
    </div>
}

export default SectionSlide