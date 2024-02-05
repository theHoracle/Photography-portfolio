import { ChevronDown } from "lucide-react";

const Accordion = () => {
  return (
    <div className="border-b-2 border-color py-8 px-4">
      <div className="flex items-center justify-between">
        <h4 className="text-xl uppercase">
          What type of photography do you specialize in?
        </h4>
        <div className="border-2 border-color rounded-full p-4">
          <ChevronDown height={30} width={30} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Accordion;
