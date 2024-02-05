import PortfolioImage from "./PortfolioImage";
import TitledLink from "./TitledLink";
import LeftRightButton from "./ui/LeftRightButton";

const Portfolio = () => {
  return (
    <div className="">
      <TitledLink
        desc="Portfolio"
        title="Explore my photography work"
        toGO="/works"
      />
      <PortfolioImage />
      <LeftRightButton />
    </div>
  );
};

export default Portfolio;
