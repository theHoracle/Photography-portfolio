const ListRender = () => {
  const footerLinks = [
    [["home"], ["about me", "my works", "testimonials"]],
    [["clients"], ["Coke", "Pepsi", "Vogue", "Davido"]],
    [["portfolio"], ["Events", "Potrait", "Branding", "Commercial", "BTS"]],
    [["services"], ["Potraits", "Events", "Commercial"]],
  ];
  return (
    <div className="flex flex-wrap text-sm">
      {footerLinks.map((links, index) => {
        return (
          <ul
            key={index}
            className="uppercase flex flex-col items-start flex-auto py-4 w-1/2 gap-1 pr-4"
          >
            <h5 className="text-border-secondary  font-semibold">{links[0]}</h5>
            {links[1].map((link, index) => {
              return (
                <li className="border-b-2 py-0.5 border-border-primary text-white/75">
                  {link}
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
