import Testimonials from "../../components/Testimonials";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Form from "@/components/ui/Form";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SocialIcons from "@/components/ui/SocialIcons";
import Image from "next/image";

export default function Contact() {
  return (
    <MaxWidthWrapper>
      <section className="my-8">
        <div>
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/img/j-cole.webp"
              alt="J Cole"
              width={1000}
              height={1000}
              className="rounded-2xl "
            />
            <div>
              <SocialIcons />
            </div>
          </div>
          <div className="flex flex-col gap-1 border-b-2 border-border-primary py-8">
            <Paragraph variants="topic">contact</Paragraph>
            <Heading size="sm">Get in touch with me</Heading>
            <Paragraph className="text-accent-color mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              id eius asperiores dolores, vel minus sint doloremque impedit fuga
              officia?
            </Paragraph>
          </div>
        </div>
        <div className="text-accent-color flex flex-col md:flex-row gap-4 items-start md:items-center py-12 border-b-2 border-border-primary">
          <div className="md:w-2/5 ">
            <Heading className="uppercase" size="sm">
              Contact Information
            </Heading>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              saepe laborum eos! Tenetur alias corrupti labore asperiores sunt
              nemo nihil, et perferendis dolor ipsa tempore.
            </Paragraph>
          </div>
          <div className="flex flex-col items-start md:flex-row gap-4">
            <Link
              href="/portfolio"
              className="uppercase flex items-center justify-end  text-sm border-b-2 border-border-primary text-white"
            >
              +234-705-8212-014 <ArrowUpRight height={30} />
            </Link>

            <Link
              href="mail:theHoracle@gmail.com"
              className=" flex items-center justify-end  text-sm border-b-2 border-border-primary text-white"
            >
              theHoracle@gmail.com <ArrowUpRight height={30} />
            </Link>
          </div>
        </div>
        <div className="my-8 flex flex-col md:flex-row gap-4 items-start">
          <div className="text-accent-color my-4 w-full md:w-2/5">
            <Heading className="uppercase" size="sm">
              Send Me a Message
            </Heading>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              saepe laborum eos! Tenetur alias corrupti labore asperiores sunt
              nemo nihil, et perferendis dolor ipsa tempore.
            </Paragraph>
          </div>
          <div className="w-full md:w-3/5">
            <Form />
          </div>
        </div>
      </section>
      <Testimonials />
    </MaxWidthWrapper>
  );
}
