/* eslint-disable react/prop-types */

import { cn } from "../../utils/cn";

const FormTitle = ({ children, className }) => {
  return (
    <h2
      className={cn(
        "border-primary-500/60 border-b-[1px] px-2 py-2 font-bold md:px-6 md:py-4",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default FormTitle;
