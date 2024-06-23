/* eslint-disable react/prop-types */
import { twMerge as tm } from "tailwind-merge";

const SvgWrapper = ({ children, className, ...props }) => {
  return (
    <span
      {...props}
      className={tm(
        "flex h-6 w-6 items-center justify-center rounded-md p-1",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default SvgWrapper;
