/* eslint-disable react/prop-types */
import SvgWrapper from "./SvgWrapper";
import { twMerge as tm } from "tailwind-merge";
const FailSvg = ({ className }) => {
  return (
    <SvgWrapper className={tm("h-8 w-8 shrink-0 text-rose-600", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 512 512"
      >
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
      </svg>
    </SvgWrapper>
  );
};

export default FailSvg;
