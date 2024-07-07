import PageIntro from "../../components/PageIntro";
import FAQ from "../../components/MainComponents/FAQ";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Plans from "@/components/Plans";
import fetchServices from "../lib/fetchServices";

export default async function Services() {
  const services = await fetchServices();
  return (
    <MaxWidthWrapper>
      <PageIntro
        page="services"
        head="Diverse Photography Offerings"
        note="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt saepe nesciunt facilis vitae et porro facere mollitia quia culpa fuga id repellendus, quam numquam, aliquid impedit fugiat officia totam in."
      />
      <section>
        <Plans services={services} />
      </section>
      <FAQ />
    </MaxWidthWrapper>
  );
}
