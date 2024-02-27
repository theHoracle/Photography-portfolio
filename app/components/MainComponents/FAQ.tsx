import TitledLink from "../TitledLink";
import Accordion from "../ui/Accordion";
import faqs from "@/app/lib/faq";

const FAQ = () => {
  return (
    <div className="my-8 md:my-10">
      <TitledLink desc="FAQ" title="frequently asked questions" />
      <div className="md:flex md:flex-wrap items-start justify-between flex-auto">
        {faqs.map((faq, index) => {
          return (
            <Accordion
              key={index}
              index={index}
              question={faq[0]}
              answer={faq[1]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
