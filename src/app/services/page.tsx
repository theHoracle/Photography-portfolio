import PageIntro from "../../components/PageIntro";
import FAQ from "../../components/FAQ";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Plans from "@/components/Plans";

export default function Services() {
  
  return (
    <MaxWidthWrapper>
      <PageIntro
        page="services"
        head="Diverse Photography Offerings"
        note="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt saepe nesciunt facilis vitae et porro facere mollitia quia culpa fuga id repellendus, quam numquam, aliquid impedit fugiat officia totam in."
      />
      <section>
        <Plans />
      </section>
      <FAQ />
    </MaxWidthWrapper>
  );
}
