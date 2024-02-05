import Paragraph from "./Paragraph";
import SocialIcons from "./SocialIcons";

const ReviewCard = () => {
  return (
    <div className="border-2 border-color rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex-grow-[2]">
          <h4 className="text-xl">John Doe</h4>
          <Paragraph className="text-slate-600">Nigeria, Lagos</Paragraph>
        </div>
        <SocialIcons />
      </div>
    </div>
  );
};
export default ReviewCard;
