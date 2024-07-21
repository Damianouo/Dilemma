/* eslint-disable react/prop-types */
import { twMerge as tm } from "tailwind-merge";

const Accordion = ({ children, className }) => {
  return (
    <div className={tm("flex flex-col transition-all", className)}>
      {children}
    </div>
  );
};

export default Accordion;
