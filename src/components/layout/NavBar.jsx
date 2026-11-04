import Button from "../ui/Button";

const navItems = [
  { title: "About Me", href: "" },
  { title: "Experience", href: "" },
  { title: "Skills", href: "" },
  { title: "Contact", href: "" },
];

const NavItem = function (item) {
  return (
    <p className="font-mono hidden md:block text-xs  lg:text-sm xl:text-md font-semibold">
      {item.title}
    </p>
  );
};
function NavBar() {
  return (
    <div className="sticky md:fixed z-50 w-full bg-dark-300 shadow-lg opacity-95 flex flex-col gap-2 xs:flex-row xs: justify-between px-8 py-6 mb-5 items-center">
      <h2 className="uppercase text-shimmer text-xl lg:text-2xl">
        Natalie Falcon
      </h2>

      {/* For desktop users */}
      {navItems.map((item) => NavItem(item))}

      {/* For tablet users */}
      <Button variant="red">Disable UI</Button>
    </div>
  );
}

export default NavBar;
