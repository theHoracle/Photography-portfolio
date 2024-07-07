import { ArrowRight } from "lucide-react";
import LeftRightButton from "./ui/LeftRightButton";
import ReviewCard from "./ui/ReviewCard";
import Link from "next/link";
import Paragraph from "./ui/Paragraph";
import Heading from "./ui/Heading";
import { AddReviewDialog } from "./AddReviewDialog";
import { Button } from "./ui/button";

const Testimonials = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between  py-8  items-start border-b-2 mb-4 border-color">
        <div className="">
          <div>
            <Paragraph variants="topic">Testimonials</Paragraph>
            <Heading size="sm" className="mb-4">
              what my client say
            </Heading>
          </div>
          <div className="md:flex md:items-end md:justify-between">
            <div className="">
              <Paragraph className="text-accent-color">Total Reviews</Paragraph>
              <Heading size="sm">323</Heading>
            </div>
            <div className="hidden md:inline-block">
              <AddReviewDialog />
            </div>
          </div>
        </div>
        <div className="md:flex items-center gap-4 mt-6 md:mt-0">
          <span className="hidden md:inline-block">
            <LeftRightButton />
          </span>

          <Button variant="outline" size="lg">
            <Link
              href="/reviews"
              className="flex items-center justify-between capitalize"
            >
              view all testimonials
              <ArrowRight width={25} height={20} />
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center md:items-start justify-center md:justify-between">
        <ReviewCard />
      </div>
      <div className="md:hidden flex items-center flex-col gap-4 ">
        <AddReviewDialog />
        <LeftRightButton />
      </div>
    </div>
  );
};

export default Testimonials;
