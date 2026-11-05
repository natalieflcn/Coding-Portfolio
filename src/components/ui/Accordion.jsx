import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import hexFull from "../../assets/images/hex-full.png";
import hexEmpty from "../../assets/images/hex-empty.png";

const SubItem = function ({ subItem }) {
  let title = "";

  switch (subItem.level) {
    case 1:
      title = "Novice";
      break;
    case 2:
      title = "Intermediate";
      break;
    case 3:
      title = "Proficient";
      break;
    case 4:
      title = "Advanced";
      break;
    case 5:
      title = "Expert";
      break;
  }

  return (
    <div className="flex flex-col items-start gap-1">
      <p className="font-mono text-xs text-left text-red-200 font-semibold lg:text-sm">
        {subItem.name}
      </p>
      <div className="flex gap-1.25 lg:gap-1.5">
        {Array.from({ length: 5 }, (_, index) =>
          index < subItem.level ? (
            <img src={hexFull} className="w-4 lg:w-5 " key={index} />
          ) : (
            <img src={hexEmpty} className="w-4  lg:w-5" key={index} />
          ),
        )}
      </div>
      <p className="text-[0.7rem]  ">{title}</p>
    </div>
  );
};
function Accordion({ items }) {
  const [openCategories, setOpenCategories] = useState([]);

  const handleToggleCategory = function (category) {
    if (category === "all") return setOpenCategories(items);

    if (category === "none") return setOpenCategories([]);

    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category],
    );
  };

  return (
    <div className="flex flex-col items-start ">
      <div className="flex flex-row pt-3  sm:pt-0 justify-center text-[0.7rem] sm:text-xs  gap-1 xs:gap-2 lg:pb-3 w-full lg:gap-5 font-mono ">
        <p
          className="hover:text-dark-100 transition-colors duration-75 hover:cursor-pointer"
          onClick={() => handleToggleCategory("all")}
        >
          Expand
        </p>
        |
        <p
          className="hover:text-dark-100 transition-colors duration-75 hover:cursor-pointer"
          onClick={() => handleToggleCategory("none")}
        >
          Collapse
        </p>
      </div>
      {items.map((item) => (
        <div
          className="flex flex-col w-full not-last:border-b not-last:border-b-blue-0  hover:bg-dark-100 py-3 px-4 first:mt-2 transtion-bg duration-75 hover:cursor-pointer"
          key={item.category}
          onClick={() => handleToggleCategory(item)}
        >
          <div className="flex w-full justify-between items-center text-left gap-1">
            <strong className="text-xs xs:text-sm lg:text-base">
              {item.category}
            </strong>
            {openCategories &&
            openCategories.some((category) => category === item) ? (
              <FaChevronUp size={15} fill="var(--color-blue-0)" />
            ) : (
              <FaChevronDown size={15} fill="var(--color-blue-0)" />
            )}
          </div>

          {openCategories &&
            openCategories.some((category) => category === item) && (
              <div className="flex justify-start py-2 flex-wrap gap-8 gap-y-2 lg:gap-y-5">
                {item.items.map((subItem, i) => (
                  <SubItem subItem={subItem} key={i} />
                ))}
              </div>
            )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
