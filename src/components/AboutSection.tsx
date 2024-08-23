import Image from "next/image";
import TitledLink from "./TitledLink";
import Paragraph from "./ui/Paragraph";
import { SocialIcon } from "react-social-icons";
import SocialIcons from "./ui/SocialIcons";
import Heading from "./ui/Heading";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

const AboutCard = () => {
  return (
    <div>
      <div className="">
        <TitledLink title="I am Photography" desc="About" toGO="google.com" />
      </div>
      <div className="grid md:grid-cols-2 md:gap-3 md:mt-8">
        <div className="relative overflow-hidden rounded-2xl min-h-96 my-8 md:m-0  w-full">
          <Image
            src="/img/fashion-model-in-fur.jpeg"
            alt="Fashion model in fur"
            fill
            className="object-cover object-center size-full "
          />
        </div>
        <div className=" border divide-y border-accent p-4 md:p-8 rounded-2xl w-full ">
          <div className="mb-8">
            <h4 className="capitalize my-3 font-medium text-lg">
              Introduction
            </h4>
            <Paragraph className="text-sm">
              Lorem, ipsum dolor sit amet usamus provident quisquam iure, est
              tempore natus exercitationem pariatur, nam expedita delectus.
              Maxime ab alias aperiam perspiciatis reprehenderit, eligendi
              molestias eveniet vitae asperiores deleniti et cupiditate. Velit?
            </Paragraph>
          </div>
          <div>
          <div className="py-8 md:mx-[-2rem] md:px-8">
            <Heading size="sm" className="capitalize my-3">
              Contact Information
            </Heading>
            <div className="lg:flex items-center justify-between text-sm">
              <div className="flex gap-1 md:flex-col">
                <h5>Email:</h5>
                <Paragraph>princemjames2@gmail.com</Paragraph>
              </div>
              <div className="flex gap-1 md:flex-col">
                <h5>Phone Number:</h5>
                <Paragraph>+234 990 3109 821</Paragraph>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch md:items-center gap-3 justify-between lg:tracking-tighter ">
            <SocialIcons />
            <div className="flex flex-col mt-8 lg:mt-0 lg:flex-row items-center justify-between gap-4">
              <Link
              href="/contact"
                className={`${buttonVariants({variant: "outline"})} w-full py-6 px-8 text-xs lg:text-lg lg:tracking-tighter lg:w-max`}
              >
                Let&apos;s Work
              </Link>
              <Button
              variant='outline'
                className="w-full py-6 text-xs lg:text-lg lg:tracking-tighter lg:w-max "
                >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutCard;
