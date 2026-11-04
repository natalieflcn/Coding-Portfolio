import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

function Accordion({ items }) {
  const [openCategory, setOpenCategory] = useState(null);

  const handleOpenCategory = function (category) {};

  return (
    <div className="flex flex-col items-start gap-3">
      {items.map((item) => (
        <div
          className="flex w-full justify-between not-last:border-b not-last:border-b-blue-0 not-last:pb-3"
          key={item.category}
        >
          <strong>{item.category}</strong>
          {openCategory ? (
            <FaChevronUp size={20} fill="var(--color-blue-0)" />
          ) : (
            <FaChevronDown size={20} fill="var(--color-blue-0)" />
          )}
          {openCategory === item && <div>this one is open</div>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
