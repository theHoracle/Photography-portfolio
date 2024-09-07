import Paragraph from "@/components/ui/Paragraph";
import TitledLink from "@/components/TitledLink";
import Image from "next/image";
import Heading from "@/components/ui/Heading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default async function About() {
  
  const about = [
    ["15+", "Years in Business"],
    ["500+", "Happy Clients"],
    ["10+", "Photography awards"],
    ["05+", "International shoots"],
    ["10,100+", "Social Media followers"],
    ["90%", "Client Retention rate"],
  ];

  return (
    <div className="relative w-full flex flex-col">
      <section>
      <MaxWidthWrapper>
      <div className="my-4 h-[calc(100lvh-80px)] bg-background w-full">
          <div className="rounded-2xl relative h-[calc(100lvh-80px)] w-full">
            <Image
              src="/img/j-cole.webp"
              alt="Jcole"
              fill
              className="object-cover object-center rounded-2xl"
            />
          </div>
          <div className="mt-8 lg:mt-0 border-b-2 lg:border-0 border-border-primary pb-12 lg:absolute lg:top-0 w-full ">
            <div className="bg-background-color  lg:pr-3 lg:py-4 bg-background lg:w-1/2 relative lg-about-header">
              <Paragraph variants="topic">about</Paragraph>
              <Heading size="sm" className="mb-4">
                about the horacle
              </Heading>
            </div>
            <div className="lg-about-box">
            <ul className="flex flex-wrap lg:flex-nowrap  gap-2.5 w-full bg-background-color lg:py-4 overflow-x-scroll bg-background">
              {about.map((info, index) => {
                return (
                  <li
                    key={index}
                    className="min-w-[158px] flex-1 rounded-2xl h-28 border-2 border-border-secondary bg-accent/50 flex flex-col items-center lg:items-start justify-center py-6 px-4 lg:px-3"
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
            <div className="hidden lg:block w-1/2 h-8 bg-background rounded-br-lg lg-about-card relative" />
          </div>
          </div>
          </MaxWidthWrapper>
          </section>
{/* bio */}
        <section className="flex py-20">
        <MaxWidthWrapper>
            <div>
          <div className="border-y border-border-primary py-12 w-full">
            <Paragraph
              variants="topic"
              className="text-2xl font-medium tracking-tight mb-4"
            >
              my biography
            </Paragraph>
            <Paragraph className="text-accent-color">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, tempora deleniti obcaecati nisi architecto optio! Quam
              sapiente eius neque voluptatem eos praesentium ratione eligendi,
              consectetur quaerat sit amet ad necessitatibus laboriosam et,
              doloremque, repellat voluptatum unde consequuntur blanditiis
              accusamus a? Ex aspernatur voluptate at harum, quo quia omnis
              amet, esse laboriosam similique quasi! Nihil beatae quod soluta in
              accusamus, aperiam tenetur quas illo cupiditate. Accusamus
              assumenda velit impedit corrupti praesentium
            </Paragraph>
          </div>
          <div className="mt-12">
            <TitledLink
              desc="Journey"
              title="TheHoracle's Journey - A timeline"
            />
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-7">
              {/* items */}
            
              <div className="border-2 w-full h-full min-h-[180px] bg-accent/30 border-border-primary rounded-2xl px-4 py-6 my-10 overflow-hidden relative">
                <div className="w-full rounded-2xl rotate-[35deg] aspect-square bg-accent/50 absolute top-1/3 right-1/2" />
                <div className="w-full rounded-2xl rotate-[35deg] aspect-square bg-accent/50 absolute -bottom-1/4 left-3/4 " />
                <div className="absolute inset-0 flex flex-col items-start justify-center py-8 px-8 gap-4">
                  <h2  className="mb-1 text-3xl">
                    YEAR - 2024
                  </h2>
                  <Paragraph size="sm" className="text-gray-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloremque laudantium sapiente nemo esse incidunt dolore hic
                    ad, rem pariatur alias. Delectus incidunt cum unde?
                  </Paragraph>
                </div>
            </div>
              <div className="border-2 w-full h-full min-h-[180px] bg-accent/30 border-border-primary rounded-2xl px-4 py-6 my-10 overflow-hidden relative">
                <div className="w-full rounded-2xl rotate-[35deg] aspect-square bg-accent/50 absolute top-1/3 right-1/2" />
                <div className="w-full rounded-2xl rotate-[35deg] aspect-square bg-accent/50 absolute -bottom-1/4 left-3/4 " />
                <div className="absolute inset-0 flex flex-col items-start justify-center py-8 px-8 gap-4">
                  <h2  className="mb-1 text-3xl">
                    YEAR - 2024
                  </h2>
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
      </MaxWidthWrapper>
      </section>
    
    </div>
  );
}
