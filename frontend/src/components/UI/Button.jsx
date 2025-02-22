/* eslint-disable react/prop-types */
import { twMerge as tm } from "tailwind-merge";

const Button = ({
  children,
  onClick,
  className,
  type = "button",
  ...props
}) => {
  return (
    <button
      className={tm(
        "flex items-center justify-center gap-1 rounded-md p-2 text-base transition-colors",
        "bg-linear-to-b from-secondary-500 to-secondary-700 text-secondary-100 shadow-md",
        className,
      )}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
