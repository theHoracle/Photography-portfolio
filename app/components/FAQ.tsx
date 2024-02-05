import TitledLink from "./TitledLink";
import Accordion from "./ui/Accordion";

const FAQ = () => {
  return (
    <div>
      <TitledLink desc="FAQ" title="frequently asked questions" />
      <Accordion />
      <Accordion />
    </div>
  );
};

export default FAQ;
