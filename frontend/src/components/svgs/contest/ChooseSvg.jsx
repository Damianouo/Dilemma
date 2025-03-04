import { cn } from "../../../utils/cn";

const ChooseSvg = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="4"
      stroke="currentColor"
      width="24"
      height="24"
      className={cn("icon", className)}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
};

export default ChooseSvg;
