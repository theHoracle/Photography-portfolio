"use client"

import {Swiper, SwiperSlide} from "swiper/react"
import type SwiperType from "swiper"
import 'swiper/css';
import { useEffect, useState } from "react";
import Heading from "./ui/Heading";
import LeftRightButton from "./ui/LeftRightButton";
import { Work } from "@prisma/client";
import { WorkCard } from "./PortfolioTab";

interface PortfolioSlidesProps {
    slides: Work[]
    title: String
}

const PortfolioSlides = ({slides,title}: PortfolioSlidesProps) => {
    console.log(slides)
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
        <Heading size="sm" className="mb-4">
          {title}
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
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }}
    className="h-full w-full"
    >
       {slides?.map((slide, index) => {
        return <SwiperSlide key={index}
        className="my-10">
            <WorkCard {...slide} />
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

export default PortfolioSlides