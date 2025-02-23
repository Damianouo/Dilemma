import { cn } from "../../utils/cn";

const SvgWrapper = ({ children, className, ...props }) => {
  return (
    <span
      {...props}
      className={cn("flex h-6 w-6 items-center justify-center rounded-md p-1", className)}
    >
      {children}
    </span>
  );
};

export default SvgWrapper;
