import { AccordionContent } from "@radix-ui/react-accordion";
import TitledLink from "./TitledLink";
import { Accordion, AccordionItem, AccordionTrigger } from "./ui/accordion";
import {faqs} from "@/app/lib/faq";

const FAQ = () => {
  return (
    <div className="my-8 md:my-10">
      <TitledLink desc="FAQ" title="frequently asked questions" />
      <div>
      <Accordion type="single" collapsible className="w-full flex flex-col md:flex-row gap-3 flex-wrap">
      {faqs.map((faq, index) => {
      return <AccordionItem value={`item-${index + 1}`} key={index}
      className="flex-1"
      >
        <AccordionTrigger>{faq[0]}</AccordionTrigger>
        <AccordionContent>
          {faq[1]}
        </AccordionContent>
      </AccordionItem>
    }
  )}
    </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
