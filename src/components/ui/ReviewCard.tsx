// import { Star } from "lucide-react";

import { Star } from "lucide-react";
import Paragraph from "./Paragraph";
import SocialIcons from "./SocialIcons";

const ReviewCard = () => {
  const starAmount = [0, 1, 2, 3, 4];
  return (
    <div className="max-w-96 border-2 border-border-primary  rounded-2xl px-4 py-6 my-4 md:my-6 overflow-hidden relative">
      <div className="w-full h-full rounded-2xl rotate-[35deg] translate-x-48 -translate-y-1/3 bg-border-primary/45 absolute -z-20"></div>
      <div className="w-full h-full rounded-2xl rotate-[35deg] -translate-x-48 translate-y-1/3 bg-border-primary/45 absolute -z-20"></div>
      <div className="flex items-center justify-between">
        <div className="flex-grow-[2]">
          <h4 className="text-xl">John Doe</h4>
          <Paragraph className="text-slate-600">Nigeria, Lagos</Paragraph>
        </div>
        <SocialIcons small />
      </div>
      <div>
        <div className="flex items-center justify-start gap-1 py-5">
          {starAmount.map((star, index) => {
            return <Star className="text-[#ffd700]" key={index} />;
          })}
        </div>
        <Paragraph className="text-xl">
          Lorem ipsum dolor sit amet elit. Minima est at magnam tempora nihi
          consectetur.
        </Paragraph>
      </div>
    </div>
  );
};
export default ReviewCard;
