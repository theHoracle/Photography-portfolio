import { SocialIcon } from "react-social-icons";

const SocialIcons = () => {
  return (
    <div className="all-border border-color flex items-center justify-between rounded-full p-2 w-3/5 max-w-52">
      <div className="border-2 border-color bg-gray-900 hover:bg-slate-900 rounded-full">
        <SocialIcon
          className="text-sm"
          bgColor="transparent"
          url="www.facebook.com"
        />
      </div>
      <div className="border-2 border-color bg-gray-900 hover:bg-slate-900 rounded-full">
        <SocialIcon bgColor="transparent" url="www.x.com" />
      </div>
      <div className="border-2 border-color bg-gray-900 hover:bg-slate-900 rounded-full">
        <SocialIcon bgColor="transparent" url="www.instagram.com" />
      </div>
    </div>
  );
};

export default SocialIcons;
