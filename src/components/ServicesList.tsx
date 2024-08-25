import PortfolioSlides from "./PortfolioSlides";
import { Project, Services } from "@prisma/client";

interface ServicesListProps {
    initialData: (Services & { projects: Project[] })[] | undefined;
}

const ServicesList = ({initialData}: ServicesListProps) => {
    
    const services = initialData
    console.log("Error")
    return <div>
    { services?.map((service) => {
      return (
        <PortfolioSlides
          key={service.id}
          slides={service.projects}
          title={service.title}
        />
      );
    })}
  </div>
}

export default ServicesList;