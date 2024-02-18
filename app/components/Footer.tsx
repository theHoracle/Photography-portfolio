import Link from "next/link";
import Hero from "./ui/Hero";
import ListRender from "./ui/ListRender";
import Paragraph from "./ui/Paragraph";
import SocialIcons from "./ui/SocialIcons";

const Footer = () => {
  return (
    <footer className="mt-8">
      <h1 className="text-7xl text-border-primary font-bold text-right mt-80">
        PHOTOG
      </h1>
      <div className="border-x border-border-primary">
        <Hero />
      </div>
      <div className="px-10 py-5 border border-border-primary">
        <ListRender />
      </div>
      <div className="flex flex-col gap-4 justify-between items-center text-border-secondary my-8 font-medium">
        <Paragraph
          size="sm"
          className="flex items-center justify-between gap-1.5 "
        >
          <Link href="/" className="">
            Terms and Conditions
          </Link>
          <span>|</span>
          <Link href="/">Privacy Policy</Link>
        </Paragraph>
        <Paragraph size="sm">© 2024 theHoracle. All rights reserved.</Paragraph>
        <SocialIcons small />
      </div>
    </footer>
  );
};

export default Footer;
