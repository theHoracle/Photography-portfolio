"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import Paragraph from "./Paragraph";

type Props = {
  index: number;
  question: string;
  answer: string;
};

const Accordion = (props: Props) => {
  const [showFaq, setShowFaq] = useState(false);
  const { index, question, answer } = props;
  console.log(index);
  return (
    <div
      className={`border-b-2 lg:border-y-2 border-color py-8 px-4 w-full md:w-1/2 text-accent-color ${
        index % 2 === 0 ? "md:border-r-2 border-border-primary" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-xl uppercase">{question}?</h4>
        <div
          onClick={() => setShowFaq(!showFaq)}
          className="border-2 border-border-primary rounded-full p-4 "
        >
          {showFaq ? (
            <ChevronUp height={30} width={30} />
          ) : (
            <ChevronDown height={30} width={30} />
          )}
        </div>
      </div>
      <div
        className={`py-4 text-border-secondary ${showFaq ? "block" : "hidden"}`}
      >
        <Paragraph size="xl">{answer}</Paragraph>
      </div>
    </div>
  );
};

export default Accordion;
