import Link from "next/link";
import Button from "./ui/Button";
import Paragraph from "./ui/Paragraph";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  desc: string;
  toGO?: string;
  buttonText?: string;
};

const TitledLink = (props: Props) => {
  const { title, desc, toGO, buttonText } = props;
  return (
    <div className="flex flex-col py-8  items-start border-b-2 border-color">
      <Paragraph variants="topic">{desc}</Paragraph>
      <h2 className="uppercase text-3xl mb-4">{title}</h2>
      {toGO ? (
        <Button variant="outline" size="lg">
          <Link
            href={toGO}
            className="flex items-center justify-between capitalize"
          >
            {!!!buttonText ? "Know more" : buttonText}{" "}
            <ArrowRight width={25} height={20} />
          </Link>
        </Button>
      ) : null}
    </div>
  );
};

export default TitledLink;
