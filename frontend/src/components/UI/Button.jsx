/* eslint-disable react/prop-types */

import { cn } from "../../utils/cn";

const Button = ({ children, onClick, className, type = "button", ...props }) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-1 rounded-md p-2 text-base transition-colors",
        "from-secondary-500 to-secondary-700 text-secondary-100 bg-linear-to-b shadow-md",
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
