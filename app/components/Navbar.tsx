//Using screen size would render mobile nav or desktop nav,

const Navbar = () => {
  return (
    <div className="w-full h-1/6">
      <div className="h-full mt-[-3px] mx-6 all-border border-border-primary flex justify-between items-end">
        <div className="p-8">Our Logo</div>
        <div className="border-t border-l border-border-primary rounded-tl-3xl p-8">
          ham
        </div>
      </div>
    </div>
  );
};

export default Navbar;
