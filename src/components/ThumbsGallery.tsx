"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import Image from 'next/image';

interface ThumbsGalleryProps {
    images: string[]
}

const ThumbsGallery = ({ images }: ThumbsGalleryProps) => {
    const [thumbsSwiper, setThumbsSwuper] = useState(null)
    return <div>
        <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className='h-1/2 relative'>
                    <Image
                    src={image} alt={`project image ${index}`} 
                    fill
                    className='object-cover object-center size-full'
                    />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
}
export default ThumbsGallery;