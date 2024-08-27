import SectionSlide from "./SectionSlide";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Project } from "@prisma/client";
import ProjectCard from "./ProjectCard";

interface PortfolioTabProps {
  portfolio: Project[];
}

const PortfolioTab = ({portfolio}: PortfolioTabProps) => {

  return (
    <div className="my-8">
      <MaxWidthWrapper>
        <SectionSlide
        href="/portfolio"
        section="portfolio"
        sectionTitle="Explore my photography work"
        slides={
          portfolio?.map((work) => (
            <ProjectCard
            key={work.id}
            {...work}  />
          ))
        }
        slidesPerView={3} />
      </MaxWidthWrapper>
    </div>
  );
};

export default PortfolioTab;

