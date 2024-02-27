import { SocialIcon } from "react-social-icons";

type Props = {
  small?: boolean;
};

const SocialIcons = (props: Props) => {
  const { small } = props;
  const smallIcon = small ? "scale-90 overflow-hidden" : " ";

  return (
    <div
      className={`all-border border-border-primary bg-background-color flex items-center justify-between gap-1.5 rounded-full p-1 md:p-2 max-w-48 md:max-w-52`}
    >
      <div
        className={`border-2 border-border-secondary bg-border-primary hover:bg-border-secondary scale-90 md:scale-100  rounded-full ${smallIcon}`}
      >
        <SocialIcon bgColor="transparent" url="https://www.facebook.com" />
      </div>
      <div
        className={`border-2 border-border-secondary bg-border-primary hover:bg-border-secondary rounded-full scale-90 md:scale-100 ${smallIcon}`}
      >
        <SocialIcon bgColor="transparent" url="https://www.x.com" />
      </div>
      <div
        className={`border-2 bg-border-primary border-border-secondary hover:bg-border-secondary rounded-full scale-90 md:scale-100 ${smallIcon}`}
      >
        <SocialIcon bgColor="transparent" url="https://www.instagram.com" />
      </div>
    </div>
  );
};

export default SocialIcons;
