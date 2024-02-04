import Link from "next/link";
import Button from "./ui/Button";
import Paragraph from "./ui/Paragraph";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  desc: string;
  toGO: string;
};

const TitledLink = (props: Props) => {
  const { title, desc, toGO } = props;
  return (
    <div className="flex flex-col py-8 px-6 items-start">
      <Paragraph variants="topic">{desc}</Paragraph>
      <h2 className="uppercase text-3xl mb-4">{title}</h2>
      <Button variant="outline" size="lg">
        <Link href={toGO} className="flex items-center justify-between">
          Know more <ArrowRight className="h-3 w-3" />
        </Link>
      </Button>
    </div>
  );
};

export default TitledLink;
