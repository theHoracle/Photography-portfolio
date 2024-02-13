import Image from "next/image";

import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";
import TitledLink from "./TitledLink";

const AboutPage = () => {
  const about = [
    ["15+", "Years in Business"],
    ["500+", "Happy Clients"],
    ["10+", "Photography awards"],
    ["05+", "International shoots"],
    ["10,100+", "Social Media followers"],
    ["90%", "Client Retention rate"],
  ];

  return (
    <div className="">
      <div className="my-8">
        <div className="rounded-2xl">
          <Image
            src="/img/j-cole.webp"
            alt="Jcole"
            height={380}
            width={380}
            className="rounded-2xl"
          />
        </div>
        <div className="mt-8 border-b-2 border-border-primary pb-12">
          <Paragraph variants="topic">about</Paragraph>
          <Heading size="sm" className="mb-4">
            about the horacle
          </Heading>
          <ul className="flex flex-wrap  gap-2.5 w-full ">
            {about.map((info, index) => {
              return (
                <li
                  key={index}
                  className="min-w-[158px] rounded-2xl h-28 border-2 border-border-secondary bg-border-primary flex flex-col flex-auto items-center justify-center"
                >
                  <Heading size="sm">{info[0]}</Heading>
                  <Paragraph size="sm" className="text-gray-500">
                    {info[1]}
                  </Paragraph>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="border-b-2 border-border-primary py-12">
          <Paragraph
            variants="topic"
            className="text-2xl font-medium tracking-tight mb-4"
          >
            my biography
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
            tempora deleniti obcaecati nisi architecto optio! Quam sapiente eius
            neque voluptatem eos praesentium ratione eligendi, consectetur
            quaerat sit amet ad necessitatibus laboriosam et, doloremque,
            repellat voluptatum unde consequuntur blanditiis accusamus a? Ex
            aspernatur voluptate at harum, quo quia omnis amet, esse laboriosam
            similique quasi! Nihil beatae quod soluta in accusamus, aperiam
            tenetur quas illo cupiditate. Accusamus assumenda velit impedit
            corrupti praesentium
          </Paragraph>
        </div>
        <div className="mt-12">
          <TitledLink
            desc="Journey"
            title="TheHoracle's Journey - A timeline"
          />
          <div>
            {" "}
            <div className="border-2 border-border-primary  rounded-2xl px-4 py-6 my-10 overflow-hidden relative">
              <div className="w-full h-full rounded-2xl rotate-[35deg] translate-x-48 -translate-y-1/3 bg-border-primary/45 absolute -z-20"></div>
              <div className="w-full h-full rounded-2xl rotate-[35deg] -translate-x-48 translate-y-1/3 bg-border-primary/45 absolute -z-20"></div>
              <div className="flex items-center justify-between"></div>
              <div>
                <Paragraph variants="topic" size="lg" className="mb-1">
                  YEAR 2024
                </Paragraph>
                <Paragraph size="sm" className="text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloremque laudantium sapiente nemo esse incidunt dolore hic
                  ad, rem pariatur alias. Delectus incidunt cum unde?
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
