import { twMerge as tm } from "tailwind-merge";

/* eslint-disable react/prop-types */
const DropDown = ({ children, className, onClick }) => {
  return (
    <div
      className={tm(
        "relative flex cursor-pointer items-center justify-center",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default DropDown;
