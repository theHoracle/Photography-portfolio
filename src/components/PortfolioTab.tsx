"use client"

import SectionSlide from "./SectionSlide";
import { ReactNode, useEffect, useState } from "react";
import WorkCard from "./WorkCard";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useAddProject } from "@/hooks/add-project";
import { useGetProjects } from "@/hooks/get-projects";
import { Project } from "@prisma/client";



const PortfolioTab = () => {
  const [slides, setSlides] = useState<ReactNode[]>([]);
  const {data, isSuccess} = useGetProjects()
  const portfolio: Project[] | undefined = data?.projects

  useEffect(() => {
    const getPortfolio = () => {
      if(isSuccess) {
        const slidesArray = portfolio?.map((work) => (
          <WorkCard
          key={work.id}
          {...work}  />
        ))
        if(slidesArray) {
          setSlides(slidesArray)
        }
      }
    }
    getPortfolio()
  }, [portfolio, isSuccess])

  return (
    <div className="my-8">
      <MaxWidthWrapper>
        <SectionSlide
        href="/portfolio"
        section="portfolio"
        sectionTitle="Explore my photography work"
        slides={slides}
        slidesPerView={3} />
      </MaxWidthWrapper>
    </div>
  );
};

export default PortfolioTab;

