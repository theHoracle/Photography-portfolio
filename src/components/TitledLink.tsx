import Link from "next/link";
import Paragraph from "./ui/Paragraph";
import { ArrowRight } from "lucide-react";
import Heading from "./ui/Heading";
import LeftRightButton from "./ui/LeftRightButton";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  desc: string;
  toGO?: string;
  buttonText?: string;
  movable?: boolean;
};

const TitledLink = (props: Props) => {
  const { title, desc, toGO, buttonText, movable } = props;
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between  py-8  items-start border-b-2 border-color">
      <div>
        <Paragraph variants="topic">{desc}</Paragraph>
        <Heading size="sm" className="mb-4">
          {title}
        </Heading>
      </div>
      <div className="md:flex items-center justify- gap-4">
        {toGO ? (
            <Link
              href={toGO}
              // className="flex items-center justify-between capitalize"
              className={cn(buttonVariants({variant: "outlineTitle", size: "lg"}), "flex items-center justify-between capitalize")}
            >
              {!!!buttonText ? "Know more" : buttonText}{" "}
              <ArrowRight width={25} height={20} />
            </Link>
        ) : null}
      </div>
    </div>
  );
};

export default TitledLink;
