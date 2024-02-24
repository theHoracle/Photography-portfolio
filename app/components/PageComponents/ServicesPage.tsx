import Plans from "../Plans";
import fetchServices from "@/app/lib/fetchServices";

const ServicesPage = async () => {
  const services = await fetchServices();
  return (
    <div>
      <Plans services={services} />
    </div>
  );
};

export default ServicesPage;
