import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";
import LeftRightButton from "./ui/LeftRightButton";
import ReviewCard from "./ui/ReviewCard";
import Link from "next/link";
import Paragraph from "./ui/Paragraph";
import Heading from "./ui/Heading";

const Testimonials = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between  py-8  items-start border-b-2 border-color">
        <div>
          <Paragraph variants="topic">Testimonials</Paragraph>
          <Heading size="sm" className="mb-4">
            what my client say
          </Heading>
          <p className="text-accent-color">Total Reviews</p>
          <Heading size="sm">323</Heading>
        </div>
        <div className="md:flex items-center justify- gap-4">
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
      <ReviewCard />
      <LeftRightButton />
    </div>
  );
};

export default Testimonials;
