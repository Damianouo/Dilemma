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
          "flex-1 rounded-md border-2 border-primary-500 bg-linear-to-b from-primary-200 to-primary-300 px-2 py-1 transition-colors",
          "text-primary-950 focus-visible:border-primary-950  focus-visible:outline-hidden",
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
