"use client"

import SectionSlide from "./SectionSlide";
import { ReactNode, useEffect, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useGetProjects } from "@/hooks/get-projects";
import { Project } from "@prisma/client";
import ProjectCard from "./ProjectCard";



const PortfolioTab = () => {
  const [slides, setSlides] = useState<ReactNode[]>([]);
  const {data, isSuccess} = useGetProjects()
  const portfolio: Project[] | undefined = data?.projects

  useEffect(() => {
    const getPortfolio = () => {
      if(isSuccess) {
        const slidesArray = portfolio?.map((work) => (
          <ProjectCard
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

