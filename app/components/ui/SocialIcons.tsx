import { SocialIcon } from "react-social-icons";

type Props = {
  small?: boolean;
};

const SocialIcons = (props: Props) => {
  const { small } = props;
  const smallIcon = small ? "scale-90 overflow-hidden" : " ";
  const smallPad = small ? "p-1" : "p-2";
  return (
    <div
      className={`all-border border-border-primary bg-background-color flex items-center justify-between rounded-full ${smallPad} max-w-52`}
    >
      <div
        className={`border-2 border-border-secondary bg-border-primary hover:bg-slate-900 rounded-full ${smallIcon}`}
      >
        <SocialIcon bgColor="transparent" url="www.facebook.com" />
      </div>
      <div
        className={`border-2 border-border-secondary bg-border-primary hover:bg-slate-900 rounded-full ${smallIcon}`}
      >
        <SocialIcon bgColor="transparent" url="www.x.com" />
      </div>
      <div
        className={`border-2 bg-border-primary border-border-secondary hover:bg-slate-900 rounded-full ${smallIcon}`}
      >
        <SocialIcon bgColor="transparent" url="www.instagram.com" />
      </div>
    </div>
  );
};

export default SocialIcons;
