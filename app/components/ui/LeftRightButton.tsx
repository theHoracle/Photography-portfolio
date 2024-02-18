import { ChevronLeft, ChevronRight } from "lucide-react";

const LeftRightButton = () => {
  return (
    <div className="border-2 bg-background-color border-border-primary rounded-full mx-auto my-10 flex  max-w-32 items-center justify-between p-1.5">
      <div className="border border-border-secondary rounded-full bg-[rgb(28,28,33)] p-2">
        <ChevronLeft height={30} width={30} />
      </div>
      <div className="border border-border-secondary rounded-full bg-[rgb(28,28,33)] p-2">
        <ChevronRight height={30} width={30} />
      </div>
    </div>
  );
};

export default LeftRightButton;
