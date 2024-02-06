import { ChevronLeft, ChevronRight } from "lucide-react";

const LeftRightButton = () => {
  return (
    <div className="border-2 border-border-primary rounded-full mx-auto my-10 flex  max-w-36 items-center justify-between p-2">
      <div className="border border-border-secondary rounded-full bg-[rgb(28,28,33)] p-2">
        <ChevronLeft height={35} width={35} />
      </div>
      <div className="border border-border-secondary rounded-full bg-[rgb(28,28,33)] p-2">
        <ChevronRight height={35} width={35} />
      </div>
    </div>
  );
};

export default LeftRightButton;
