import { Key, Star } from "lucide-react";
import Paragraph from "./Paragraph";
import SocialIcons from "./SocialIcons";

const ReviewCard = () => {
  const starAmout = [0, 1, 2, 3, 4];
  return (
    <div className="border-2 border-color rounded-2xl p-6 my-10">
      <div className="flex items-center justify-between">
        <div className="flex-grow-[2]">
          <h4 className="text-xl">John Doe</h4>
          <Paragraph className="text-slate-600">Nigeria, Lagos</Paragraph>
        </div>
        <SocialIcons />
      </div>
      <div>
        <div className="flex items-center justify-start gap-1 py-5">
          {starAmout.map((star, Key) => {
            return <Star color="gold" />;
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
