"use client"
import Image from "next/image";
import SectionSlide from "./SectionSlide";
import { ReactNode, useEffect, useState } from "react";
import { Works } from "@prisma/client";
import Link from "next/link";

export const getWorks = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/works`,
  );
  if (!res.ok) throw new Error("Fetch failed");
  return res.json();
};

const PortfolioTab = () => {
  const [slides, setSlides] = useState<ReactNode[]>([]);
  useEffect(() => {
    const getPortfolio = async () => {
      const data = await getWorks()
      const portfolio: Works[] | undefined = data.works

      const slidesArray = portfolio?.map((work) => (
        <WorkCard 
        key={work.id}
        {...work}  />
      ))
      if(slidesArray) {
        setSlides(slidesArray)
      }
    }
    getPortfolio()
  }, [])

  return (
    <div className="w-full my-8">
      <SectionSlide
      href="/portfolio"
      section="portfolio"
      sectionTitle="Explore my photography work"
      slides={slides}
      slidesPerView={3} />
      
    </div>
  );
};

export default PortfolioTab;


const WorkCard = ({thumbnail, title, createdAt, slug}: Works) => {
  return <div className="max-w-[500px] flex flex-col w-full md:w-[32%]  ">
    <div className="relative overflow-hidden rounded-xl min-h-[594px]">
      <Image
      src={thumbnail}
      fill
      alt={`${title} img`}
      className="object-cover object-center size-full"
       />
    </div>
    <div className="flex items-start justify-between gap-2 text-sm w-full">
      <div className="flex-1">
        <h5 className="truncate">{title}</h5>
        <p className="text-xs">{createdAt.toString()}</p>
      </div>
      <div className="flex-1 uppercase border-b-2 border-accent hover:border-background">
        <Link href={`/works/${slug}`} className="flex gap-2">
        View Project &#x2197;
        </Link>
      </div>
    </div>
  </div>
}