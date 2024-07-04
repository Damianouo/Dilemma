/* eslint-disable react/prop-types */
import { twMerge as tm } from "tailwind-merge";

const FormTitle = ({ children, className }) => {
  return (
    <h2
      className={tm(
        "border-b-[1px] border-primary-500/60 px-2 py-2 font-bold md:px-6 md:py-4",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default FormTitle;
