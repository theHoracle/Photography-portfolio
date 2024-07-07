import { SocialIcon } from "react-social-icons";

type Props = {
  small?: boolean;
};

const SocialIcons = (props: Props) => {
  const { small } = props;
  const smallIcon = small ? "scale-90 overflow-hidden" : " ";

  return (
    <div
      className={`border-2 border-muted bg-background flex items-center justify-between gap-1.5 rounded-full p-1 md:p-2 max-w-48 md:max-w-52 transition-all`}
    >
      <div
        className={`border-2 border-secondary bg-primary dark:bg-background hover:bg-muted-foreground dark:hover:bg-muted-foreground scale-90 md:scale-100  rounded-full ${smallIcon}`}
      >
        <SocialIcon bgColor="transparent" url="https://www.facebook.com" />
      </div>
      <div
        className={`border-2 border-secondary  bg-primary dark:bg-background hover:bg-muted-foreground dark:hover:bg-muted-foreground rounded-full scale-90 md:scale-100 ${smallIcon}`}
      >
        <SocialIcon bgColor="transparent" url="https://www.x.com" />
      </div>
      <div
        className={`border-2 bg-primary border-secondary dark:bg-background hover:bg-muted-foreground dark:hover:bg-muted-foreground rounded-full scale-90 md:scale-100 ${smallIcon}`}
      >
        <SocialIcon bgColor="transparent" url="https://www.instagram.com" />
      </div>
    </div>
  );
};

export default SocialIcons;
