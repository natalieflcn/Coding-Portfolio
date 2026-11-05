import { useEffect, useState } from "react";
import Button from "../ui/Button";

const navItems = [
  { title: "About Me", href: "about" },
  { title: "Experience", href: "experience" },
  { title: "Skills", href: "skills" },
  { title: "Contact", href: "contact" },
];

const NavItem = function ({ item, activeItem }) {
  function handleClick() {
    document.getElementById(item.href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <button
      className={`font-mono hidden md:block text-xs  lg:text-sm xl:text-base font-semibold transition-colors duration-75 ${
        activeItem === item.href
          ? "text-red-200 cursor-default"
          : "text-white cursor-pointer hover:text-red-100"
      }`}
      onClick={handleClick}
    >
      {item.title}
    </button>
  );
};

function NavBar() {
  const [activeItem, setActiveItem] = useState("about");

  useEffect(() => {
    // creates an array of DOM elements with ids (for href)
    const sections = navItems
      .map((item) => document.getElementById(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // when DOM element enters viewport, it will be set as the active nav item
            setActiveItem(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="sticky md:fixed z-50 w-full bg-dark-300 shadow-lg opacity-95 flex flex-col gap-2 xs:flex-row xs:justify-between px-8 py-6 mb-5 items-center">
      <h2 className="uppercase text-shimmer text-xl lg:text-2xl">
        Natalie Falcon
      </h2>

      {navItems.map((item, i) => (
        <NavItem item={item} key={i} activeItem={activeItem} />
      ))}

      <Button variant="red" className="button-shimmer-red">
        Corporate Mode
      </Button>
    </div>
  );
}

export default NavBar;
