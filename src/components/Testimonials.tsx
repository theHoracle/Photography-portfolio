"use client"
import { ArrowRight } from "lucide-react";
import LeftRightButton from "./ui/LeftRightButton";
import ReviewCard from "./ui/ReviewCard";
import Link from "next/link";
import Paragraph from "./ui/Paragraph";
import Heading from "./ui/Heading";
import { AddReviewDialog } from "./AddReviewDialog";
import { Button } from "./ui/button";
import { ReactNode, useEffect, useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react"
import type SwiperType from "swiper"
import 'swiper/css';
import { Review } from "@prisma/client";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface TestimonialsProps {
  reviews: Review[]
}

const Testimonials = ({reviews}: TestimonialsProps) => {

  const [slides, setSlides] = useState<ReactNode[]>([]);
  const [swiper, setSwiper] = useState<null | SwiperType>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideConfig, setSlideConfig] = useState({
      isBegining: true,
      isEnd: activeIndex === (reviews?.length ?? 0) - 1
  })

  
  useEffect(() => {
      swiper?.on("slideChange", ({activeIndex}) => {
          setActiveIndex(activeIndex)
          setSlideConfig({
              isBegining: activeIndex === 0,
              isEnd: activeIndex === (reviews?.length ?? 0) - 1
          })
      })
  }, [swiper, reviews])

  
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between  py-8  items-start border-b-2 mb-4 border-color">
        <div className="">
          <div>
            <Paragraph variants="topic">Testimonials</Paragraph>
            <Heading size="sm" className="mb-4">
              what my client say
            </Heading>
          </div>
          <div className="md:flex md:items-end md:justify-between">
            <div className="">
              <Paragraph className="text-accent-color">Total Reviews</Paragraph>
              <Heading size="sm">{reviews?.length}</Heading>
            </div>
            <div className="hidden md:inline-block">
              <AddReviewDialog />
            </div>
          </div>
        </div>
        <div className="md:flex items-center gap-4 mt-6 md:mt-0">
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
              href="/reviews"
              className="flex items-center justify-between capitalize"
            >
              view all testimonials
              <ArrowRight width={25} height={20} />
            </Link>
          </Button>
        </div>
      </div>
      <Swiper 
      onSwiper={(swiper) => setSwiper(swiper)}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        400: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }}
      className="size-full"
      >
         {reviews?.map((review, index) => {
          return <SwiperSlide key={review.id}>
            <ReviewCard  {...review} />
          </SwiperSlide>
        })}
      </Swiper>
      <div className="md:hidden flex items-center flex-col gap-4 ">
        <AddReviewDialog />
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
    </MaxWidthWrapper>
  );
};

export default Testimonials;
