import Image from "next/image";
import TitledLink from "./TitledLink";
import Paragraph from "./ui/Paragraph";
import { SocialIcon } from "react-social-icons";
const AboutCard = () => {
  return (
    <div>
      <div className="">
        <TitledLink title="I am Photography" desc="About" toGO="google.com" />
        <Image
          src="/img/fashion-model-in-fur.jpeg"
          alt="Fashion model in fur"
          width={400}
          height={600}
          className="text-center mx-auto rounded-2xl"
        />
      </div>

      <div className="m-6 all-border border-color p-8 rounded-2xl">
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
        <div className="all-border border-color flex items-center justify-between rounded-full p-6">
          <div>
            <SocialIcon
              className="text-sm"
              bgColor="black"
              url="www.facebook.com"
            />
          </div>
          <div>
            <SocialIcon bgColor="black" url="www.x.com" />
          </div>
          <div>
            <SocialIcon bgColor="black" url="www.instagram.com" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
