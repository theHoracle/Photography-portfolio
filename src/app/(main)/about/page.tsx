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
            <ul className="flex flex-wrap lg:flex-nowrap  gap-2.5 w-full bg-background-color lg:py-4 overflow-x-scroll max-w-[1170px] bg-background">
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
          <div className="mt-12 flex flex-col gap-4">
            <div>
            <TitledLink
              desc="Journey"
              title="TheHoracle's Journey - A timeline"
              />
              </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 min-h-fit gap-4 md:gap-7 overflow-hidden ">
              {/* items */}
            {/* one */}
            <div className="relative w-full h-full min-h-[180px] bg-accent/30 text-gray-300 border-2 border-accent rounded-2xl px-6 sm:px-8 md:px-10 lg:px-12 overflow-hidden">
  {/* Decorative Rotated Squares */}
  <div className="absolute w-[200px] h-[200px] rounded-full rotate-[45deg] bg-accent/50 opacity-20 top-[-50px] right-[-50px]" />
  <div className="absolute w-[250px] h-[250px] rounded-full rotate-[45deg] bg-accent/50 opacity-20 bottom-[-100px] left-[100px]" />

  {/* Text Content */}
  <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-8 md:px-10 lg:px-12 gap-4">
    <h2 className="text-3xl font-bold text-gray-100">YEAR - 2020</h2>
    <p className="text-lg text-gray-400">
      In 2020, Damien’s dedication and creativity earned her several prestigious
      photography awards, solidifying her position as a visionary photographer.
    </p>
  </div>
</div>

          
   {/* two */}
  <div className="relative w-full h-full min-h-[180px] bg-accent/30 text-gray-300 border-2 border-accent rounded-2xl px-6 sm:px-8 md:px-10 lg:px-12 overflow-hidden">
  {/* Decorative Rotated Squares */}
  <div className="absolute w-[200px] h-[200px] rounded-full rotate-[45deg] bg-accent/50 opacity-20 top-[-50px] right-[-50px]" />
  <div className="absolute w-[250px] h-[250px] rounded-full rotate-[45deg] bg-accent/50 opacity-20 bottom-[-100px] left-[100px]" />
  {/* Text Content */}
  <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-8 md:px-10 lg:px-12 gap-4">
    <h2 className="text-3xl font-bold text-gray-100">YEAR - 2020</h2>
    <p className="text-lg text-gray-400">
      In 2020, Damien’s dedication and creativity earned her several prestigious
      photography awards, solidifying her position as a visionary photographer.
    </p>
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
