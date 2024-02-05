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
        <Image
          src="/img/fashion-model-in-fur.jpeg"
          alt="Fashion model in fur"
          width={380}
          height={560}
          className="text-center mx-auto my-8 rounded-2xl"
        />
      </div>

      <div className="my-6 all-border border-color p-8 rounded-2xl">
        <div className=" mb-8">
          <h4>Introduction</h4>
          <Paragraph className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            enim aut suscipit, voluptatum ab magnam sed delectus iste? Deleniti
            eos accusamus provident quisquam iure, est tempore natus
            exercitationem pariatur, nam aspernatur vitae dicta quia. Omnis sunt
            suscipit fuga, eius eum cumque quia dolorum nostrum optio laudantium
            corrupti qui molestias natus! Veniam ut molestiae expedita delectus.
            Maxime ab alias aperiam perspiciatis reprehenderit, eligendi
            molestias eveniet vitae asperiores deleniti et cupiditate. Velit?
          </Paragraph>
        </div>
        <div className="py-8 mx-[-2rem] px-8 border-t border-color">
          <h4>Contact Information</h4>
          <div>
            <h5>Email</h5>
            <Paragraph>princemjames2@gmail.com</Paragraph>
            <h5>Phone Number</h5>
            <Paragraph>+234 990 3109 821</Paragraph>
          </div>
        </div>
        <div className="mb-8">
          <SocialIcons />
        </div>
        <div className="flex flex-col items-center justify-between gap-4">
          <Button variant="outline" size="lg" className="w-full text-lg">
            Let's Work
          </Button>
          <Button variant="outline" size="lg" className="w-full text-lg">
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
