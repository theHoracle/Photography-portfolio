import Image from "next/image";
import TitledLink from "./TitledLink";
import Paragraph from "./ui/Paragraph";
import { SocialIcon } from "react-social-icons";
import Button from "./ui/Button";
import SocialIcons from "./ui/SocialIcons";
const AboutCard = () => {
  return (
    <div>
      <div className="">
        <TitledLink title="I am Photography" desc="About" toGO="google.com" />
      </div>
      <div className="md:flex items-center justify-between md:gap-3 md:mt-8">
        <div className="overflow-hidden md:w-full rounded-2xl lg:max-h-[480px]">
          <Image
            src="/img/fashion-model-in-fur.jpeg"
            alt="Fashion model in fur"
            width={380}
            height={560}
            className="text-center mx-auto my-8 md:m-0  md:w-full"
          />
        </div>
        <div className="my-6 all-border border-border-primary p-8 rounded-2xl w-full ">
          <div className="mb-8">
            <h4>Introduction</h4>
            <Paragraph className="text-sm">
              Lorem, ipsum dolor sit amet usamus provident quisquam iure, est
              tempore natus exercitationem pariatur, nam expedita delectus.
              Maxime ab alias aperiam perspiciatis reprehenderit, eligendi
              molestias eveniet vitae asperiores deleniti et cupiditate. Velit?
            </Paragraph>
          </div>
          <div className="py-8 mx-[-2rem] px-8 border-t border-color">
            <h4>Contact Information</h4>
            <div className="lg:flex items-center justify-between text-sm">
              <div>
                <h5>Email</h5>
                <Paragraph>princemjames2@gmail.com</Paragraph>
              </div>
              <div>
                <h5>Phone Number</h5>
                <Paragraph>+234 990 3109 821</Paragraph>
              </div>
            </div>
          </div>
          <div className="lg:flex items-center justify-between lg:tracking-tighter ">
            <SocialIcons />
            <div className="flex flex-col mt-8 lg:mt-0 lg:flex-row items-center justify-between gap-4">
              <Button
                variant="outline"
                size="lg"
                className="w-full text-lg lg:tracking-tighter lg:w-max"
              >
                Let&apos;s Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full text-lg lg:tracking-tighter lg:w-max "
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
