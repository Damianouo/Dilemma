import { cn } from "../../utils/cn";
import SvgWrapper from "./SvgWrapper";
const PendingSvg = ({ className }) => {
  return (
    <SvgWrapper className={cn("h-8 w-8 shrink-0 text-amber-600", className)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
      </svg>
    </SvgWrapper>
  );
};

export default PendingSvg;
