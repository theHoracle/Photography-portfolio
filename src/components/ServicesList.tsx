import { getServicesAndProjects } from "@/hooks/get-services";
import PortfolioSlides from "./PortfolioSlides";
import { Project, Services } from "@prisma/client";

interface ServicesListProps {
  services: ({projects: Project[]} & Services)[]

}

const ServicesList = ({services}: ServicesListProps) => {
  try {
    if (!services || !Array.isArray(services)) {
      console.error("Services is not an array:", services);
      return <div>Error: Unable to load services</div>;
    }

    return (
      <div>
        {services.map((service) => {
          console.log("Processing service:", service); // Log each service
          return (
            <PortfolioSlides
              key={service.id}
              slides={service.projects}
              title={service.title}
            />
          );
        })}
      </div>
    );
  } catch (error: any) {
    console.error("Error in ServicesList:", error);
    return <div>Error: {error.message}</div>;
  }
};

export default ServicesList;