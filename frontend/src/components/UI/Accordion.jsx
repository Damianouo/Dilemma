/* eslint-disable react/prop-types */

import { cn } from "../../utils/cn";

const Accordion = ({ children, className }) => {
  return <div className={cn("flex flex-col transition-all", className)}>{children}</div>;
};

export default Accordion;
