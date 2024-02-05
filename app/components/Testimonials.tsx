import TitledLink from "./TitledLink";
import LeftRightButton from "./ui/LeftRightButton";
import ReviewCard from "./ui/ReviewCard";

const Testimonials = () => {
  return (
    <div>
      <TitledLink
        desc="testimonials"
        title="what my client say"
        toGO="/reviews"
        buttonText="view all testimonials"
      />
      <ReviewCard />
      <LeftRightButton />
    </div>
  );
};

export default Testimonials;
