import Link from "next/link";
import Hero from "./ui/Hero";
import ListRender from "./ui/ListRender";
import Paragraph from "./ui/Paragraph";
import SocialIcons from "./ui/SocialIcons";
import Ticker from "./Ticker";
import Heading from "./ui/Heading";
import { ArrowUpRightIcon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";


const Footer = () => {
  return (
    <footer className="mt-8">
      <h1 className="text-7xl text-border-primary font-bold text-right mt-80">
        PHOTOG
      </h1>
      <Ticker />
      <div className="md:flex items-center ">
        <div className="py-10 md:py-[72px] md:border-0  px-6 flex flex-col gap-4 border-x-2 border-border-primary ">
          <Paragraph variants="topic">
            A more meaningful home for Photography
          </Paragraph>
          <Heading size="sm">
            <span className="flex justify-start items-center gap-2">
              Let&apos;s
              <Button>
                <ArrowUpRightIcon />
              </Button>
            </span>
            work together
          </Heading>
        </div>
        <div className="px-10 md:flex-1 py-5 border-2 border-border-primary">
          <ListRender />
        </div>
      </div>
      <div className="flex  flex-col-reverse md:flex-row gap-4 justify-between items-center my-4 md:my-8 font-medium">
        <div className="flex-1">
          <SocialIcons small={true} />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
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
          <Paragraph className="" size="sm">
            © 2024 theHoracle. All rights reserved.
          </Paragraph>
        </div>
        <div className="flex-1 flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
