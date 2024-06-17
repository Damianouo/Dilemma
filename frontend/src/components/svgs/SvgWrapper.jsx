/* eslint-disable react/prop-types */
import { twMerge as tm } from "tailwind-merge";

const SvgWrapper = ({ children, className, ...props }) => {
  return (
    <span {...props} className={tm("flex h-4 w-4 rounded-md p-1", className)}>
      {children}
    </span>
  );
};

export default SvgWrapper;
