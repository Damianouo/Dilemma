import { cn } from "../../../utils/cn";

const MenuSvg = ({ className, accordionOpen, ...props }) => {
  return (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      className={cn("shrink-0", className)}
      {...props}
    >
      <rect
        y="0"
        x={accordionOpen ? "2" : "0"}
        width="16"
        height="2"
        rx="1"
        className={`origin-top-left rotate-0 transition-all ease-out ${
          accordionOpen && "rotate-45!"
        }`}
      />
      <rect
        y="7"
        width="16"
        height="2"
        rx="1"
        className={`transition-all ease-out ${accordionOpen && "opacity-0"}`}
      />
      <rect
        y="14"
        x={accordionOpen ? "2" : "0"}
        width="16"
        height="2"
        rx="1"
        className={`origin-bottom-left rotate-0 transition-all ease-out ${
          accordionOpen && "-rotate-45!"
        }`}
      />
    </svg>
  );
};

export default MenuSvg;
