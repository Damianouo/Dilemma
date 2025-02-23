/* eslint-disable react/prop-types */

import { cn } from "../../utils/cn";

const Input = ({ label, id, type = "text", className, inputClassName, ...props }) => {
  return (
    <div className={cn("flex flex-col gap-2 text-base", className)}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={cn(
          "border-primary-500 from-primary-200 to-primary-300 flex-1 rounded-md border-2 bg-linear-to-b px-2 py-1 transition-colors",
          "text-primary-950 focus-visible:border-primary-950 focus-visible:outline-hidden",
          inputClassName,
        )}
        id={id}
        type={type}
        {...props}
      />
    </div>
  );
};

export default Input;
