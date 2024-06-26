/* eslint-disable react/prop-types */
import { twMerge as tm } from "tailwind-merge";

const DropDownUl = ({ children, className, state }) => {
  return (
    <ul
      className={tm(
        "absolute top-full z-10 rounded-md bg-primary-600 p-2 text-left transition-all",
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

export default DropDownUl;
