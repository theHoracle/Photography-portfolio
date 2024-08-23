"use client"
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import Paragraph from "./ui/Paragraph";
import Heading from "./ui/Heading";
import { Button } from "./ui/button";
import { services } from "@/app/lib/ServiceHighlights";
import SectionSlide from "./SectionSlide";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { motion, AnimatePresence } from "framer-motion";



const Service = () => {
  const serviceArr = [RetouchingSection, EventSection , PotraitsSection]
  return (
    <div className="my-8 flex flex-col gap-6">
      <SectionSlide href="/services"
      section="services"
      sectionTitle="My photography services"
      slidesPerView={1}
      slides={serviceArr} />
    </div>
  );
};

export default Service;

const EventSection = () => {
  return <div className="flex flex-col lg:flex-row-reverse gap-4">
        <div className="relative hidden lg:block rounded-3xl md:rounded-bl-[100px] overflow-hidden flex-[2] size-auto lg:flex-1">
          <Image
            className="object-cover object-center size-full"
            src="/img/j-cole.webp"
            alt="J-cole in the lights"
            fill
          />
        </div>
        <div className="flex-[3] lg:flex-1">
          <div className="flex flex-col gap-4">
            <Heading className="flex items-center justify-start gap-2">
              Events{" "}
              <Button>
                <ArrowUpRightIcon />
                {""}
              </Button>
            </Heading>
            <Paragraph className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              eius expedita beatae, dicta magnam recusandae veniam est! Aut
              voluptate quod aspernatur nihil, corporis error autem nemo unde ex
              tempore. Id culpa molestiae quis eaque veritatis neque.
            </Paragraph>
          </div>
          <div className="my-8 md:my-5">
            <h4 className="mb-2 text-sm">Service Highlights</h4>
            <div className="flex flex-col gap-2.5">
              {services.map((service, index) => {
                return <div key={index} className="border border-accent rounded-lg w-full p-4 uppercase">
                  <p>{service}</p>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
}

const RetouchingSection = () => {
  const images = [
    "/gallery/image1.jpeg",
    "/gallery/image1b.jpeg",
    "/gallery/image1.jpeg",
    "/gallery/image2.jpeg",
    "/gallery/image3.jpeg",
    "/gallery/image3b.jpeg",
    "/gallery/image2.jpeg",
    "/gallery/image3b.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [textUp, setTextUp] = useState(true)
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTextUp(!textUp)

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFade(false);
      }, 500); // Duration of fade out transition
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length, textUp]);

  return <div className="relative min-h-full w-full h-[520px] rounded-lg overflow-hidden">
    
    <h3 className={`absolute ${textUp ? "top-4 right-4" : "bottom-4 left-4"} text-3xl shadow font-bold text-center mb-4 z-50`}>Retouching Photos</h3>
    <Image
    src={images[currentIndex]}
    alt="ImageGallery"
    fill
    className={`object-cover object-center transition-opacity  ${fade ? 'fade-in-100' : 'fade-out-100'}`}
    />
</div>
}

const PotraitsSection = () => {
  return <div className="flex items-start">
    <div>
      <h3 className="text-2xl font-bold mb-4">
        Potraits
      </h3>

    </div>
    <div>
      
    </div>

  </div>
}