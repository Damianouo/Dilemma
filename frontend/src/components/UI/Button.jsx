/* eslint-disable react/prop-types */
import { twMerge as tm } from "tailwind-merge";

const Button = ({ children, handleClick, className, ...props }) => {
  return (
    <button
      className={tm(
        "flex items-center justify-center gap-1 rounded-lg bg-primary-700 p-2 text-base text-primary-400",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
