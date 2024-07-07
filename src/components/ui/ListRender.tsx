import Link from "next/link";

const ListRender = () => {
  const footerLinks = [
    [["home"], ["about me", "my works", "testimonials"]],
    [["clients"], ["Coke", "Pepsi", "Vogue", "Davido"]],
    [["portfolio"], ["Events", "Potrait", "Branding", "Commercial", "BTS"]],
    [["services"], ["Potraits", "Events", "Commercial"]],
  ];
  return (
    <div className="flex flex-wrap  md:justify-between text-sm md:py-6">
      {footerLinks.map((links, index) => {
        return (
          <ul
            key={index}
            className="uppercase flex flex-col items-start flex-auto py-4 w-1/2 md:w-fit gap-1 pr-4"
          >
            <h5 className="text-border-secondary  font-semibold">{links[0]}</h5>
            {links[1].map((link, index) => {
              return (
                <li
                  key={index}
                  className="border-b-2 py-0.5 border-primary text-muted-foreground hover:text-slate-300 hover:dark:text-white"
                >
                  <Link href={link}>{link}</Link>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default ListRender;
