/* eslint-disable react/prop-types */
import { twMerge as tm } from "tailwind-merge";
const AccordionItems = ({ children, accordionOpen, className }) => {
  return (
    <div
      className={tm(
        "grid overflow-hidden shadow-md transition-all",
        accordionOpen
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr]  opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default AccordionItems;
