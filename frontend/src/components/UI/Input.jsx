/* eslint-disable react/prop-types */
import { twMerge as tm } from "tailwind-merge";

const Input = ({
  label,
  id,
  type = "text",
  className,
  inputClassName,
  ...props
}) => {
  return (
    <div className={tm("flex flex-col gap-2 text-base", className)}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={tm(
          "flex-1 rounded-md border-2 border-secondary-400 bg-primary-200 px-2 py-1 transition-colors",
          "text-primary-700 focus-visible:border-secondary-600  focus-visible:outline-none",
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
