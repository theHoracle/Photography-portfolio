"use client"
import Image from "next/image";
import SectionSlide from "./SectionSlide";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { Work } from "@prisma/client";

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
      const portfolio: Work[] | undefined = data.works

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
      slides={[...slides, ...slides, ...slides]}
      slidesPerView={3} />
      
    </div>
  );
};

export default PortfolioTab;


export const WorkCard = ({thumbnail, title, createdAt, slug}: Work) => {
  return <div className="max-w-[500px] mx-auto md:mx-0 flex flex-col gap-2 w-full">
    <div className="relative overflow-hidden rounded-xl aspect-square">
      <Image
      src={thumbnail}
      fill
      alt={`${title} img`}
      className="object-cover object-center size-full"
       />
    </div>
    <div className="flex items-center justify-between gap-2 text-xs lg:text-sm w-full">
      <div className="flex-1">
        <h5 className="truncate capitalize">{title}</h5>
        <p className="text-[10px] lg:text-xs">{createdAt.toString()}</p>
      </div>
      <div className="flex justify-end uppercase">
        <Link href={`/works/${slug}`}  className="flex max-w-fit gap-1 items-end text-xs justify-end border-b-2 border-accent hover:border-background" >
        View Project &#x2197;
        </Link>
      </div>
    </div>
  </div>
}