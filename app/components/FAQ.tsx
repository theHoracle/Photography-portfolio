import TitledLink from "./TitledLink";
import Accordion from "./ui/Accordion";

const FAQ = () => {
  return (
    <div>
      <TitledLink desc="FAQ" title="frequently asked questions" />
      <div className="md:flex md:flex-wrap items-center justify-between flex-auto">
        <Accordion />
        <Accordion />
      </div>
    </div>
  );
};

export default FAQ;
