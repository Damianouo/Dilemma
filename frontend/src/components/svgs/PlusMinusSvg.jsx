import { cn } from "../../utils/cn";

const PlusMinusSvg = ({ className, open, ...props }) => {
  return (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      className={cn("", className)}
      {...props}
    >
      <rect
        y="7"
        width="16"
        height="2"
        rx="1"
        className={`origin-center transition duration-200 ease-out ${open && "rotate-180!"}`}
      />
      <rect
        y="7"
        width="16"
        height="2"
        rx="1"
        className={`origin-center rotate-90 transition duration-200 ease-out ${
          open && "rotate-180!"
        }`}
      />
    </svg>
  );
};

export default PlusMinusSvg;
