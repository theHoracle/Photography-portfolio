"use client"

import SectionSlide from "./SectionSlide";
import { ReactNode, useEffect, useState } from "react";
import { Work } from "@prisma/client";
import WorkCard from "./WorkCard";

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
      slides={slides}
      slidesPerView={3} />
    </div>
  );
};

export default PortfolioTab;

