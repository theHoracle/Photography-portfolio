
import FAQ from "@/components/FAQ";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageIntro from "@/components/PageIntro";
import Plans from "@/components/Plans";

export default function Services() {
  
  return (
    <div>
    <MaxWidthWrapper>
      <PageIntro
        page="services"
        head="Diverse Photography Offerings"
        note="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt saepe nesciunt facilis vitae et porro facere mollitia quia culpa fuga id repellendus, quam numquam, aliquid impedit fugiat officia totam in."
        />
      <section>
        <Plans />
      </section>
    </MaxWidthWrapper>
      <FAQ />
    </div>
  );
}
