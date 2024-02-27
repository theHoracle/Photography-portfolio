import ArrowLink from "./ui/ArrowLink";
import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";

const PricesBox = ({ options }: Options[] | any) => {
  if (!options || !Array.isArray(options)) {
    return null; // or handle it in another way, like displaying a message
  }

  return (
    <div>
      {options.map((option: Options, index: number) => {
        return (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 md:justify-between border-t-2 border-border-primary py-6 md:px-4 mb-2"
          >
            <div className="text-accent-color ">
              <Paragraph className="capitalize text-xl md:text-base">
                {option.subTitle}
              </Paragraph>
              <div className="flex items-end md:items-center md:gap-3 justify-between">
                <Heading>
                  <span>$</span>
                  {option.price}
                </Heading>
                <ArrowLink
                  text="Book a call"
                  href="https://wa.me/07058212014"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1  w-full md:w-3/5">
              {option.descList.map((desc, index) => {
                return (
                  <div
                    key={index}
                    className="border-2 rounded-xl border-border-primary p-3 uppercase"
                  >
                    {desc}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PricesBox;
