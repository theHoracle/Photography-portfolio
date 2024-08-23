
import PortfolioSlides from "./PortfolioSlides";
import { Services, Work } from "@prisma/client";

interface ServicesListProps {
    initialData: any;
}

const ServicesList = ({initialData}: ServicesListProps) => {
    
    const services:(Services & { works: Work[] })[] | undefined = initialData
    console.log("Error")
    return <div>
    {services?.map((service) => {
      console.log("Service here: ", service);
      return (
        <PortfolioSlides
          key={service.id}
          slides={service.works}
          title={service.title}
        />
      );
    })}
  </div>
}

export default ServicesList;