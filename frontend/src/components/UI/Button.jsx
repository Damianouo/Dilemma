/* eslint-disable react/prop-types */
import { twMerge as tm } from "tailwind-merge";

const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button
      className={tm(
        "flex items-center justify-center gap-1 rounded-md bg-secondary-300 p-2 text-base text-secondary-700",
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
