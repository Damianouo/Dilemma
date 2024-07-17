/* eslint-disable react/prop-types */
import { twMerge as tm } from "tailwind-merge";

const DropDownItem = ({ children, className, state }) => {
  return (
    <ul
      className={tm(
        "absolute top-full z-50 rounded-md p-2 text-left transition-all",
        state
          ? " opacity-100 "
          : "pointer-events-none -translate-y-4 opacity-0",
        className,
      )}
    >
      {children}
    </ul>
  );
};

export default DropDownItem;
