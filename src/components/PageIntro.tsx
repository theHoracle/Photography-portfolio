import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";
import Image from "next/image";

type Props = {
  page: string;
  head: string;
  note: string;
};

const PageIntro = (props: Props) => {
  const { page, head, note } = props;
  return (
    <div className="my-8">
      <Image
        src="/img/j-cole.webp"
        alt="Jcole singing"
        width={2093}
        height={1395}
        className="rounded-2xl"
      />
      <div className="my-6">
        <Paragraph variants="topic">{page}</Paragraph>
        <Heading size="sm">{head}</Heading>
      </div>
      <Paragraph className="text-accent-color">{note}</Paragraph>
    </div>
  );
};

export default PageIntro;
