import { getServicesAndProjects } from "@/hooks/get-services";
import PortfolioSlides from "./PortfolioSlides";


const ServicesList = async () => {
  const services = await getServicesAndProjects()
  
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