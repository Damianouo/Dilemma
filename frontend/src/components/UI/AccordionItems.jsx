import { cn } from "../../utils/cn";

/* eslint-disable react/prop-types */
const AccordionItems = ({ children, accordionOpen, className }) => {
  return (
    <div
      className={cn(
        "grid overflow-hidden transition-all",
        accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default AccordionItems;
